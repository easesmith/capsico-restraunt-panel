import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { Button } from '@/components/ui/button'
import { IoSearchOutline } from 'react-icons/io5'
import { Input } from '@/components/ui/input'
import { FiChevronRight } from 'react-icons/fi'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const HelpCenter = () => {
    const data = [
        {
            issue: 'Location, Address',
            title: 'Modify Outlet’s location & address'
        },
        {
            issue: 'Items list',
            title: 'Name, Photos, Prices, Packaing charge etc.'
        },
        {
            issue: 'Payouts',
            title: 'Statement, Invoices etc.'
        },
        {
            issue: 'Promotions, Ads & Caspsico Gold',
            title: 'Signup, stop & more info'
        },
        {
            issue: 'Hygiene audit report',
            title: 'Upload audit report'
        }
    ]
    const [activeTab, setActiveTab] = useState('ticket')
    const [searchQuery, setSearchQuery] = useState('')
    const [issueData, setIssueData] = useState(data)

    return (
        <RestaurantWrapper>
            <div>
                <div className='bg-[#D9F1FD66] flex justify-between items-center px-10 py-4'>
                    <h1 className='five-color class-base1'>Help Center</h1>
                    <Button variant='outline' className="nine-color class-sm1">View on Capsico</Button>
                </div>
                <div className='w-full h-[700px] bg-[#E7EBEF66] flex justify-center pl-6 pb-2 pt-4'>
                    <div className='w-1/2 bg-[#FFFFFF] pt-6 px-6  border-[2px] rounded-s-[7px]'>
                        <div className='w-full flex items-center pl-3'>
                            <IoSearchOutline className='-mr-6 z-10 eleven-color' />
                            <Input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search your issue" className="pl-8 secondry-color class-sm2" />
                        </div>
                        <div className='flex flex-col gap-5 justify-between mt-5'>
                            {issueData.map((e, i) => {
                                return (
                                    <div key={i} className='flex justify-between items-center pl-1 pr-2'>
                                        <div className='flex flex-col justify-center items-start gap-[10px]'>
                                            <h2 className='twenty-color class-lg4'>{e.issue}</h2>
                                            <p className='fourteen-color class-sm2'>{e.title}</p>
                                        </div>
                                        <FiChevronRight className='text-xl cursor-pointer' />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className=' w-1/2 bg-[#FFFFFF] flex flex-col items-center justify-start gap-5 px-5 pt-7'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center gap-5'>
                                <p onClick={() => setActiveTab('ticket')} className={`${activeTab === 'ticket' ? 'primary-color border-[#1AA1F1]' : 'ten-color border-transparent'} border-b-2 pb-[6px] class-sm4 text-center px-3 cursor-pointer`}>All tickets - 1</p>
                                <p onClick={() => setActiveTab('open')} className={`${activeTab === 'open' ? 'primary-color border-[#1AA1F1]' : 'ten-color border-transparent'} border-b-2 pb-[6px] class-sm4 text-center px-3 cursor-pointer`}>Open - 0</p>
                                <p onClick={() => setActiveTab('accepted')} className={`${activeTab === 'accepted' ? 'primary-color border-[#1AA1F1]' : 'ten-color border-transparent'} border-b-2 pb-[6px] class-sm4 text-center px-3 cursor-pointer`}>Accepted - 0</p>
                            </div>
                            <Select>
                                <SelectTrigger className=" third-color class-sm1 w-[135px]">
                                    <SelectValue placeholder="Last 7 Days" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className=' third-color class-base1'>
                                        <SelectItem value="14">Last 14 Days</SelectItem>
                                        <SelectItem value="21">Last 21 Days</SelectItem>
                                        <SelectItem value="28">Last 28 Days</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        {activeTab === 'ticket' &&
                            <div className='w-full border-[1px] border-[#DAE1E7] bg-[#FFFFFF] rounded-lg p-5 flex flex-col gap-[10px]'>
                                <p className='six-color class-xs4'>July 11</p>
                                <div className='flex justify-between items-center'>
                                    <p className='seven-color class-sm4'>Ticket ID: 43922929</p>
                                    <button className='class-sm4 bg-[#22C55E] hover:bg-[#30a25a] rounded-lg text-[#FFFFFF] py-1 px-3'>Ticket</button>
                                </div>
                                <div className='border-[1px] border-[#DAE1E7]'></div>
                                <div className='flex flex-col justify-center gap-2'>
                                    <h5 className='seven-color class-sm4'>Desi Platters, Khurram Nagar</h5>
                                    <p className='seven-color class-xs4'>Capsico Chat: Photoshoot request</p>
                                </div>
                            </div>
                        }
                        {activeTab === 'open' &&
                            <div className='w-full border-[1px] border-[#DAE1E7] bg-[#FFFFFF] rounded-lg p-5 flex flex-col gap-[10px]'>
                                <p className='six-color class-xs4'>July 11</p>
                                <div className='flex justify-between items-center'>
                                    <p className='seven-color class-sm4'>Ticket ID: 43922929</p>
                                    <button className='class-sm4 bg-[#22C55E] hover:bg-[#30a25a] rounded-lg text-[#FFFFFF] py-1 px-3'>Opened</button>
                                </div>
                                <div className='border-[1px] border-[#DAE1E7]'></div>
                                <div className='flex flex-col justify-center gap-2'>
                                    <h5 className='seven-color class-sm4'>Desi Platters, Khurram Nagar</h5>
                                    <p className='seven-color class-xs4'>Capsico Chat: Photoshoot request</p>
                                </div>
                            </div>
                        }
                        {activeTab === 'accepted' &&
                            <div className='w-full border-[1px] border-[#DAE1E7] bg-[#FFFFFF] rounded-lg p-5 flex flex-col gap-[10px]'>
                                <p className='six-color class-xs4'>July 11</p>
                                <div className='flex justify-between items-center'>
                                    <p className='seven-color class-sm4'>Ticket ID: 43922929</p>
                                    <button className='class-sm4 bg-[#22C55E] hover:bg-[#30a25a] rounded-lg text-[#FFFFFF] py-1 px-3'>Accepted</button>
                                </div>
                                <div className='border-[1px] border-[#DAE1E7]'></div>
                                <div className='flex flex-col justify-center gap-2'>
                                    <h5 className='seven-color class-sm4'>Desi Platters, Khurram Nagar</h5>
                                    <p className='seven-color class-xs4'>Capsico Chat: Photoshoot request</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </RestaurantWrapper>
    )
}

export default HelpCenter
