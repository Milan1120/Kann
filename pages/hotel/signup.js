import React, { useState } from 'react';
import Header from '../../components/header';
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../../components/footer';


const Signup = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-600'>
    <Header/>
    <div className='flex'>
      <div className="hidden lg:flex w-1/2 h-screen overflow-hidden">
      <img src='https://source.unsplash.com/random/900x900/?hotel,restaurants' className='h-full w-full'/>
      </div>
      <div className='w-full lg:w-1/2 h-screen bg-black bg-opacity-40'>
      <div className="flex items-center justify-center h-full">
          <div className="flex my-16 items-center justify-center max-w-7xl w-full">
            <div id='login' className="flex justify-center">
              <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
                <form action='../api/hotelsignup' method='POST' className=" w-full bg-white p-8 shadow-xl rounded-xl">
                  <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
                    <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">
                      SignUp as Hotel
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                    <div className="">
                      <input
                        name='username'
                        id='username'
                        required
                        type="text"
                        placeholder="User Name"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                      />
                    </div>
                    <div className="">
                      <input
                        name='password'
                        id='password'
                        required
                        type="password"
                        placeholder="Password"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                      />
                    </div>
                    <div className="">
                      <input
                        name='passwordagain'
                        id='passwordagain'
                        required
                        type="password"
                        placeholder="Confirm Password"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-7">
                    <button type='submit' value="Signup" className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white  bg-gradient-to-l from-red-700 to-blue-900 font-medium m-2 mb-6 ">
                      Signup
                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default Signup;

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var username = getCookie('username', { req, res });
  if (username != undefined){
      return {
          redirect: {
              permanent: false,
              destination: "/"
          }
      }
  }
  return { props: {username:false} };
};
