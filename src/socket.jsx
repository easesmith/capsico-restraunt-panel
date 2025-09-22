/* eslint-disable react/prop-types */
// import { createContext, useMemo, useContext } from "react";
// import io from "socket.io-client";
// const server = import.meta.env.VITE_SOCKET_URL;
// const SocketContext = createContext();

// const getSocket = () => useContext(SocketContext);

// const SocketProvider = ({ children }) => {
//     const socket = useMemo(() => io(server, {
//         withCredentials: true,
//         auth: {
//             token: localStorage.getItem("accessToken")
//         },
//         transports: ['websocket', 'polling']

//     }), []);

//     return (
//         <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//     );
// };

// export { SocketProvider, getSocket };


import { createContext, useMemo, useContext, useEffect } from "react";
import io from "socket.io-client";
import { readCookie } from "./utils/readCookie";

const server = import.meta.env.VITE_SOCKET_URL;
const SocketContext = createContext();

const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const userInfo = readCookie("userInfo");
  console.log("userInfo",userInfo);

  const socket = useMemo(
    () =>
      io(server, {
        withCredentials: true,
        auth: { token },
        transports: ["websocket", "polling"],
      }),
    [token]
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket);
       socket.emit("join", { userId: ""});
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, getSocket };
