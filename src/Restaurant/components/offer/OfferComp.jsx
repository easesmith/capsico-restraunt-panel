import greenBadge from "@/assets/green-badge.png"
import redBadge from "@/assets/red-badge.png"

const OfferComp = ({ offerIcon, offerVale, offerPercent, tagTitle, isTagRed=false, setOfferValue }) => {

    function abc() {
        setOfferValue(offerPercent)
        console.log('bh')
    }

    return (
        <div onClick={abc} style={{ backgroundImage: `url(${offerIcon})` }} className='w-36 h-36 relative bg-no-repeat bg-center flex flex-col items-center justify-center'>
            <h3 className='text-xl font-bold font-numans'>{offerPercent}% Off</h3>
            <p className='font-numans font-medium text-xs'>Max ₹{offerVale}</p>
            {tagTitle && <div style={{ backgroundImage: `url(${isTagRed ? redBadge : greenBadge})` }} className="text-white w-24 h-20 absolute -bottom-4 bg-no-repeat bg-center py-1 px-5 text-center flex flex-col items-center justify-center">
                <div className="text-[11px] font-medium leading-3 break-words">{tagTitle}</div>
                {/* <span className="block text-[11px] font-medium -mt-1">only</span> */}
            </div>}
        </div>
    )
}

export default OfferComp