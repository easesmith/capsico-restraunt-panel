
const Property = ({ title, example }) => {
    return (
        <div className='bg-white p-3 rounded-lg shadow-sm'>
            <h2 className='font-inter text-lg font-medium text-black'>{title}</h2>
            <p className='text-[#585858] mt-1'>{example}</p>
            <button type='button' className="mt-4 text-[#4A67FF] font-medium font-inter">Add property</button>
        </div>
    )
}

export default Property