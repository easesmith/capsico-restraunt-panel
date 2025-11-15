import useGetApiReq from "@/hooks/useGetApiReq";
import { readCookie } from "@/utils/readCookie";
import { useEffect, useState } from "react";
import RestaurantWrapper from "../restaurantWrapper/RestaurantWrapper";
import MenuSection from "./MenuCategory";

const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);
  const userInfo = readCookie("userInfo");
  console.log("userInfo", userInfo);
  

  const { res, fetchData, isLoading } = useGetApiReq();

  const getData = () => {
    fetchData(`/restaurant/get-restraunt-menu/${userInfo?.id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("getdata res", res);
      setMenuData(res?.data?.data);
    }
  }, [res]);

  return (
    <RestaurantWrapper>
      <div className="">
        <MenuSection
          categories={menuData}
          getData={getData}
          isLoading={isLoading}
          getCategories={getData}
        />
      </div>
    </RestaurantWrapper>
  );
};

export default MenuPage;
