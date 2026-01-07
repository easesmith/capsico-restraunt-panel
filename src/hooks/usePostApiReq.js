import { handleLoading } from "@/store/slices/loadingSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { axiosInstance } from "../utils/axiosInstance";
import { readCookie } from "@/utils/readCookie";
import useCrashReporter from "./useCrashReporter";

const usePostApiReq = () => {
    const [res, setRes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const userInfo = readCookie("userInfo");
    const { reportCrash } = useCrashReporter();

    const dispatch = useDispatch();

    const fetchData = async (url, sendData, config = {}) => {
         const {
           reportCrash: shouldReportCrash = false,
           screenName,
           severity = "HIGH",
           userType = "Restaurant",
         } = config;

        try {
            setIsLoading(true);
            await dispatch(handleLoading(true));
            const response = await axiosInstance.post(url, sendData, { ...config, withCredentials: true });
            console.log("res", response);
            if (response.status === 200 || response.status === 201) {
                setRes(response);
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log("post api error =>", error);
            console.log("post api error status =>", error.response);
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
        } finally {
            setIsLoading(false);
            await dispatch(handleLoading(false));
        }
    };

    return { res, isLoading, fetchData };


};

export default usePostApiReq;