import React, { useState } from 'react'
import { FiEdit2, FiPlusCircle } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { RiDeleteBinLine } from 'react-icons/ri'
import MaskGroupInput from '../../../assets/Mask group Input.png'
import CategoryEditModel from '../models/CategoryEditModel'
import SubCategoryEditModel from '../models/SubCategoryEditModel'

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
            <div className="w-full flex items-center justify-between border-b-2">
                <div className=" flex justify-start items-center gap-4 py-5">
                    <button onClick={() => setIsOpenb(!isOpenb)} className={` transform ${isOpenb ? "rotate-90" : ""}`}><IoIosArrowForward className="seven-color text-2xl" /></button>
                    <h3 className="seven-color class-lg1">{title}</h3>
                    <button className={``} onClick={() => setIsOpenCategoryModel(true)}><FiEdit2 className="seven-color text-xl" /></button>
                </div>
                <p className="class-base1 seven-color">3 Items</p>
            </div>

            {isOpenb ?
                <div className="">
                    <div className="w-full flex items-center justify-between pl-10 border-b-2">
                        <div className="flex justify-start items-center gap-4 py-5">
                            <button onClick={() => setIsOpenc(!isOpenc)} className={` transform ${isOpenc ? "rotate-90" : ""}`}><IoIosArrowForward className="seven-color text-2xl" /></button>
                            <h3 className="seven-color class-lg1">Combos</h3>
                            <button className={``} onClick={() => setIsOpenSubCategoryModel(true)}><FiEdit2 className="seven-color text-xl" /></button>
                        </div>
                        <p className="class-base1 seven-color">3 Items</p>
                    </div>
                    {isOpenc ?
                        <div className="pl-10">
                            <div className="flex items-center gap-40 py-4 border-b-2 border-dotted">
                                <div className="flex items-center gap-2">
                                    <img src={MaskGroupInput} alt="" />
                                    <span className="class-base1 seven-color">Egg combo</span>
                                </div>
                                <span className="class-base1 seven-color">₹90</span>
                            </div>
                            <div className="flex items-center gap-40 py-4 border-b-2 border-dotted">
                                <div className="flex items-center gap-2">
                                    <img src={MaskGroupInput} alt="" />
                                    <span className="class-base1 seven-color">Egg combo</span>
                                </div>
                                <span className="class-base1 seven-color">₹90</span>
                            </div>
                            <div className="flex items-center gap-40 py-4 border-b-2 border-dashed">
                                <div className="flex items-center gap-2">
                                    <img src={MaskGroupInput} alt="" />
                                    <span className="class-base1 seven-color">Egg combo</span>
                                </div>
                                <span className="class-base1 seven-color">₹90</span>
                            </div>
                        </div>
                        : ''}
                    <div className={`flex flex-wrap gap-8 py-5`}>
                        {
                            addFoodBtn ?
                                <button className=" w-[250px] flex items-center gap-3" onClick={() => setAddFoodBtn(false)}><FiPlusCircle className="primary-color text-lg" /><span className="five-color class-lg1">Add food item</span></button>
                                : <div className=" w-full flex flex-col gap-5">
                                    <div className="flex justify-between items-center">
                                        <input type="text" placeholder="Sample : Main Course Veg" className="w-fit min-w-[300px] bg-[#E7EBEF33] border-[1px] border-[#1AA1F1] rounded-lg py-5 px-4 text-center placeholder:fourteen-color " />
                                        <RiDeleteBinLine className="text-[red] text-[20px] cursor-pointer" onClick={() => setAddFoodBtn(true)} />
                                    </div>
                                    <div>
                                        <p className="five-color class-base1">food item Uncertainty? Try Combos! </p>
                                    </div>
                                </div>
                        }
                        {
                            exitingBtn ?
                                <button className="w-[553px] flex items-center gap-3" onClick={() => setExitingBtn(false)}><FiPlusCircle className="primary-color text-lg" /><span className="five-color class-lg1">Add Exiting item</span></button>
                                : <div className=" w-full flex flex-col gap-5">
                                    <div className="flex justify-between items-center">
                                        <input type="text" placeholder="Sample : Main Course Veg" className="w-fit min-w-[300px] bg-[#E7EBEF33] border-[1px] border-[#1AA1F1] rounded-lg py-5 px-4 text-center placeholder:fourteen-color " />
                                        <RiDeleteBinLine className="text-[red] text-[20px] cursor-pointer" onClick={() => setExitingBtn(true)} />
                                    </div>
                                    <div>
                                        <p className="five-color class-base1">Exiting item Uncertainty? Try Combos! </p>
                                    </div>
                                </div>
                        }
                        {
                            addSublevel ?
                                <button className="w-[553px] flex items-center gap-3" onClick={() => setAddSublevel(false)} ><FiPlusCircle className="primary-color text-lg" /><span className="five-color class-lg1">Add sublevel</span></button>
                                : <div className=" w-full flex flex-col gap-5">
                                    <div className="flex justify-between items-center">
                                        <input type="text" placeholder="Sample : Main Course Veg" className="w-fit min-w-[300px] bg-[#E7EBEF33] border-[1px] border-[#1AA1F1] rounded-lg py-5 px-4 text-center placeholder:fourteen-color " />
                                        <RiDeleteBinLine className="text-[red] text-[20px] cursor-pointer" onClick={() => setAddSublevel(true)} />
                                    </div>
                                    <div>
                                        <p className="five-color class-base1">Sublevel Uncertainty? Try Combos! </p>
                                    </div>
                                </div>
                        }
                    </div>
                </div> :
                ''}


            {
                isOpenCategoryModel &&
                <CategoryEditModel
                    isOpenCategoryModel={isOpenCategoryModel}
                    setIsOpenCategoryModel={setIsOpenCategoryModel}
                />
            }

            {
                isOpenSubCategoryModel &&
                <SubCategoryEditModel
                    isOpenSubCategoryModel={isOpenSubCategoryModel}
                    setIsOpenSubCategoryModel={setIsOpenSubCategoryModel}
                />
            }
        </div>
    )
}

export default ItemComp
