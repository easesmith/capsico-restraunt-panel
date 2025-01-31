import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification, showNotification } from '../redux/notificationSlice';
import { getSocket } from '@/socket';
import useGetApiReq from '@/hooks/useGetApiReq';

const Switch = () => {
  const socket = getSocket();
  const dispatch = useDispatch()
  const { isVisible } = useSelector((state) => state.notification);
  const { res, fetchData, isLoading } = useGetApiReq();
  // console.log("isVisible", isVisible)

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

  useEffect(() => {
    socket.on('restaurant_status_updated', (response) => {
      setIsOn(response.status === "open" ? true : false);
    });

    return () => {
      socket.off('restaurant_status_updated'); // Cleanup listener
    };
  }, []);

  const getRestaurantStatus = useCallback(() => {
    fetchData("/restaurant/get-isonline");
  }, [])

  useEffect(() => {
    getRestaurantStatus();
  }, [])

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      // console.log("restaurant status response", res);
      setIsOn(res?.data?.isopen);
    }
  }, [res])

  useEffect(() => {
    if (isOn) {
      dispatch(hideNotification());
    } else {
      dispatch(showNotification());
    }
  }, [isOn, dispatch]);


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
