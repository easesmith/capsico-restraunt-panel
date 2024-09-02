import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import PuzzleImg from '../../assets/6804352 1.png'
import CategoryImg from '../../assets/9509071 1.png'
import OrderImg from '../../assets/8727008 1.png'
import PriceImg from '../../assets/5639695 1.png'
import SumbitImg from '../../assets/4002336 1.png'

const Items = () => {

    const [activeTab, setActiveTab] = useState("Items");
    const tabs = ["Items", "Add-ons"];

    return (
        <RestaurantWrapper>
            <p className="bg-[#22C55E4D] five-color class-sm1 text-center py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p>
            <div className='w-full px-4'>
                <div className="flex justify-start gap-3  py-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`p-[10px] class-base1 focus:outline-none ${activeTab === tab
                                ? "primary-color border-b-[3px] border-[#1AA6F1]"
                                : "text-black"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className='flex items-center gap-2 pt-2 pb-8 px-1'>
                    <img src={PuzzleImg} className='w-[60px] h-[60px]' alt="" />
                    <h1 className='five-color class-xl1'>Craft your menu in just 3steps</h1>
                </div>
                <div className='flex flex-col gap-6 px-3'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src={CategoryImg} className='w-[80px] h-[80px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='seven-color class-base3'>Category + Subcategory:</h2>
                            <p className='w-[640px] fourteen-color class-xs3'>Think of this as your menu’s appetizer. Create logical groupings—like “Starters,” “Main Courses,” and “Desserts.” Then sprinkle in subcategories for extra flavor (think “Vegan Delights” or “Chef’s Specials”).
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src={OrderImg} className='w-[80px] h-[80px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='seven-color class-base3'>Item Details:</h2>
                            <p className='w-[640px] fourteen-color class-xs3'>Now it’s time to add the main course! Describe each dish with love—the ingredients, flavors, and any secret spices. A dash of mouthwatering imagery won’t hurt either.

                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src={PriceImg} className='w-[80px] h-[80px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='seven-color class-base3'>Price and Description: </h2>
                            <p className='w-[640px] fourteen-color class-xs3'>This is your menu’s seasoning. Price it right—too spicy might scare away diners, too bland won’t satisfy. And the description? Make it sing! A well-crafted blurb can turn a simple dish into a culinary adventure.

                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div>
                            <img src={SumbitImg} className='w-[80px] h-[80px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='seven-color class-base3'>Submit and Sizzle: </h2>
                            <p className='w-[640px] fourteen-color class-xs3'>Your menu is marinating; now let’s cook! Hit that “Submit for Review” button. The food critics (well, your team) will taste-test. Once approved, your menu will sizzle live within 24 hours!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RestaurantWrapper>
    )
}

export default Items
