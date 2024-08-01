import React from 'react';
import HotelSidebar from '../../components/hotelSidebar';
import HotelHeader from '../../components/hotelHeader';
const { donations } = 
{
    "donations": [
      {
        "icon": "fast-food-outline",
        "count": 21,
        "label": "Donations"
      },
      {
        "icon": "people-outline",
        "count": 13,
        "label": "NGO's Connected"
      },
      {
        "icon": "happy-outline",
        "count": 176,
        "label": "People Helped"
      },
    ]
  }
  ;

  

  const Dashboard = () => {
    return (
      <div className='flex lg:h-screen w-full text-white'>
        <HotelSidebar />
        <div className='w-full lg:w-[80%] bg-gradient-to-l from-red-700 to-blue-900 h-full'>
          <HotelHeader />
          <div className='flex items-center justify-center text-black '>
            <div className='flex items-center justify-around w-3/4 my-16 '>
              <div className='w-full'>
                <div className='text-white font-bold my-4'>Analytics</div>
                <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                  {donations.map((donation, index) => (
                    <div key={index} className='m-3 h-60 w-60 rounded-xl hover:scale-105 duration-500 bg-white flex items-center justify-center text-blue-900 shadow-xl shadow-gray-900'>
                      <div className='text-center flex-col space-y-2'>
                        <div className=''>
                          <ion-icon name={donation.icon} class='bg-blue-900 p-2 rounded-full text-5xl text-white'></ion-icon>
                        </div>
                        <div className='text-5xl font-bold'>{donation.count}</div>
                        <div className='text-sm font-medium'>{donation.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;