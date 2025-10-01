import { useState } from "react";
import RestaurantWrapper from "../../components/restaurantWrapper/RestaurantWrapper";
import CreateOffer from "../../components/offer/CreateOffer";
import TrackOffer from "../../components/offer/TrackOffer";
import { useNavigate } from "react-router-dom";
import AllOffers from "@/Restaurant/components/offer/AllOffers";

const Offers = () => {
  const [isCreateOffer, setIsCreateOffer] = useState(false);
  const navigate = useNavigate();

  return (
    <RestaurantWrapper>
      <div>
        <div className="bg-[#D9F1FD66] p-5 class-base1">Offers</div>
        <div className="bg-[#D9F1FD66] px-3 border-t-2 border-[#DAE1E7] flex gap-4">
          <button
            onClick={() => navigate("/restaurant/offers/create")}
            className={`py-3 px-2 font-inter class-base1 border-b-4 ${
              isCreateOffer
                ? "primary-color  border-[#1AA6F1]"
                : "border-transparent"
            }`}
          >
            Create offers
          </button>
          <button
            onClick={() => setIsCreateOffer(false)}
            className={`py-3 px-2 font-inter class-base1 border-b-4 ${
              isCreateOffer
                ? "border-transparent"
                : "primary-color border-[#1AA6F1]"
            }`}
          >
            Track Offers
          </button>
        </div>

        <div>{isCreateOffer ? <CreateOffer /> : <AllOffers />}</div>
      </div>
    </RestaurantWrapper>
  );
};

export default Offers;
