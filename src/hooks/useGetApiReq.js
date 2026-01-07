import { handleLoading } from "@/store/slices/loadingSlice";
import { readCookie } from "@/utils/readCookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { axiosInstance } from "../utils/axiosInstance";
import useCrashReporter from "./useCrashReporter";

const useGetApiReq = () => {
    const [res, setRes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const userInfo = readCookie("userInfo");
      const { reportCrash } = useCrashReporter();

    const dispatch = useDispatch();

    const fetchData = async (url, config = {}) => {
         const {
           reportCrash: shouldReportCrash = false,
           screenName,
           severity = "HIGH",
           userType = "Restaurant",
         } = config;

        try {
            setIsLoading(true);
            await dispatch(handleLoading(true));
            const response = await axiosInstance.get(url, config);
            if (response.status === 200 || response.status === 201) {
                setRes(response);
            }
        } catch (error) {
            console.log("error",error);
            toast.error(error.response?.data?.message || "An error occurred.")
            if (shouldReportCrash) {
              reportCrash({
                error,
                screenName,
                severity,
                request: {
                  url,
                },
                userId: userInfo.id,
                userType,
                
              });
            }
            // await dispatch(handleErrorModal({ isOpen: true, message: error.response?.data?.message || "An error occurred.", isLogoutBtn: true }));
        } finally {
            setIsLoading(false);
            await dispatch(handleLoading(false));
        }
    };

    return { res, isLoading, fetchData };


};

export default useGetApiReq;