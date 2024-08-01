import React, { useState } from 'react';
import Header from '../../components/header';
import Link from 'next/link';
import Footer from '../../components/footer';


const Login = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-600'>
    <Header/>
    <div className='flex'>
      <div className="hidden lg:flex w-1/2 h-screen overflow-hidden">
      <img src='https://source.unsplash.com/random/900x900/?community,NGO' className='h-full w-full'/>
      </div>
      <div className='w-full lg:w-1/2 h-screen bg-black bg-opacity-40'>
      <div className="flex items-center justify-center h-full">
          <div className="flex my-16 items-center justify-center max-w-7xl w-full">
            <div id='login' className="flex justify-center">
              <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
                <form action='/api/communitylogin' method='POST' className=" w-full md:w-3/4 bg-white p-8 shadow-xl">
                  <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
                    <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">
                      Login as Community
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                    <div className="">
                      <input
                        id='username'
                        name='username'
                        required
                        type="text"
                        placeholder="User Name"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                      />
                    </div>
                    <div className="">
                      <input
                        id='password'
                        name='password'
                        required
                        type="password"
                        placeholder="Password"
                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-7">
                    <button type='submit' value="Login" className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-black to-fuchsia-900 font-medium m-2 mb-6 ">
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="h-[100%] w-full md:w-1/3  bg-gradient-to-l from-black to-fuchsia-900  items-center flex justify-center">
                  <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
                    <h1 className="text-5xl">New Here?</h1>
                    <h1 className="my-2">
                      Sign Up here
                    </h1>
                    <Link href={'/community/signup'} className="hover:shadow-xl  duration-400 bg-white flex items-center justify-center my-2 rounded-2xl px-4 text-fuchsia-900 py-1">
                      SignUp
                    </Link>
                  </div>
                </div>
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

export default Login;
