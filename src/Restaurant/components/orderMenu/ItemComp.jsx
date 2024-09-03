import React, { useState } from 'react'
import { FiEdit2, FiPlusCircle } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { RiDeleteBinLine } from 'react-icons/ri'
import MaskGroupInput from '../../../assets/Mask group Input.png'
import CategoryEditModel from '../models/CategoryEditModel'
import SubCategoryEditModel from '../models/SubCategoryEditModel'
import { FaTrash } from 'react-icons/fa6'
import { BiTrash } from 'react-icons/bi'

const ItemComp = ({ title }) => {

    const [addFoodBtn, setAddFoodBtn] = useState(true)
    const [exitingBtn, setExitingBtn] = useState(true)
    const [addSublevel, setAddSublevel] = useState(true)

    const [isOpena, setIsOpena] = useState(true);
    const [isOpenb, setIsOpenb] = useState(false);
    const [isOpenc, setIsOpenc] = useState(false);

    const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false)
    const [isOpenSubCategoryModel, setIsOpenSubCategoryModel] = useState(false)

    const toggleOpena = () => {
        setIsOpena(!isOpena);
    };

    const toggleOpenb = () => {
        setIsOpenb(!isOpenb);
    };

    const toggleOpenc = () => {
        setIsOpenc(!isOpenc);
    };
    return (
        <div>
            <div onClick={() => setIsOpenb(!isOpenb)} className="w-full flex items-center justify-between border-b-2 pl-10 pr-5 py-5 group cursor-pointer">
                <h3 className="seven-color class-base1">{title}</h3>
                <div className='flex items-center gap-8'>
                    <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-4'>
                        <FiEdit2 onClick={() => setIsOpenCategoryModel(true)} className="seven-color text-lg cursor-pointer" />
                        <BiTrash onClick={() => { }} className="text-[#E4626F] text-xl cursor-pointer" />
                    </div>
                    <IoIosArrowDown className={`seven-color text-xl cursor-pointer transform transition-transform duration-200 ${isOpenb && "rotate-180 duration-200"}`} />
                </div>
            </div>

            {isOpenb &&
                <div className="">
                    <div className="w-full flex items-center justify-between pl-20 pr-5 py-4 border-b-2 group">
                        <h3 className="seven-color class-base1">{title}</h3>
                        <div className='flex items-center gap-8'>
                            <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-4'>
                                <FiEdit2 onClick={() => setIsOpenSubCategoryModel(true)} className="seven-color text-lg cursor-pointer" />
                                <BiTrash onClick={() => { }} className="text-[#E4626F] text-xl cursor-pointer" />
                            </div>
                            {/* <IoIosArrowForward onClick={() => setIsOpenb(!isOpenb)} className="seven-color text-2xl cursor-pointer" /> */}
                        </div>
                    </div>
                    <button className="flex w-full items-center gap-3 px-5 py-4 pl-10 border-b" onClick={() => setIsOpenSubCategoryModel(true)}>
                        <FiPlusCircle className="primary-color text-lg" />
                        <span className="class-base3 primary-color">Add SubCategory</span>
                    </button>
                </div>
            }


            {isOpenCategoryModel &&
                <CategoryEditModel
                    isOpenCategoryModel={isOpenCategoryModel}
                    setIsOpenCategoryModel={setIsOpenCategoryModel}
                />
            }

            {isOpenSubCategoryModel &&
                <SubCategoryEditModel
                    isOpenSubCategoryModel={isOpenSubCategoryModel}
                    setIsOpenSubCategoryModel={setIsOpenSubCategoryModel}
                />
            }
        </div>
    )
}

export default ItemComp
