import { handleLoading } from "@/store/slices/loadingSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { axiosInstance } from "../utils/axiosInstance";
import { readCookie } from "@/utils/readCookie";
import useCrashReporter from "./useCrashReporter";

const usePatchApiReq = () => {
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
            const response = await axiosInstance.patch(url, sendData, config);
            console.log("res", response);
            if (response.status === 200 || response.status === 201) {
                toast.success(response.data.message);
                setRes(response);
            }
        } catch (error) {
            console.log("patch api error =>", error);
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

export default usePatchApiReq;