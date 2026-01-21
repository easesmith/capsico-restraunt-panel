import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import ProfileImg from "../../assets/Rectangle 3.png";
import Switch from "./Switch";
import { readCookie } from "@/utils/readCookie";
import AlertModal from "./AlertModal";
import { useNavigate } from "react-router-dom";
import usePostApiReq from "@/hooks/usePostApiReq";
import Cookies from "js-cookie";
import Spinner from "./Spinner";
import { LogOutIcon } from "lucide-react";

const Header = () => {
  const userInfo = readCookie("userInfo");
  // console.log("userInfo: ", userInfo);

  // console.log("userInfo", userInfo);
  const navigate = useNavigate();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const { res, fetchData, isLoading } = usePostApiReq();

  const logout = () => {
    fetchData(`/restaurant/logout-all`, {
      role: userInfo?.role || "restaurant",
      phone: userInfo?.phone,
    });
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("logout res", res);
      localStorage.setItem("restaurant-status", false);
      Cookies.remove("userInfo");
      Cookies.remove("restaurant-status");
      navigate("/");
      setIsLogoutModalOpen(false);
    }
  }, [res, setIsLogoutModalOpen]);

  return (
    <header className="bg-[#E7EBEF] h-[105px] sticky top-0 z-20">
      <nav className=" w-[100%] flex justify-between items-center px-12 py-4">
        <div className="left-nav flex flex-col justify-center items-center gap-1 w-[160px]">
          <h4 className="text-[#323F49] text-[28.8px] font-extrabold font-inter tracking-[1%]">
            Capsico
          </h4>
          <div className="w-[160px] border-[1.6px] border-[#323F49]"></div>
          <p className="text-[#323F49] text-[12.8px] font-bold font-inter tracking-[1%]">
            Restaurant Partner
          </p>
        </div>
        <div className="left-nav flex justify-between items-center gap-[32px]">
          <div className=" flex justify-center items-center gap-3">
            <IoSettingsOutline className="text-[24px]" />
            <GoBell className="text-[24px]" />
          </div>
          <Switch />
          <div className=" flex justify-center items-center gap-4 px-[10px]">
            <div>
              <p className="text-[#323F49] text-[17.9px] font-medium font-inter">
                {userInfo?.name}
              </p>
              <p className="text-[#637D92] text-[15.36px] font-medium font-inter">
                {userInfo?.role}
              </p>
            </div>
            <img src={ProfileImg} alt="" />
            <FaAngleDown />
          </div>
          {isLoading ? (
            <Spinner size={20} className="w-auto text-gray-500" />
          ) : (
            <LogOutIcon
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsLogoutModalOpen(true)}
            />
          )}
        </div>
      </nav>

      {isLogoutModalOpen && (
        <AlertModal
          isAlertModalOpen={isLogoutModalOpen}
          setIsAlertModalOpen={setIsLogoutModalOpen}
          header="Logout"
          description="Are you sure you want to logout?"
          onConfirm={logout}
          disabled={isLoading}
        />
      )}
    </header>
  );
};

export default Header;
