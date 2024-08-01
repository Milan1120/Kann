import React from 'react'
import HotelSidebar from '../../components/hotelSidebar';
import HotelHeader from '../../components/hotelHeader';
const Help = () => {
  return (
    <div className='flex h-screen w-full text-white'>
    <HotelSidebar/>
    <div className='w-full lg:w-[80%] bg-gradient-to-l from-red-700 to-blue-900  h-full'>
        <HotelHeader/>
        <div className='flex items-center justify-center text-black '>
        <div className='flex items-center justify-around w-3/4 my-16 shadow-xl shadow-black p-4 rounded-xl'>
            <div className='w-full flex-col space-y-4 text-white'>
            <div className='text-xl font-bold'>Setup Profile</div>
            <div className='text-md'>Personalize your profile with information such as your location, preferences, and any specific details you want to share.</div>
            <div className='text-xl font-bold'>Donate Items</div>
            <div className='text-md text-lg font-bold'>Access Donation Section:</div>
            <div className='text-md'>Navigate to the "Donate Items" section on KANN's platform to begin the donation process.</div>
            <div className='text-md text-lg font-bold'>Specify Surplus Items:</div>
            <div className='text-md'>Clearly list the surplus food items you're willing to donate. Include details such as quantities, expiration dates, and any specific handling instructions.</div>
            <div className='text-md text-lg font-bold'>Schedule Pickups:</div>
            <div className='text-md'>Use KANN's scheduling system to set convenient pickup times for your donations. Ensure seamless coordination between your establishment and the recipient.</div>
            <div className='text-xl font-bold'>Connect Nearby NGO's</div>
            <div className='text-md'>Connect with nearby NGOs to explore collaboration opportunities. Discuss potential partnerships and how your surplus items can contribute to their food recovery efforts.</div>
            
        </div>
        </div>
    </div>
            </div>
</div>
  )
}

export default Help