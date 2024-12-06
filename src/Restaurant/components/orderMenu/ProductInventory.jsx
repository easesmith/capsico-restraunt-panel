import React, { useState } from 'react'
import VegIcon from '../customIcons/VegIcon'
import outletIcon from "@/assets/outlet.png"
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const ProductInventory = ({ foodItem }) => {
    const { name, price, isAvailable, veg } = foodItem;

    const [isOn, setIsOn] = useState(isAvailable);
    return (
        <div className='px-5 py-3 flex justify-between items-center group gap-2 border-b hover:bg-[#F7FAFF] cursor-pointer'>
            <div className='flex gap-3 items-center'>
                <img className='w-28 rounded' src={outletIcon} alt="" />
                <div className=''>
                    <VegIcon />
                    {/* <NonVegIcon /> */}
                    {/* <EggIcon /> */}
                    <h3 className='eleven-color class-base1 mt-2'>{name}</h3>
                    <p className='class-base1'>₹{price}</p>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
                <Switch
                    id="custom-switch"
                    checked={isOn}
                    onCheckedChange={(value) => setIsOn(value)}
                    className={isOn ? "bg-green-500" : "bg-gray-300"}
                />
                <Label htmlFor="airplane-mode">In Stock</Label>
            </div>
        </div>
    )
}

export default ProductInventory