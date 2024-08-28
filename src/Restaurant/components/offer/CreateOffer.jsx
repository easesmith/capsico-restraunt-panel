import group from '@/assets/Group.png';
import offerIcon from '@/assets/Vector.png';
import promoIcon from '@/assets/promo_icon.png';
import OfferComp from './OfferComp';

const CreateOffer = () => {
    return (
        <div className='px-10 py-4'>
            <h1 className='font-numans font-semibold'>SUGGESTED OFFERS FOR YOU</h1>
            <div className='bg-white rounded-xl'>
                <div className='p-4 bg-[#1AA6F1] flex justify-between rounded-xl mt-4'>
                    <div>
                        <h2 className='text-white font-numans font-bold text-2xl'>50% Offer up to  ₹120</h2>
                        <p className='text-white font-numans font-semibold text-sm mt-1'>Uplift your business to the sky!</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={group} alt="group" />
                        <button className='py-3 px-5 bg-[#006296] font-numans font-semibold text-white rounded'>Turn on now</button>
                    </div>
                </div>
                <p className='font-numans font-normal text-[#1AA6F1] py-3 px-1'>This offer is better than 90% of Other North Indian Restaurants in the area.</p>
            </div>
            <div className="flex gap-3 mt-5">
                {/* <div style={{ backgroundImage: `url(${offerIcon})` }} className='w-36 h-36 bg-no-repeat bg-center flex flex-col items-center justify-center'>
                    <h3 className='text-xl font-bold font-numans'>50% Off</h3>
                    <p className='font-numans font-medium text-xs'>Max ₹100</p>
                </div> */}
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={50}
                    offerVale={100}
                    tag={""}
                />
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={40}
                    offerVale={80}
                    tag={""}
                />
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={50}
                    offerVale={100}
                    tagTitle={"new users only"}
                />
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={40}
                    offerVale={100}
                    tagTitle={"new users only"}
                />
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={30}
                    offerVale={75}
                    tagTitle={"new users only"}
                />
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={50}
                    offerVale={100}
                    tagTitle={"Lunch only"}
                    isTagRed
                />
                <OfferComp
                    offerIcon={offerIcon}
                    offerPercent={40}
                    offerVale={80}
                    tagTitle={"Breakfast only"}
                    isTagRed
                />
            </div>
            <p className='mt-5 font-numans font-semibold text-[#7991A4]'>Personalized offer for you</p>
            
            <div className="grid grid-cols-2 gap-5 mt-3">
                <div className='bg-white border rounded flex gap-3 p-5'>
                    <div className="w-[70px] h-[70px] rounded-full bg-[#A4F4E7] flex justify-center items-center">
                        <img src={promoIcon} alt="promoIcon" />
                    </div>
                    <div>
                        <h3 className='font-numans font-semibold text-2xl'>Promo Code</h3>
                        <p className='font-numans font-normal text-[#7991A4] text-sm mt-1'>Thrill customers with complimentary discounts on every order.</p>
                    </div>
                </div>
                <div className='bg-white border rounded flex gap-3 p-5'>
                    <div className="w-[70px] h-[70px] rounded-full bg-[#F4C790] flex justify-center items-center">
                        <img src={promoIcon} alt="promoIcon" />
                    </div>
                    <div>
                        <h3 className='font-numans font-semibold text-2xl'>Freebies</h3>
                        <p className='font-numans font-normal text-[#7991A4] text-sm mt-1'>Thrill customers with complimentary discounts on every order.</p>
                    </div>
                </div>
            </div>
            <p className='max-w-[980px] mt-7 mx-auto font-numans font-normal text-lg text-[#637D92]'>Note: To create fixed discounts, percentage discounts, or buy-one-get-one offers, use the Capsico Restaurant Partner app on Android. This feature will be available on the web dashboard soon.”</p>
        </div>
    )
}

export default CreateOffer