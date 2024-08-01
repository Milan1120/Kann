import React from 'react'
import HotelSidebar from '../../components/hotelSidebar';
import HotelHeader from '../../components/hotelHeader';
const Success = () => {
  return (
    <div className='flex h-screen w-full text-white'>
    <HotelSidebar/>
    <div className='w-full lg:w-[80%] bg-gradient-to-l from-red-700 to-blue-900  h-full'>
        <HotelHeader/>
        <div className='flex items-center justify-center text-black '>
        <div className='flex items-center justify-center bg-white my-16 shadow-xl shadow-black px-28 p-14 rounded-xl'>
            <div className='w-full flex-col space-y-4 text-green-500 '>
            <div className='text-7xl font-bold'><ion-icon name="checkmark-circle"></ion-icon></div>
            <div className='text-xl font-bold'>Success</div>
        </div>
        </div>
    </div>
            </div>
</div>
  )
}

export default Success