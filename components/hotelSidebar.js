import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HotelSidebar = () => {
  const router = useRouter();
  return (
    <div className="hidden lg:flex items-start justify-center w-[20%] bg-gray-900 h-full">
      <div className="w-full my-10">
        <div className="flex items-center justify-center">
          <div className="h-40 w-40 bg-gray-800 rounded-full my-10 overflow-hidden">
          <img src='https://source.unsplash.com/random/900x900/?cartoon' className='h-full w-full'/>
          </div>
        </div>

        <ul className="flex-col space-y-2 text-white text-lg font-medium w-full pl-6">
          <li className={`${ router.pathname === '/hotel/dashboard'
                ? 'text-white rounded-tl-2xl rounded-bl-2xl bg-blue-900 duration-300'
                : 'text-white'}`}>
                <Link href={'/hotel/dashboard'} className='flex items-center px-8 space-x-4'>
                    <ion-icon name="home-outline" class='text-2xl text-white'></ion-icon>
                    <div className="mx-3 hover:text-gray-400 duration-300 cursor-pointer flex py-5 px-4">Dashboard</div>
                </Link>  
          </li>
          <li className={`${router.pathname === '/hotel/donate'
                ? 'text-white rounded-tl-2xl rounded-bl-2xl bg-blue-900 duration-300'
                : 'text-white'}`}>
                <Link href={'/hotel/donate'} className='flex items-center px-8 space-x-4'>
                    <ion-icon name="earth-outline" class='text-2xl text-white'></ion-icon>
                    <div className="mx-3 hover:text-gray-400 duration-300 cursor-pointer flex py-5 px-4">Donate</div>
                </Link>          
            </li>
          <li className={`${router.pathname === '/hotel/help'
                ? 'text-white rounded-tl-2xl rounded-bl-2xl bg-blue-900 duration-300'
                : 'text-white'}`}>
                <Link href={'/hotel/help'} className='flex items-center px-8 space-x-4'>
                    <ion-icon name="help-outline" class='text-2xl text-white'></ion-icon>
                    <div className="mx-3 hover:text-gray-400 duration-300 cursor-pointer flex py-5 px-4">Help</div>
                </Link>  
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotelSidebar;
