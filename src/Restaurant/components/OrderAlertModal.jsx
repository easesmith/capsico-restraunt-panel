import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { getSocket } from "@/socket";
import Counter from "@/utils/Counter";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import EggIcon from "./customIcons/EggIcon";
import NonVegIcon from "./customIcons/NonVegIcon";
import VegIcon from "./customIcons/VegIcon";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { XIcon } from "lucide-react";
import playSound from "@/utils/NotificationSound";

// eslint-disable-next-line react/prop-types
const OrderAlertModal = ({
  isOrderAlertModalOpen,
  setIsOrderAlertModalOpen,
  newOrder,
  getOrders,
  setOrderStatus,
}) => {
  // const newOrder = JSON.parse(localStorage.getItem("newOrder")).order;
  console.log("newOrder", newOrder);
  const socket = getSocket();
  const [isRejected, setIsRejected] = useState(false);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    playSound();
  }, []);

  const [minute, setMinute] = useState(20);
  const handleCancel = (e) => {
    e.preventDefault();
    console.log("selected", selected);
    if (selected === "") {
      toast.error("Please select a reason");
      return;
    }

    socket.emit("update_order_status", {
      orderId: newOrder?.id || newOrder?._id,
      status: "rejected",
      reason: selected,
    });

    setIsRejected(false);
    setIsOrderAlertModalOpen(false);
    setOrderStatus("INPROGRESS");
    toast.success("Order Rejected Successfully");
  };

  const handleAction = (e) => {
    e.preventDefault();
    socket.emit("update_order_status", {
      orderId: newOrder?.id || newOrder?._id,
      status: "confirmed",
      time: minute,
      reason: "",
    });
    setIsOrderAlertModalOpen(false);
    setOrderStatus("INPROGRESS");
    getOrders();
    toast.success("Order Accepted Successfully");
  };

  const onComplete = () => {
    // socket.emit('update_order_status', {
    //     orderId: newOrder?.id || newOrder?._id,
    //     status: 'not-confirmed',
    //     reason: ''
    // });
    // console.log("Order updated");
    // setIsOrderAlertModalOpen(false);
  };

  socket.on("order_status_updated", (response) => {
    console.log("order_status_updated response: ", response);
    getOrders();
  });

  return (
    <AlertDialog
      open={isOrderAlertModalOpen}
      onOpenChange={setIsOrderAlertModalOpen}
    >
      <AlertDialogContent className="max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle className="font-medium text-[#000000]">
              Alert for New Order
            </AlertDialogTitle>
            {/* <HiMiniXMark onClick={() => setIsOrderAlertModalOpen(false)} className='text-2xl cursor-pointer' /> */}
          </div>
        </AlertDialogHeader>
        <div className="rounded-lg bg-[#fafafa] border p-4">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-1">
                <h3 className="text-[#515151] font-medium text-sm font-dmSans">
                  ID:{newOrder?.orderNumber}
                </h3>
                {/* <RxCopy className="cursor-pointer text-[#515151] ml-2" />
                <IoVolumeMediumOutline className="cursor-pointer text-[#515151] text-xl" /> */}
              </div>
              <p className="font-dmSans font-medium text-xs mt-2 text-[#7C7C7C]">
                {newOrder?.timing?.orderedAt &&
                  format(new Date(newOrder?.timing?.orderedAt), "hh:mm aa")}
              </p>
            </div>
            {/* <div>
                            <p className="font-dmSans font-medium text-xs text-[#2649FF]">1st order by Zyash</p>
                            <Badge variant="outline" className="border-[#ADCB42] py-[6px] mt-2 flex items-center gap-1 text-[#ADCB42]">
                                <img src={restaurantCutlery} alt="" />
                                <span>Send Cutlery</span>
                            </Badge>
                        </div> */}
          </div>
          <div className="flex flex-col gap-2 mt-5">
            {newOrder?.items?.map((item, i) => (
              <div key={i} className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-3">
                  {item?.FoodType === "veg" && <VegIcon />}
                  {item?.FoodType === "Non-veg" && <NonVegIcon />}
                  {item?.FoodType === "Egg" && <EggIcon />}
                  <h3 className="text-sm font-dmSans font-medium text-[#515151]">
                    {item?.quantity} X {item?.name}
                  </h3>
                </div>
                <h3 className="text-sm font-dmSans font-medium text-[#515151]">
                  ₹{item?.totalPrice || item?.itemTotal}
                </h3>
              </div>
            ))}
          </div>
          <Badge className="bg-[#CAFFD5] hover:bg-[#CAFFD5] text-[#3B3B3B] flex items-start font-dmSans w-full rounded-lg py-[6px] mt-2">
            <span className="font-medium">Order Instruction</span>:{" "}
            <span className="text-[#666666] ml-1">
              {newOrder?.specialInstructions || "No instructions"}
            </span>
          </Badge>
          <div className="mt-3 pt-3 border-t border-t-[#D3D3D3] border-dashed flex justify-between items-center">
            <div className="grid grid-cols-2 items-center gap-6">
              <h2 className="font-medium font-dmSans text-[#515151] ">
                Total amount
              </h2>
              <div className="bg-[#FFEFB5] uppercase text-black font-dmSans text-xs font-semibold rounded-none flex justify-center px-0 py-[6px]">
                {newOrder?.payment?.method || newOrder?.payment?.paymentMethod}
              </div>
            </div>

            <h2 className="font-medium font-dmSans text-[#515151]">
              ₹{newOrder?.amounts?.total}
            </h2>
          </div>
          <div className="p-4 border rounded-lg bg-white mt-4">
            <h2 className="font-dmSans font-medium text-[#1D1D1D] text-sm">
              Delivery partner will be assigned shortly.{" "}
            </h2>
            <p className="text-[10px] font-dmSans text-[#7C7C7C]">
              Please continue food preparation; the delivery partner will arrive
              at your outlet just before the order is ready.
            </p>
            <p className="text-[10px] font-dmSans text-[#7C7C7C] font-medium mt-2">
              Enter food preparation time
            </p>
            <div className="flex justify-between items-center px-4 py-1 mt-2 border rounded-lg">
              <FaMinus
                onClick={() => setMinute((prev) => prev - 1)}
                className="cursor-pointer text-2xl"
              />
              <p className="font-medium font-dmSans text-[#515151]">
                {minute} mins
              </p>
              <FaPlus
                onClick={() => setMinute((prev) => prev + 1)}
                className="cursor-pointer text-2xl"
              />
            </div>
          </div>
          <AlertDialogFooter className="mt-2">
            {!isRejected && (
              <Button
                onClick={() => setIsRejected(true)}
                className="w-full font-dmSans font-normal bg-[#F05542] hover:bg-[#F05542] text-white hover:text-white rounded-lg"
              >
                Reject
              </Button>
            )}
            <AlertDialogAction
              onClick={handleAction}
              className="w-full font-dmSans font-normal bg-gradient-to-r from-[#4A67FF] from-30% to-[#172C99] to-40% text-white rounded-lg flex gap-1"
            >
              Accept in {<Counter onComplete={onComplete} />}
            </AlertDialogAction>
          </AlertDialogFooter>

          {isRejected && (
            <div className="mt-4 space-y-4">
              <div className="flex gap-2 justify-between items-center">
                <Label className="font-medium">Select reason</Label>
                <Button
                  onClick={() => setIsRejected(false)}
                  variant="ghost"
                  className="text-black hover:bg-transparent hover:text-black p-0 rounded-full"
                >
                  <XIcon />
                </Button>
              </div>

              <RadioGroup
                value={selected}
                onValueChange={setSelected}
                className="grid gap-2"
              >
                <label className="flex items-start gap-3 rounded-md border p-3 hover:shadow-sm">
                  <RadioGroupItem
                    value="Items out of stock"
                    className="mt-[6px]"
                  />
                  <div className="font-semibold">Items out of stock</div>
                </label>
                <label className="flex items-start gap-3 rounded-md border p-3 hover:shadow-sm">
                  <RadioGroupItem value="Outlet closed" className="mt-[6px]" />
                  <div className="font-semibold">Outlet closed</div>
                </label>
                <label className="flex items-start gap-3 rounded-md border p-3 hover:shadow-sm">
                  <RadioGroupItem
                    value="Kitchen is full"
                    className="mt-[6px]"
                  />
                  <div className="font-semibold">Kitchen is full</div>
                </label>
              </RadioGroup>
              <Button
                onClick={handleCancel}
                className="w-full font-dmSans font-normal rounded-lg"
                variant="capsico"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OrderAlertModal;
