import React, { useCallback, useEffect, useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import OutletImg from "../../assets/outlet.png"
import CloseCartImg from '../../assets/Mask group.png'
import { Input } from '@/components/ui/input'
import { IoSearchOutline } from 'react-icons/io5'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LiaDownloadSolid } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { Button } from '@/components/ui/button'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import OrdersModel from '../components/orders/OrdersModel'
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification, showNotification } from '../redux/notificationSlice';
import SingleOrder from '../components/SingleOrder'
import OrderAlertModal from '../components/OrderAlertModal'
import { getSocket } from '@/socket'
import useGetApiReq from '@/hooks/useGetApiReq'
import Spinner from '../components/Spinner'
import DataNotFound from '../components/DataNotFound'

const Order = () => {
  const { isOpen } = useSelector((state) => state.notification);
  const socket = getSocket();
  const [orders, setOrders] = useState([]);
  const [dbOrders, setDbOrders] = useState([]);
  const { res, fetchData, isLoading } = useGetApiReq();
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [orderStatus, setOrderStatus] = useState("INPROGRESS")
  const [isOrderAlertModalOpen, setIsOrderAlertModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState("");

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };

  const getOrders = useCallback(() => {
    fetchData(`/restaurant/get-order-bystatus?status=${orderStatus}`);
  }, [orderStatus])

  useEffect(() => {
    getOrders();
  }, [orderStatus])

  // console.log("orderStatus",orderStatus);


  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("orders response", res);
      setDbOrders(res?.data?.data);
    }
  }, [res])

 useEffect(() => {
   const handleNewOrder = (response) => {
     console.log("New order received:", response);
     localStorage.setItem("newOrder", JSON.stringify(response));
     setNewOrder(response?.order);
     setIsOrderAlertModalOpen(true);
   };

   socket.on("new_order_received", handleNewOrder);

   return () => {
     socket.off("new_order_received", handleNewOrder);
   };
 }, []);



  socket.on('get-orders', (response) => {
    console.log("orders received", response.orders);
    setOrders(response?.orders);
  });


  return (
    <RestaurantWrapper>
      <>
       {isOpen && <div>
          <div className=' bg-[#D9F1FD66] flex justify-between items-center px-10 py-4 mb-4'>
            <div >
              <h6 className='five-color class-base1'>Order</h6>
            </div>
            <div className=' flex justify-center items-center gap-5'>
              <div className='w-[324px] flex items-center'>
                <IoSearchOutline className='-mr-6 z-10 eleven-color' />
                <Input type="search" placeholder="Enter Order ID to search" className="pl-8 secondry-color class-sm2" />
              </div>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[175px] third-color">
                  <LuCalendar className='third-color class-lg2' />
                  <SelectValue placeholder="16th to 17th Jul" value={selectedDateRange} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className=' third-color class-sm1'>
                    <SelectItem value="16">16th to 17th Jul</SelectItem>
                    <SelectItem value="17">17th to 18th Jul</SelectItem>
                    <SelectItem value="18">18th to 19th Jul</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span>Filter</span></Button>
              <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><LiaDownloadSolid className='text-[18px]' /><span>Export CSV</span></Button>
            </div>
          </div>

          {/* <Toast /> */}
          <div className="flex items-center gap-5 p-5">
            <button onClick={() => setOrderStatus("INPROGRESS")} className={`px-6 py-1 rounded-lg ${orderStatus === "INPROGRESS" ? "bg-[#4A67FF] text-white" : "border border-[#8B8B8B] text-[#8B8B8B]"}`}>Preparing</button>
            <button onClick={() => setOrderStatus("READY")} className={`px-6 py-1 rounded-md ${orderStatus === "READY" ? "bg-[#4A67FF] text-white" : "border border-[#8B8B8B] text-[#8B8B8B]"}`}>Ready</button>
            <button onClick={() => setOrderStatus("COLLECTED")} className={`px-6 py-1 rounded-md ${orderStatus === "COLLECTED" ? "bg-[#4A67FF] text-white" : "border border-[#8B8B8B] text-[#8B8B8B]"}`}>Collected</button>
          </div>

          <div className="flex flex-col gap-3 p-5">
            {/* {orders.map((order, i) => (
              <SingleOrder
                key={order?._id}
                order={order}
              />
            ))} */}

            {dbOrders.map((order) => (
              <SingleOrder
                key={order?._id}
                order={order}
                status={orderStatus}
                getOrders={getOrders}
              />
            ))}

            {dbOrders.length === 0 && isLoading &&
              <Spinner />
            }

            {dbOrders.length === 0 && !isLoading &&
              <DataNotFound name="Order" />
            }
          </div>
          {isOrderAlertModalOpen &&
            <OrderAlertModal
              isOrderAlertModalOpen={isOrderAlertModalOpen}
              setIsOrderAlertModalOpen={setIsOrderAlertModalOpen}
              newOrder={newOrder}
              getOrders={getOrders}
            />
          }
        </div>}
        {!isOpen && <div className='w-full h-[456px] flex flex-col justify-between items-center mt-20'>
          <div className='flex justify-center relative w-[577px]'>
            <img src={OutletImg} alt="" />
            <img src={CloseCartImg} alt="" className=' absolute bottom-[-4%] right-[-7%]' />
          </div>
          <div className=' w-[521px] max-w-[521px] flex flex-col items-center gap-6'>
            <span className='eight-color class-xl3 text-center'>You are offline</span>
            <p className='five-color class-xl3 text-center'>Click <span className='primary-color font-semibold'>Help center</span> for more Information.</p>
          </div>
        </div>}
        {/* <OrdersModel /> */}
      </>
    </RestaurantWrapper>
  )
}

export default Order
