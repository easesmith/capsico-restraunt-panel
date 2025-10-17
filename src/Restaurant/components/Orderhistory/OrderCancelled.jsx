import React from 'react'
import ProfileImg from "@/assets/Ellipse 1.png";
import { Button } from '@/components/ui/button';
import VegIcon from '../customIcons/VegIcon';
import { FaCircleXmark } from 'react-icons/fa6';
import { format } from 'date-fns';

const OrderCancelled = ({order}) => {
  return (
    <div className="flex justify-between gap-10 border-2 border-[#C1C1C1] rounded-lg h-[248px] px-5">
      <div className="w-1/2 h-full flex flex-col justify-between py-7">
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
        <div className="seventeen-color flex items-center gap-2">
          <FaCircleXmark className="text-2xl" />
          <p className="class-sm8 capitalize">{order?.orderDetails?.status}</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-5 h-full justify-start items-end px-5 py-7 border-s-[1px] border-dashed border-[#C4C4C4]">
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
        {/* <Button variant="gst4" size="lg" className="class-sm7 h-10 w-full px-4">
          Order Cancelled
        </Button> */}
      </div>
    </div>
  );
}

export default OrderCancelled