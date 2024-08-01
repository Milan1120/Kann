import React, { useEffect, useState } from 'react';
import CommunityHeader from '../../components/communityHeader';

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('../api/posts')
      .then((response) => response.json())
      .then((data) => {
        if (data.donations) {
          setDonations(data.donations);
        }
      })
      .catch((error) => {
        console.error('Error fetching donation data:', error);
      });
  }, []);

  return (
    <div className='flex h-screen w-full text-white'>
      <div className='w-full bg-gradient-to-l from-black to-fuchsia-900 h-full'>
        <CommunityHeader />
        <div className='flex items-center justify-center w-full'>
          <div className='flex items-center justify-center max-w-7xl w-full text-black'>
            <div className='flex-col w-full my-10 overflow-y-scroll scrollbar-hide max-h-[670px] space-y-6  rounded-xl'>
              {donations.map((donation, index) => (
                <div key={index} className='w-full h-48 rounded-xl flex items-center justify-around overflow-hidden '>
                  {/* <div className='w-1/6 h-full flex items-center justify-center overflow-hidden'>
                    <img src='https://source.unsplash.com/random/500x500/?cartoon,animation' className='h-full w-full' alt={`Donation ${index}`} />
                  </div> */}
                  <div className='w-5/6 h-full flex justify-around rounded-lg overflow-hidden '>
                    <div className='w-[20%] h-full flex items-center justify-center bg-gray-100  '>
                      <div className='flex-col space-y-6 text-center px-1'>
                        <div className='text-2xl text-green-900 font-bold capitalize '>{donation.donatorName}</div>
                        <div className='text-md text-gray-500 font-bold capitalize '>{donation.timestamp}</div>
                      </div>
                    </div>
                    <div className='w-[30%] h-full flex items-center justify-start bg-gray-900'>
                      <div className='flex-col h-full  w-full'>
                        <div className='flex w-full h-1/2 items-center border-b'>
                          <div className='w-[65%] font-bold text-white border-r h-full flex items-center justify-center px-6'>Number of People</div>
                          <div className='w-[35%] h-full flex items-center justify-center text-3xl text-white px-2 py-1 bg-gray-900 font-bold capitalize'>{donation.numberOfPeople}</div>
                        </div>
                        <div className='flex w-full h-1/2 items-center'>
                          <div className='w-[65%] font-bold text-white border-r h-full flex items-center justify-center px-6'>Number of Items</div>
                          <div className='w-[35%] h-full flex items-center justify-center text-3xl text-white px-2 py-1 bg-gray-900 font-bold capitalize'>{donation.numberOfItems}</div>
                        </div>
                      </div>
                    </div>
                    <div className='w-[50%] h-full flex items-center justify-start border-l'>
                      <div className='flex-col w-full h-full'>
                        <div className='h-1/2 w-full flex items-center justify-start border-b'>
                          <div className='w-[25%] px-2 text-sm border-r bg-cyan-900 h-full flex items-center justify-center font-bold text-white'>Pick-up Location</div>
                          <div className='text-sm flex items-center justify-start px-4 overflow-scroll overflow-y-scroll scrollbar-hide bg-cyan-900 h-full w-full text-white font-bold capitalize'>{donation.pickupLocation}</div>
                        </div>
                        <div className='h-1/2 w-full flex items-center justify-start '>
                          <div className='w-[25%] px-2 text-sm border-r bg-cyan-900 h-full flex items-center justify-center font-bold text-white'>Contact Info</div>
                          <div className='text-sm flex items-center justify-start px-4 bg-cyan-900 h-full w-full text-white font-bold capitalize'>{donation.phoneNumber}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
