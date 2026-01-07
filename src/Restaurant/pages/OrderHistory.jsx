import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetApiReq from "@/hooks/useGetApiReq";
import { readCookie } from "@/utils/readCookie";
import { useCallback, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import BurgerImg from "../../assets/burger.png";
import DataNotFound from "../components/DataNotFound";
import OrderCancelled from "../components/Orderhistory/OrderCancelled";
import OrderDelivered from "../components/Orderhistory/OrderDelivered";
import { PaginationComp } from "../components/PaginationComp";
import RestaurantWrapper from "../components/restaurantWrapper/RestaurantWrapper";
import Spinner from "../components/Spinner";

const OrderHistory = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const { res, fetchData, isLoading } = useGetApiReq();
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [dateFilter, setDateFilter] = useState("all");
  // const [dateFilter, setDateFilter] = useState("today");
  const [page, setPage] = useState(1);
  const userInfo = readCookie("userInfo");
  console.log("userInfo", userInfo);

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };

  const getOrders = useCallback(() => {
    fetchData(
      `/restaurant/get-order-history?page=${
        page || 1
      }&dateFilter=${dateFilter}&status=${activeTab}&searchQuery=${searchQuery}&restaurantId=${
        userInfo.id
      }`,
      {
        reportCrash: true,
        screenName: "ORDER_HISTORY",
      }
    );
  }, [page, dateFilter, activeTab, searchQuery]);

  useEffect(() => {
    getOrders();
  }, [page, dateFilter, activeTab, searchQuery]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("orders response", res);
      const { pagination } = res?.data || {};
      setOrders(res?.data?.data);
      if (pagination) {
        // setPage(pagination?.currentPage);
        setPageCount(pagination?.totalPages);
        setTotalCount(pagination?.totalReviews);
      }
    }
  }, [res]);

  return (
    <RestaurantWrapper>
      <div className="">
        <div className=" bg-[#D9F1FD66] flex justify-between items-center px-10 py-4 mb-4">
          <div>
            <h6 className="five-color class-base1">Order History</h6>
          </div>
          <div className=" flex justify-center items-center gap-5">
            <div className="w-[300px] flex items-center pl-3">
              <IoSearchOutline className="-mr-6 z-10 eleven-color" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Order ID to search"
                className="pl-8 secondry-color class-sm2"
              />
            </div>
            <Select
              value={dateFilter}
              onValueChange={(value) => setDateFilter(value)}
            >
              <SelectTrigger className="flex justify-between items-center w-40 h-10 text-[#1D1929] text-sm font-normal font-sans border-[#E9E9EA] border-[1px] rounded-lg">
                <SelectValue placeholder="Today" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>

            {/* <Button
              variant="outline"
              className="flex justify-center items-center gap-2 third-color class-sm1"
            >
              <HiOutlineAdjustmentsHorizontal className="text-[22px]" />
              <span>Filter</span>
            </Button> */}
            <Button
              variant="outline"
              className="flex justify-center items-center gap-2 third-color class-sm1"
            >
              <LiaDownloadSolid className="text-[18px]" />
              <span>Export CSV</span>
            </Button>
          </div>
        </div>

        {activeTab === "" ? (
          <div className="w-full h-[700px] bg-[#E7EBEF66] flex justify-center pl-6 pb-2">
            <div className="w-1/2 bg-[#FFFFFF] pt-6 px-6  border-[2px] rounded-s-[7px]">
              <div className="w-full flex items-center pl-3">
                <IoSearchOutline className="-mr-6 z-10 eleven-color" />
                <Input
                  type="search"
                  placeholder="Enter Order ID to search"
                  className="pl-8 secondry-color class-sm2"
                />
              </div>
            </div>
            <div className=" w-1/2 bg-[#FFFFFF] flex flex-col items-center justify-center gap-12">
              <img
                src={BurgerImg}
                alt="burger-img"
                className="w-[258px] h-[258px]"
              />
              <p className="third-color class-2xl1">No order to show</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 px-6 h-full">
            <div className="flex gap-4">
              <Button
                onClick={() => setActiveTab("all")}
                variant="gst2"
                size="lg"
                className={`h-[38px] w-[91px] ${
                  activeTab != "all" &&
                  "border-[#9C9C9C] text-[#8B8B8B] bg-[#FFFFFF] hover:bg-[#f0f0f0]"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setActiveTab("completed")}
                variant="gst2"
                size="lg"
                className={`h-[38px] ${
                  activeTab != "completed" &&
                  "border-[#9C9C9C] text-[#8B8B8B] bg-[#FFFFFF] hover:bg-[#f0f0f0]"
                }`}
              >
                Completed
              </Button>
              <Button
                onClick={() => setActiveTab("cancelled")}
                variant="gst2"
                size="lg"
                className={`h-[38px] ${
                  activeTab != "cancelled" &&
                  "border-[#9C9C9C] text-[#8B8B8B] bg-[#FFFFFF] hover:bg-[#f0f0f0]"
                }`}
              >
                Cancelled
              </Button>
            </div>
            {orders?.map((order, i) => {
              if (
                order?.orderDetails?.status === "completed" ||
                order?.orderDetails?.status === "delivered"
              ) {
                return <OrderDelivered key={i} order={order} />;
              } else {
                return <OrderCancelled key={i} order={order} />;
              }
            })}

            {orders?.length === 0 && isLoading && <Spinner />}

            {orders?.length === 0 && !isLoading && (
              <DataNotFound name="Orders" />
            )}

            <div className="mt-4">
              <PaginationComp
                page={page || 1}
                pageCount={pageCount}
                setPage={setPage}
              />
            </div>
          </div>
        )}
      </div>
    </RestaurantWrapper>
  );
};

export default OrderHistory;
