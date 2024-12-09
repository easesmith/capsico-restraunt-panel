import React, { useEffect, useState } from 'react'
import OfferDetails from './OfferDetails'
import useGetApiReq from '@/hooks/useGetApiReq'
import Spinner from '../Spinner'
import DataNotFound from '../DataNotFound'

const TrackOffer = () => {
    const [selected, setSelected] = useState("All")

    const [coupons, setCoupons] = useState([]);
    const { res, fetchData, isLoading } = useGetApiReq();

    const getCoupons = () => {
        fetchData("/restaurant/get-coupons");
    }

    useEffect(() => {
        getCoupons();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("get coupons res", res);
            setCoupons(res?.data?.data?.coupons);
        }
    }, [res])

    return (
        <div className='px-5 py-5'>
            <div className='bg-white py-3 pb-0 w-auto inline-flex gap-2'>
                <button onClick={() => setSelected("All")} className={`pb-2 px-3 border-b-4 class-base1 ${selected === "All" ? "border-[#1AA6F1] primary-color" : "border-transparent"}`}>All</button>
                <button onClick={() => setSelected("Active")} className={`pb-2 px-3 border-b-4 class-base1 ${selected === "Active" ? "border-[#1AA6F1] primary-color" : "border-transparent"}`}>Active</button>
                <button onClick={() => setSelected("Inactive")} className={`pb-2 px-3 border-b-4 class-base1 ${selected === "Inactive" ? "border-[#1AA6F1] primary-color" : "border-transparent"}`}>Inactive</button>
                <button onClick={() => setSelected("Scheduled")} className={`pb-2 px-3 border-b-4 class-base1 ${selected === "Scheduled" ? "border-[#1AA6F1] primary-color" : "border-transparent"}`}>Scheduled</button>
            </div>

            <div className='mt-5 flex flex-col gap-5'>
                {coupons.length === 0 && isLoading &&
                    <Spinner />
                }

                {coupons.length === 0 && !isLoading &&
                    <DataNotFound name="Coupons" />
                }

                {coupons.length > 0 &&
                    coupons.map((coupon) => (
                        <OfferDetails
                            key={coupon?.id}
                            coupon={coupon}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TrackOffer