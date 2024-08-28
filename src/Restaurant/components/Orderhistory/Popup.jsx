import React, { useEffect, useState } from 'react'
import WifiImg from '../../../assets/wifi.png'
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useLocation } from 'react-router-dom'

const Popup = () => {

  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation()

  useEffect(()=>{
    if(abc.pathname === '/restaurant/order-history'){
      setShowPopup(true)
    } else{
      setShowPopup(false)
    }
  },[location])

  return (
    <>
      {showPopup ?
        <Dialog open={showPopup} onOpenChange={setShowPopup}>
          <DialogContent className="min-w-[830px] h-[594px] bg-[#FFFFFF] rounded-xl mx-auto">
            <div className=' flex justify-center items-center py-8'>
              <img src={WifiImg} alt="wifi-img" />
            </div>
            <div className=' bg-[#E7EBEF66] flex flex-col items-end gap-1 rounded-xl py-6 px-8'>
              <p className='text-[#000000] text-2xl font-normal font-numans'>To prevent order rejections and ensure a positive customer experience, please go offline if you are unable to fulfill orders for any reason.”</p>
              <Button variant="wifi" className="bg-[#1AA6F1] text-[#FFFFFF] text-2xl font-normal font-numans tracking-[1%] rounded-[8px] py-5 px-16">Okay</Button>
            </div>
          </DialogContent>
        </Dialog>
        : ''}
    </>
  )
}

export default Popup
