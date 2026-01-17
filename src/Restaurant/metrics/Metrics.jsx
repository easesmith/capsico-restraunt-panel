import React from "react";
import RestaurantWrapper from "../components/restaurantWrapper/RestaurantWrapper";
import Graphs from "./Graphs";

const Metrics = () => {
  return (
    <RestaurantWrapper>
      <div className="px-6 py-7">
        <Graphs />
      </div>
    </RestaurantWrapper>
  );
};

export default Metrics;
