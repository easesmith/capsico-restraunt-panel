import { Button } from "@/components/ui/button";
import useGetApiReq from "@/hooks/useGetApiReq";
import RestaurantWrapper from "@/Restaurant/components/restaurantWrapper/RestaurantWrapper";
import { readCookie } from "@/utils/readCookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Metric } from "./Metric";
import PayoutTable from "./PayoutTable";

const PayoutSection = () => {
  const userInfo = readCookie("userInfo");

  const restaurantId = userInfo?.id;

  const [earnings, setEarnings] = useState("");

  const { res, fetchData, isLoading } = useGetApiReq();

  const getDeliveryPartnerEarnings = () => {
    fetchData(`/payout/get-earnings/MERCHANT/${restaurantId}`);
  };

  useEffect(() => {
    // getDeliveryPartnerPayoutDetails();
    getDeliveryPartnerEarnings();
  }, [restaurantId]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("getDeliveryPartnerPayoutDetails res", res?.data);
      setEarnings(res?.data?.earnings);
    }
  }, [res]);
  return (
    <RestaurantWrapper>
      <div className="px-4">
        <div className="flex justify-between items-center gap-5 mt-5">
          {/* <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1"
          >
            <ArrowLeftIcon className="text-2xl" /> */}
          <h1 className="text-2xl font-semibold text-left">Earning</h1>
          {/* </button> */}
          <Button asChild className="w-auto px-4" variant="capsico">
            <Link to={`/restaurant/payout/earnings-history`}>
              Earnings History
            </Link>
          </Button>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-3 bg-white rounded-md gap-4 p-4 mt-6">
            <div className="aspect-video rounded-md bg-muted animate-pulse" />
            <div className="aspect-video rounded-md bg-muted animate-pulse" />
            <div className="aspect-video rounded-md bg-muted animate-pulse" />
          </div>
        ) : (
          <div className="grid grid-cols-3 bg-white rounded-md gap-4 p-4 mt-6">
            <Metric label="Total Earned" value={earnings?.totalEarned || 0} />
            <Metric label="Balance" value={earnings?.balance || 0} />
            <Metric
              label="Total Paid Out"
              value={earnings?.totalPaidOut || 0}
            />
          </div>
        )}

        <PayoutTable
          getDeliveryPartnerEarnings={getDeliveryPartnerEarnings}
          recipientId={restaurantId}
          type="MERCHANT"
        />
      </div>
    </RestaurantWrapper>
  );
};

export default PayoutSection;
