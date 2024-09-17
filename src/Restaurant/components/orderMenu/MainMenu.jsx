import { BiSolidRightArrow } from 'react-icons/bi'
import RestaurantWrapper from '../restaurantWrapper/RestaurantWrapper'
import CircularProgress from './CircularProgress'
import { FaArrowRight } from 'react-icons/fa6'

const MainMenu = () => {
    return (
        <RestaurantWrapper>
            <div className='grid grid-cols-[59%_39%] gap-4 p-4 bg-white h-full items-start pt-10'>
                <div>
                    <div className='p-4 px-6 bg-[#F8F9FC] rounded-lg flex items-center justify-between gap-3'>
                        <div>
                            <h1 className='font-inter text-[#414142] font-semibold text-2xl'>Your menu Score </h1>
                            <p className='font-inter text-[#8C8D8D] my-1 font-medium'>Top restaurants in your area have a menu score of 90%</p>
                            <p className='font-inter text-sm text-[#C5C5C5] font-medium'>Last updated on 5:42 pm, 28/08/2024</p>
                        </div>
                        <CircularProgress progress={31} />
                    </div>
                    <h2 className='mt-7 text-lg font-semibold font-inter text-[#4C4C4C]'>Top opportunities to grow your business</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className='border border-[#EBEBEB] rounded-lg p-4'>
                            <h3 className='text-lg text-[#515151] font-semibold font-inter'>Create add-ons to <br />
                                increase order value</h3>
                            <button className='font-inter flex gap-1 items-center mt-3 text-[#4181F0]'>
                                <span>View suggestions</span>
                                <BiSolidRightArrow />
                            </button>
                        </div>
                        <div className='border border-[#EBEBEB] rounded-lg p-4'>
                            <h3 className='text-lg text-[#515151] font-semibold font-inter'>Add descriptions of your <br />
                                top selling items</h3>
                            <button className='font-inter flex gap-1 items-center mt-3 text-[#4181F0]'>
                                <span>View items</span>
                                <BiSolidRightArrow />
                            </button>
                        </div>
                        <div className='border border-[#EBEBEB] rounded-lg p-4'>
                            <h3 className='text-lg text-[#515151] font-semibold font-inter'>Add photos of your top <br />
                                selling items</h3>
                            <button className='font-inter flex gap-1 items-center mt-3 text-[#4181F0]'>
                                <span>View items</span>
                                <BiSolidRightArrow />
                            </button>
                        </div>
                        <div className='border border-[#EBEBEB] rounded-lg p-4'>
                            <h3 className='text-lg text-[#515151] font-semibold font-inter'>Simplify your menu <br />
                                structure</h3>
                            <button className='font-inter flex gap-1 items-center mt-3 text-[#4181F0]'>
                                <span>View insights</span>
                                <BiSolidRightArrow />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-[#EBEBEB] rounded-lg p-4 pb-32'>
                        <div className='flex justify-between'>
                            <h3 className='text-lg text-[#515151] font-semibold font-inter'>Go to Menu Editor</h3>
                            <FaArrowRight className='text-2xl cursor-pointer' />
                        </div>
                        <p className='font-inter font-medium text-[#8D8D8D]'>Edit menu, tax slabs and <br />
                            inventory</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <div className='border border-[#EBEBEB] pb-24 flex justify-between rounded-lg p-4'>
                            <h3 className='text-[#5D6370] font-semibold font-inter'>Request <br />
                                photoshoot</h3>
                            <FaArrowRight className='text-2xl cursor-pointer' />
                        </div>
                        <div className='border border-[#EBEBEB] pb-24 flex justify-between rounded-lg p-4'>
                            <h3 className='text-[#5D6370] font-semibold font-inter'>Add videos <br />
                            on menu</h3>
                            <FaArrowRight className='text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </RestaurantWrapper>
    )
}

export default MainMenu