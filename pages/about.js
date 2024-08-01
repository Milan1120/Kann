import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


const About = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-600'>
    <Header/>
    <div className='flex'>
      <div className='w-full lg:w-1/2 text-white bg-gradient-to-l from-black to-fuchsia-900 h-screen flex items-center justify-center'>
        <div className='w-3/4 text-center shadow-xl shadow-black p-4 rounded-xl'>
        <div className='text-2xl font-bold my-2'>About US</div>
        <div>At KANN, we are passionate about addressing the critical issues of food waste and insecurity. Our mission is to create a seamless platform connecting restaurants with surplus food to individuals and communities facing hunger. Committed to sustainability, we strive to reduce the environmental impact of food waste while fostering corporate social responsibility. With transparency, efficiency, and community engagement at our core, KANN empowers businesses, NGOs, and individuals to make a tangible difference in the fight against hunger and contribute to a more sustainable and compassionate world. Join us on this journey to create positive change, one meal at a time.</div>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 h-screen overflow-hidden">
      <img src='https://source.unsplash.com/random/900x900/?fruits,salad,food' className='h-full w-full'/>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default About