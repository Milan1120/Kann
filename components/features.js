import React from 'react';

const data = [
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?food,food-waste",
    "title": "Food Waste Mitigation:",
    "description": "KANN minimizes food waste by connecting restaurants with surplus food to individuals facing hunger, fostering a sustainable approach to food distribution."
  },
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?food-insecurity,food-waste",
    "title": " Alleviate Food Insecurity:",
    "description": "KANN tackles food insecurity by efficiently linking surplus food resources to communities in need, ensuring no one goes to bed hungry."
  },
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?hotels,restaurants",
    "title": "Foster Corporate Social Responsibility (CSR):",
    "description": " KANN encourages businesses to embrace CSR practices, aiding restaurants and hotels in actively participating in food donation initiatives and positively impacting their communities."
  },
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?NGO,food-waste",
    "title": "Enhance Efficiency:",
    "description": "KANN streamlines the food donation process, providing a user-friendly platform for restaurants and NGOs to coordinate efforts, reducing time and effort required for logistics."
  },
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?reports,charts,accountancy",
    "title": "Ensure Transparency and Accountability:",
    "description": "KANN enhances transparency in food donation initiatives by providing real-time updates and reporting, empowering donors to track the impact of their contributions and fostering accountability."
  },
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?law",
    "title": "Legal Compliance:",
    "description": "KANN assists businesses in adhering to evolving legal and regulatory requirements related to food donation, ensuring practices align with relevant laws."
  },
  {
    "imageSrc": "https://source.unsplash.com/random/500x400/?community",
    "title": "Encourage Community Engagement:",
    "description": "KANN fosters community engagement by sharing success stories and encouraging businesses to participate in sustainable food donation efforts, building local ties and goodwill."
  },

];

const Card = ({ imageSrc, title, description }) => (
  <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col lg:flex-row justify-center items-start rounded-lg">
    <div className="h-26 w-full lg:w-1/4 overflow-hidden">
      <img src={imageSrc} alt="" className="h-full w-full" />
    </div>
    <div className="grid p-2 lg:w-3/4">
      <div className="font-bold text-lg text-black m-2 mt-10">{title}</div>
      <div className="text-gray-500 m-2 text-sm">
        <a href="">{description}</a>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="flex justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-black">
    <div className=''>
        <div className=' flex items-center justify-center text-3xl text-white font-bold my-4'>Goals of KANN</div>
    <div className="flex flex-col max-w-7xl justify-center items-center">
      {data.map((item, index) => (
          <Card key={index} {...item} />
          ))}
    </div>
          </div>
  </div>
);

export default Features;
