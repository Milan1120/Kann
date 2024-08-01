import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-gray-900 to-gray-600'>
    <Header/>
    <div className='flex'>
      <div className="hidden lg:flex w-1/2 h-screen overflow-hidden ">
      <img src='https://source.unsplash.com/random/900x900/?people,community' className='h-full w-full'/>
      </div>
      <div className='w-full lg:w-1/2 bg-gradient-to-l from-red-700 to-blue-900 h-screen'>
      <div className='flex items-center justify-center h-full'>
        <div className='flex my-16 items-center justify-center max-w-7xl w-full'>
        <div className="lg:w-[60%] rounded-xl bg-black shadow-xl shadow-blue-500">
    <div className="flex justify-center flex-col items-center">
      <div className="text-white m-6 text-xl z-200">Contact Us</div>
      <div className="text-white m-6 z-200">We are always here to help out whatever way we can :)</div>
      <div className="text-white m-6 z-200 flex-col space-y-3">
        <div className="flex m-2">
          <ion-icon name="person-outline" class="m-2"></ion-icon> <input placeholder="Name" className="bg-gray-800 p-2 rounded-3xl" />
        </div>
        <div className="flex m-2">
          <ion-icon name="mail-outline" class="m-2"></ion-icon> <input placeholder="E-mail" className="bg-gray-800 p-2 rounded-3xl" />
        </div>
        <div className="flex m-2">
          <ion-icon name="call-outline" class="m-2"></ion-icon> <input placeholder="Phone" className="bg-gray-800 p-2 rounded-3xl" />
        </div>
        <div className="flex m-2">
          <ion-icon name="create-outline" class="m-2"></ion-icon> <input placeholder="Type your message" className="bg-gray-800 p-2 rounded-3xl" />
        </div>
        <div className="block m-2justify-center">
          <div className="bg-gradient-to-l from-red-700 to-blue-900 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer">
            <div className="flex justify-center">Send</div>
          </div>
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
  )
}

export default Contact