import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

const CreateOfferModal = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                
            </SheetTrigger>
            <SheetContent className=' w-[561px] bg-[#FFFFFF] px-0 overflow-y-scroll'>
                {/* <div className=''> */}
                <h2 className="class-base4 five-color px-4 py-2 border-b-[1px] border-[green]">Create New Offer</h2>
                <div className='px-4 pt-4 pb-7 w-full flex flex-col gap-4'>
                    <h3 className='class-xl6 five-color mb-3'>Select your discount</h3>
                    <button className='border-[1px] border-[#D6D6D6] rounded-lg five-color class-xl4 h-[46px]'>{offerValue}50% OFF upto Rs120</button>
                    <Slider defaultValue={[33]} max={100} step={1} value={slideValue} onValueChange={setSlideValue} />
                    <div className="flex justify-start gap-14 w-full -mt-3 class-sm4 twentyTwo-color">
                        {[10, 20, 30, 40, 50, 60].map((mark) => (
                            <span key={mark}>{mark}%</span>
                        ))}
                    </div>
                    <div className='flex gap-4'>
                        <button onClick={() => setActivePriseTab('noMax')} className={`border-[1px] rounded-lg class-sm4 h-[46px] w-[95px] ${activePriseTab === 'noMax' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] twentyTwo-color border-[#D6D6D6]'}`}>No Max cap</button>
                        <button onClick={() => setActivePriseTab('150')} className={`border-[1px] rounded-lg class-sm4 h-[46px] w-[95px] ${activePriseTab === '150' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] twentyTwo-color border-[#D6D6D6]'}`}>Rs150</button>
                        <button onClick={() => setActivePriseTab('120')} className={`border-[1px] rounded-lg class-sm4 h-[46px] w-[95px] ${activePriseTab === '120' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] twentyTwo-color border-[#D6D6D6]'}`}>Rs120</button>
                    </div>
                </div>
                <div className='border-[5px] border-[#F1F1F1]'></div>
                <div className='px-4 pt-4 pb-7 w-full flex flex-col gap-4'>
                    <div>
                        <h3 className='class-xl6 five-color mb-3'>Discount applicable for</h3>
                        <div className='flex items-center justify-between gap-4 w-full'>
                            <button onClick={() => setActiveTab('allUser')} className={`w-full h-[46px] class-sm4 rounded-lg border-[1px] ${activeTab === 'allUser' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] eleven-color border-[#6E6E6E]'}`}>All users</button>
                            <button onClick={() => setActiveTab('newUser')} className={`w-full h-[46px] class-sm4 rounded-lg border-[1px] ${activeTab === 'newUser' ? 'bg-[#2D6FE8] fourth-color border-[#2D6FE8]' : 'bg-[#FFFFFF] eleven-color border-[#6E6E6E]'}`}>New Users</button>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className='class-sm4 five-color'>Select meal time</Label>
                        <Select>
                            <SelectTrigger className="w-full max-w-[342px] h-[46px] border-[1px] border-[#D6D6D6] rounded-lg py-2 px-4 focus:ring focus:ring-transparent focus:border-black mt-3">
                                <SelectValue placeholder="All day (24 hours)" />
                            </SelectTrigger>

                            <SelectContent className='five-color class-base2'>
                                <SelectItem value="all-day">All day (24 hours)</SelectItem>
                                <SelectItem value="a">ABC</SelectItem>
                                <SelectItem value="b">ABC2</SelectItem>
                                <SelectItem value="c">ABC3</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className='class-sm2 twentyOne-color mt-2'>All users who place an order in this meal will be eligible for the offer</p>
                    </div>
                </div>
                <div className='border-[5px] border-[#F1F1F1]'></div>
                <div className='px-4 pt-4 w-full flex flex-col gap-28'>
                    <div>
                        <Label htmlFor="email" className='class-xl6 five-color'>Campaign start date</Label>
                        <Select>
                            <SelectTrigger className="w-full max-w-[342px] h-[46px] border-[1px] border-[#D6D6D6] rounded-lg py-2 px-4 focus:ring focus:ring-transparent focus:border-black mt-3">
                                <SelectValue placeholder="4th oct 2024" />
                            </SelectTrigger>

                            <SelectContent className='five-color class-base2'>
                                <SelectItem value="4th-day">4th oct 2024</SelectItem>
                                <SelectItem value="a">ABC</SelectItem>
                                <SelectItem value="b">ABC2</SelectItem>
                                <SelectItem value="c">ABC3</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className='class-sm2 twentyOne-color mt-2'>Your offer will start on 3rd oct 2024 at 7:00 PM. You can stop this offer at anytime.</p>
                    </div>
                    <button className={`h-[53px] rounded-lg bg-[#CDCDCD] class-base4 fourth-color`}>Choose outlet & Activate</button>
                </div>
                {/* </div> */}
            </SheetContent>
        </Sheet>
    )
}

export default CreateOfferModal