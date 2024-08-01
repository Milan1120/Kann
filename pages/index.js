import React, { useState } from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/features';
import Footer from '../components/footer';
const HomePage = () => {
  
  return (
    <>
      <div className="bg-gray-900 bg-image bg-cover bg-center bg-[url('https://source.unsplash.com/random/500x400/?food,food-waste')] h-screen w-full overflow-hidden">
        <Header />
        <Hero/>
      </div>
        <Features/>
        <Footer/>


    </>
  );
};

export default HomePage;
