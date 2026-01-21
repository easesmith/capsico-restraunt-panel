import Ellipse from "@/assets/Ellipse 1.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import usePostApiReq from "@/hooks/usePostApiReq";
import { useCountdownTimer } from "@/lib/createCountdownTimer";
import { getSocket } from "@/socket";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";
import EggIcon from "./customIcons/EggIcon";
import NonVegIcon from "./customIcons/NonVegIcon";
import VegIcon from "./customIcons/VegIcon";
import OrderAlertModal from "./OrderAlertModal";

const SingleOrder = ({ order, status = "", getOrders, setOrderStatus }) => {
  // console.log("Single Order", order);
  const [isOrderAlertModalOpen, setIsOrderAlertModalOpen] = useState(false);
  const socket = getSocket();
  const form = useForm({
    resolver: zodResolver(z.object({ otp: z.string().min(6).max(6) })),
    defaultValues: {
      otp: "",
    },
  });
  const { register, control, watch, setValue, getValues } = form;

  const { res, fetchData, isLoading } = usePostApiReq();

  const onSubmit = (data) => {
    console.log("data", data);
    fetchData(
      "/restaurant/verify-order-otp",
      {
        orderId: order._id,
        otp: data.otp,
      },
      {
        reportCrash: true,
        screenName: "ORDER_OTP_VERIFY",
      }
    );
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("verify-order-otp response", res);
    }
  }, [res]);

  // verify-order-otp;

  const handleOrderReady = () => {
    socket.emit("mark-order-ready", {
      orderId: order._id,
      time: "", // TODO: send proper time in which order is ready
    });
  };

  useEffect(() => {
    const handleOrderReadyResponse = (response) => {
      console.log("order-ready-response", response);
      if (response?.success) {
        setOrderStatus("READY");
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    };

    socket.on("order-ready-response", handleOrderReadyResponse);

    // Cleanup to avoid multiple listeners
    return () => {
      socket.off("order-ready-response", handleOrderReadyResponse);
    };
  }, []);

  const { hours, minutes, seconds, expired, reset } = useCountdownTimer(
    "order-countdown-" + order._id,
    20
  );

  return (
    <div className="grid grid-cols-3 border border-[#C1C1C1] bg-white rounded-lg">
      <div className="p-5 border-r border-dashed border-r-[#C4C4C4]">
        <h2 className="text-[#515151] font-medium text-xl break-all font-dmSans">
          ID:{order?.orderNumber}
        </h2>
        <p className="font-dmSans font-medium text-sm text-[#7C7C7C]">
          {order?.timing?.orderedAt &&
            format(order?.timing?.orderedAt, "MMMM dd, yyyy h:mm a")}
        </p>
        {/* <div
          className={`flex flex-col mt-5 ${
            status === "COLLECTED" && "justify-end"
          }`}
        >
          {status === "INPROGRESS" && (
            <>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] p-[6px] text-white rounded-full">
                  <FaCheck />
                </div>
                <span className="text-black font-medium text-sm">Accepted</span>
              </div>

              <div className="ml-3 border-l border-dashed border-gray-400 h-6"></div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-[#BEBEBE] text-white p-[6px] rounded-full">
                  <FaCheck />
                </div>
                <span className="text-black font-medium text-sm">
                  Preparing
                </span>
              </div>
            </>
          )}
          {status === "READY" && (
            <>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] p-[6px] text-white rounded-full">
                  <FaCheck />
                </div>
                <span className="text-black font-medium text-sm">Accepted</span>
              </div>

              <div className="ml-3 border-l border-dashed border-gray-400 h-6"></div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] text-white p-[6px] rounded-full">
                  <FaCheck />
                </div>
                <span className="text-black font-medium text-sm">
                  Preparing
                </span>
              </div>
            </>
          )}
          {status === "COLLECTED" && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] text-white p-[6px] rounded-full">
                <FaCheck />
              </div>
              <span className="text-[#57A748] font-medium text-sm">
                Delivered
              </span>
            </div>
          )}
        </div> */}
        <div className="inline-flex px-3 mt-5 py-0.5 rounded-md bg-green-500 text-green-200">
          {order.status}
        </div>
        <div className="flex justify-end">
          {order.status === "pending" && (
            <Button
              onClick={() => setIsOrderAlertModalOpen(true)}
              variant="capsico"
              className="w-auto font-dmSans font-normal rounded-lg flex gap-1"
            >
              Accept
            </Button>
          )}
        </div>
      </div>
      <div className="py-5 px-10 border-r border-dashed border-r-[#C4C4C4]">
        <div className="flex flex-col gap-2">
          {order?.items?.map((item, i) => (
            <div key={i} className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-3">
                {item?.foodId?.FoodType === "veg" && <VegIcon />}
                {item?.foodId?.FoodType === "Non-veg" && <NonVegIcon />}
                {item?.foodId?.FoodType === "Egg" && <EggIcon />}
                <h3 className="text-sm font-dmSans font-medium text-[#515151]">
                  {item?.quantity} X {item?.name}
                </h3>
              </div>
              <h3 className="text-sm font-dmSans font-medium text-[#515151]">
                ₹{item?.itemTotal}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-2 mt-5">
          <h3 className="text-sm font-dmSans font-medium text-[#515151]">
            Total amount
          </h3>
          <h3 className="text-sm font-dmSans font-medium text-[#515151]">
            ₹{order?.total || order?.amounts?.total}
          </h3>
        </div>
        {status === "INPROGRESS" && (
          <button
            onClick={handleOrderReady}
            className={`px-6 py-2 mt-5 bg-gradient-to-r from-[#4A67FF] from-30% to-[#172C99] to-40% rounded-md text-white w-full`}
          >
            Order ready in {minutes}:{seconds}
          </button>
        )}
        {status === "READY" && (
          <button
            className={`px-6 py-2 mt-5 bg-gradient-to-r to-40% rounded-md bg-[#F05542] text-white w-full`}
          >
            Order ready
          </button>
        )}
        {status === "COLLECTED" && (
          <button
            className={`px-6 py-2 mt-5 bg-gradient-to-r to-40% rounded-md bg-[#4A67FF] text-white w-full`}
          >
            Order Completed
          </button>
        )}
      </div>
      {!order.orderOtpverified && (
        <>
          {order?.deliveryPartner?.partnerId &&
            (order.status === "ready_for_pickup" ||
              order.status === "READY" ||
              order.status === "delivery_partner_at_restaurant") && (
              <div className="p-5">
                <div className="border border-[#D7D7D7] rounded-md px-4 py-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium font-dmSans text-sm text-[#515151]">
                      {order?.deliveryPartner?.partnerId?.personalInfo?.name &&
                        `${order?.deliveryPartner?.partnerId?.personalInfo?.name} has arrived`}
                    </h4>
                    <div className="flex items-center gap-2">
                      <img src={Ellipse} alt="" />
                      <div className="w-10 h-10 rounded-full bg-[#E9E9E9] flex justify-center items-center text-[#4A67FF]">
                        <MdCall className="text-2xl" />
                      </div>
                    </div>
                  </div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full"
                    >
                      <div className="w-full grid grid-cols-2 gap-2 items-end">
                        <FormField
                          control={control}
                          name="otp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg text-[#3B3B3B] font-bold font-inter">
                                Enter OTP
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder=""
                                  className="placeholder:text-[#3B3B3B] w-full"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full rounded-xl hover:text-white bg-[#4A67FF] hover:bg-[#4A67FF]"
                        >
                          Submit
                        </Button>
                        {/* <Button type="submit" className="w-full rounded-xl hover:text-white bg-[#4A67FF] hover:bg-[#4A67FF]">Submit</Button> */}
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            )}
        </>
      )}
      {isOrderAlertModalOpen && (
        <OrderAlertModal
          isOrderAlertModalOpen={isOrderAlertModalOpen}
          setIsOrderAlertModalOpen={setIsOrderAlertModalOpen}
          newOrder={order}
          getOrders={getOrders}
          setOrderStatus={setOrderStatus}
        />
      )}
    </div>
  );
};

export default SingleOrder;
