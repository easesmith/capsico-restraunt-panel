import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification, showNotification } from '../redux/notificationSlice';
import { getSocket } from '@/socket';

const Switch = () => {
  const socket = getSocket();
  const dispatch = useDispatch()
  const { isVisible } = useSelector((state) => state.notification);
  console.log("isVisible", isVisible)

  const [isOn, setIsOn] = useState(false);

  socket.on("connection", (socket) => {
    console.log("connection", socket);

  })

  const toggleSwitch = () => {
    setIsOn(!isOn);
    socket.emit('update_restaurant_status', {
      isOpen: !isOn,
      reason: ''
    });

  };

  socket.on('restaurant_status_updated', (response) => {
    console.log("restaurant_status_updated response", response);
    setIsOn(response.status === "open" ? true : false);
  });


  isOn ? dispatch(hideNotification()) : dispatch(showNotification())

  return (
    <div onClick={toggleSwitch} className={`${isOn ? 'bg-[#22C55E]' : 'bg-[#A3ABAD]'} relative inline-flex h-[50px] w-[138px] rounded-[50px] justify-between p-[2px] pr-5 items-center cursor-pointer transition-colors duration-300 ease-in-out`}>
      <span
        className={`${isOn ? 'translate-x-[90px]' : 'translate-x-1'
          } inline-block h-[40px] w-[40px] transform bg-white rounded-full transition-transform duration-300 ease-in-out`}
      />
      <p className={`${isOn ? 'translate-x-[-50px]' : ''} text-[#FFFFFF] text-[16.8px] font-medium font-inter`}>{isOn ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default Switch;
