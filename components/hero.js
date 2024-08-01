import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-black bg-opacity-40 min-h-screen">
        <div className="flex-col items-start justify-center max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-2 space-x-4 p-4">
            <div className="text-center text-white font-bold text-2xl lg:text-5xl rounded-tr-3xl rounded-bl-3xl w-[80%] lg:w-1/2">
              Feeding the Future, Today: KANN, Your Gateway to Sustainable
              Giving
            </div>
            <div className="lg:w-1/2 w-full overflow-hidden bg-gray-800 h-80 lg:h-[600px] rounded-2xl shadow-2xl">
            <img src='https://source.unsplash.com/random/900x900/?community,NGO' className='h-full w-full'/>
            </div>
        </div>
            <div className='flex space-x-3 items-center justify-center'>
                <Link href={"/hotel/login"} className='my-4 text-xl bg-blue-900 px-4 py-1 rounded text-white cursor-pointer hover:bg-red-900 duration-300'>Donate Now</Link>
                <Link href={"/community/login"} className='my-4 text-xl bg-yellow-700 px-4 py-1 rounded text-white cursor-pointer hover:bg-cyan-900 duration-300'>Join Community</Link>
            </div>
          </div>
      </div>
    </>
  );
};

export default Hero;
