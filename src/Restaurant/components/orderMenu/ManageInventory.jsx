import { Input } from '@/components/ui/input'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import ProductInventory from './ProductInventory'
import ItemComp from './ItemComp'
import Spinner from '../Spinner'
import DataNotFound from '../DataNotFound'

const ManageInventory = ({allCategories}) => {
    return (
        <div>
            <div className='w-[500px] relative mt-4'>
                <IoSearchOutline className='absolute top-1/2 -translate-y-1/2 left-4 z-10 text-2xl text-[#8B8A8A]' />
                <Input type="search" placeholder="Search" className="px-4 pl-12 pt-1 w-full h-[52px] text-[#8B8A8A] placeholder:text-[#8B8A8A] text-xl border-[1.5px] border-[#B6B6B6]" />
            </div>
            <div className="w-full rounded-lg overflow-hidden h-[500px] flex items-start border border-[#CED7DE] my-5">
                <div className="left-section relative w-1/3 h-full rounded-tl-lg bg-white border-r border-r-[#CED7DE]">
                    <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">Categories</h3>
                    <div className="overflow-y-auto h-full pb-[180px]">
                        {allCategories?.map((category) => (
                            <ItemComp key={category?._id} category={category} />
                        ))}

                        {allCategories.length === 0 && isLoading &&
                            <Spinner />
                        }

                        {allCategories.length === 0 && !isLoading &&
                            <DataNotFound name="Categories" />
                        }
                    </div>
                </div>
                <div className="right-section w-2/3 bg-white h-full">
                    <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">Combos (3)</h3>
                    <ProductInventory/>
                </div>
            </div>
        </div>
    )
}

export default ManageInventory