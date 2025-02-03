import { handleLoading } from "@/store/slices/loadingSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { axiosInstance } from "../utils/axiosInstance";

const usePatchApiReq = () => {
    const [res, setRes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const fetchData = async (url, sendData, config = {}) => {
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
            // if (error?.response.status === 403) {
            //     await dispatch(handleUnautorizedModalOpen({ isUnautorizedModalOpen: true }));
            // }
            // else {
            //     await dispatch(handleErrorModal({ isOpen: true, message: error.response?.data?.message || "An error occurred.",isLogoutBtn: true }));
            // }
        } finally {
            setIsLoading(false);
            await dispatch(handleLoading(false));
        }
    };

    return { res, isLoading, fetchData };


};

export default usePatchApiReq;