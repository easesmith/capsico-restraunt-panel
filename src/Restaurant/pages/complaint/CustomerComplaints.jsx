import React, { useEffect, useState } from "react";
import RestaurantWrapper from "../../components/restaurantWrapper/RestaurantWrapper";
import { Button } from "@/components/ui/button";
import CusmoterImg from "../../../assets/Layer_1.png";
import RupeesImg from "../../../assets/Vector123.png";
import useGetApiReq from "@/hooks/useGetApiReq";
import CustomerComplaintModel from "@/Restaurant/components/customerComplaint/CustomerComplaintModel";
import { PaginationComp } from "@/Restaurant/components/PaginationComp";
import SingleComplaint from "./SingleComplaint";

const CustomerComplaints = () => {
  const data = [
    {
      id: "37939 62820",
      date: "7:49 pm | 06 Jul",
      description: "1 X Paneer Butter Masala,  2 X 1 Butt...",
      price: "30",
      btn1: "Resolved",
      btn2: "Refund accepted, ₹ 144 given to customer",
      image: RupeesImg,
    },
    {
      id: "37939 62820",
      date: "7:49 pm | 06 Jul",
      description: "1 X Paneer Butter Masala,  2 X 1 Butt...",
      price: "390",
      btn1: "Resolved",
      btn2: "Refund accepted, ₹ 144 given to customer",
      image: RupeesImg,
    },
    {
      id: "37939 62820",
      date: "7:49 pm | 06 Jul",
      description: "1 X Paneer Butter Masala,  2 X 1 Butt...",
      price: "390",
      btn1: "Resolved",
      btn2: "Refund accepted, ₹ 144 given to customer",
      image: RupeesImg,
    },
  ];

  const [complaintsData, setcomplaintsData] = useState(data);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const { res, fetchData, isLoading } = useGetApiReq();

  const getComplaints = () => {
    fetchData(`/restaurant/get-complaints?page=${page}&limit=${10}`);
  };

  useEffect(() => {
    getComplaints();
  }, [page]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("get complaints res", res);
      setcomplaintsData(res?.data?.data?.complaints);
      setTotalPage(res?.data?.data?.pagination?.totalPages);
      // setPage(res?.data?.pagination?.page);
    }
  }, [res]);

  return (
    <RestaurantWrapper>
      <div>
        <div className="bg-[#D9F1FD66] flex justify-between items-center px-10 py-4">
          <h1 className="five-color class-base1">Customer Complaints</h1>
          <Button variant="outline" className="nine-color class-sm1">
            View on Capsico
          </Button>
        </div>
        {complaintsData === "" ? (
          <div className="w-full h-[700px] bg-[#E7EBEF66] flex justify-center px-6 pt-4 pb-2">
            <div className="flex flex-col justify-center items-center w-full bg-[#FFFFFF] border-[2px] rounded-[7px]">
              <img
                src={CusmoterImg}
                alt="burger-img"
                className="w-[192px] h-[192px]"
              />
              <p className="seven-color class-xl1">
                No issues reported. Well done!
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 px-6 py-4">
            {complaintsData.map((complaint, i) => {
              return (
                <SingleComplaint key={i} complaint={complaint} />
              );
            })}
          </div>
        )}
        <PaginationComp page={page} pageCount={totalPage} setPage={setPage} />
      </div>
      <CustomerComplaintModel />
    </RestaurantWrapper>
  );
};

export default CustomerComplaints;
