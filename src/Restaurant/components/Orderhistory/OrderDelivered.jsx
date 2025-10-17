import React from 'react'
import { IoIosCheckmarkCircle, IoMdCall } from 'react-icons/io';
import VegIcon from '../customIcons/VegIcon';
import { Button } from '@/components/ui/button';
import ProfileImg from "@/assets/Ellipse 1.png";
import { format } from 'date-fns';
import { Mail, Phone, User } from 'lucide-react';
import { CgProfile } from 'react-icons/cg';

const OrderDelivered = ({order}) => {
  return (
    <div className="flex justify-between gap-10 border-2 border-[#C1C1C1] rounded-lg px-5">
      <div className="w-1/3 h-full flex flex-col justify-between py-7">
        <div>
          <p className="class-xl8 twelve-color">ID:{order?.orderNumber}</p>
          <p className="class-sm8 sixteen-color">
            {order?.timing?.createdAt &&
              format(
                new Date(order?.timing?.createdAt),
                "MMM dd, yyyy hh:mm aa"
              )}
          </p>
        </div>
        <div className="fifteen-color flex items-center gap-2 mt-5">
          <IoIosCheckmarkCircle className="text-2xl" />
          <p className="class-sm8 capitalize">{order?.orderDetails?.status}</p>
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-5 h-full justify-start items-center px-5 py-7 border-s-[1px] border-e-[1px] border-dashed border-[#C4C4C4]">
        <div className="px-2 w-full">
          {order?.items?.map((item) => (
            <div
              key={item?._id}
              className="flex items-center justify-between mb-3"
            >
              <div className="flex items-center gap-2">
                <VegIcon />
                <p className="class-sm8 twelve-color">
                  {item?.quantity} X {item?.name}
                </p>
              </div>
              <p className="class-sm8 twelve-color">₹{item?.itemTotal}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-2 w-full">
          <p className="class-sm8 twelve-color">Total amount</p>
          <p className="class-sm8 twelve-color">
            ₹{order?.orderSummary?.total}
          </p>
        </div>
        <Button variant="gst3" size="lg" className="class-sm7 h-10 w-full px-4">
          Order Completed
        </Button>
      </div>
      <div className=" w-1/3 py-5">
        {/* <div className="border-[1px] border-[#E9E9E9] rounded-lg p-3 h-[184px]">
          <p className="class-sm8 twelve-color mb-2">Delivered</p>
          <div className="flex items-center justify-between">
            <div className=" flex justify-start items-start gap-3">
              <img
                src={ProfileImg}
                alt="profile-img"
                className="border-[1px] border-[#D3D3D3] rounded-full"
              />
              <p className="class-sm8 twelve-color">
                {order?.deliveryPartnerDetails?.personalInfo?.name}
              </p>
            </div>
            <IoMdCall className="thirteen-color text-lg cursor-pointer" />
          </div>
        </div> */}
        <div>
          <p className="flex items-center gap-2">
            <User />
            Customer Details
          </p>
          <div className="border rounded-md mt-2 p-4">
            <p className="flex items-center gap-2">
              <CgProfile className='size-4' />
              {order?.customer?.name}
            </p>
            <p className="flex items-center gap-2">
              <Mail className='size-4' />
              {order?.customer?.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className='size-4' />
              {order?.customer?.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDelivered