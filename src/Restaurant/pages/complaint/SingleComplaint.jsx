import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import React from 'react'

const SingleComplaint = ({ complaint }) => {
  return (
    <div className="bg-[#FFFFFF] shadow-custom rounded-lg border-[1px] border-[#E9E9E9] flex flex-col gap-3 px-7 py-3">
      <div className="flex items-start justify-between">
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="class-sm8 twelve-color">ID:{complaint._id}</p>
          <p className="class-sm8 sixteen-color">
            {complaint.createdAt &&
              format(new Date(complaint.createdAt), "hh:mm a")}
            {" | "}
            {complaint.createdAt &&
              format(new Date(complaint.createdAt), "dd MMM yyyy")}
          </p>
          <p className="class-sm8 sixteen-color">
            Priority:{" "}
            <span
              className={cn(
                "class-sm8 px-3 py-0.5 rounded-md text-white",
                complaint.priority === "low" ? "bg-yellow-400" : "bg-red-500"
              )}
            >
              {complaint.priority}
            </span>
          </p>
        </div>
        <button className="class-sm8 capitalize text-[#FFFFFF] bg-[#ADCB42] hover:bg-[#b4d148] border-[1px] border-[#ADCB42] rounded-lg px-3 h-7">
          {complaint.status}
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p className="class-sm8 sixteen-color">{complaint.description}</p>
        {/* <p className="class-sm8 sixteen-color">₹{complaint.price}</p> */}
      </div>
      {/* <button className="class-base8 twelve-color bg-[#FFFFFF] hover:bg-[#f9f8f8] border-[1px] border-[#D3D3D3] rounded-lg py-3 px-8 flex justify-center items-center gap-2">
        <img src={complaint.image} alt="" />
        {complaint.btn2}
      </button> */}
    </div>
  );
};

export default SingleComplaint