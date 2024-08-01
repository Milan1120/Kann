import React, { useState, useEffect } from 'react';
import HotelSidebar from '../../components/hotelSidebar';
import HotelHeader from '../../components/hotelHeader';
const Donate = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from API
    fetch('/api/username')
      .then((response) => response.json())
      .then((data) => {
        if (data.username) {
          setUsername(data.username);
        }
      })
      .catch((error) => {
        console.error('Error fetching username:', error);
      });
  }, []);

  const [orderInfo, setOrderInfo] = useState({
    hotelname: '',
    numberOfItems: 0,
    numberOfPeople: 0,
    pickupLocation: '',
    donatorName: '',
    phoneNumber: '',
    items: [],
  });

  const handleInputChange = (field, value) => {
    setOrderInfo({
      ...orderInfo,
      [field]: value,
    });
  };

  const handleAddItem = () => {
    setOrderInfo({
      ...orderInfo,
      items: [...orderInfo.items, ''],
    });
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...orderInfo.items];
    updatedItems[index] = value;

    setOrderInfo({
      ...orderInfo,
      items: updatedItems,
    });
  };
  const handleDeleteItem = (index) => {
    const updatedItems = [...orderInfo.items];
    updatedItems.splice(index, 1);

    setOrderInfo({
      ...orderInfo,
      items: updatedItems,
    });
  };


  return (
    <div className="flex h-screen w-full text-white">
      <HotelSidebar />
      <div className="w-full lg:w-[80%] overflow-y-scroll bg-gradient-to-l from-red-700 to-blue-900 h-full">
        <HotelHeader />
        <div className="flex items-center justify-center text-black ">
          <div className="flex items-center justify-around w-3/4 my-16 ">
            <div className="w-full">
              {/* Code for donation */}
              <form
                action="/api/hoteldonate"
                method="POST"
                className="container mx-auto p-4 text-white"
              >
                <h1 className="text-2xl font-bold mb-4">Donation Form</h1>

                <div className="mb-4">
                  <label
                    htmlFor="hotelname"
                    className="block text-sm font-medium"
                  >
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    id="hotelname"
                    name="hotelname"
                    value={username}
                    readOnly
                    className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900"
                    required
                  />
                </div>
                <div className="mb-4">
                  <div
                    htmlFor="donatorName"
                    className="block text-sm font-medium"
                  >
                    Donator Name
                  </div>
                  <input
                    type="text"
                    id="donatorName"
                    name="donatorName"
                    value={orderInfo.donatorName}
                    onChange={(e) =>
                      handleInputChange('donatorName', e.target.value)
                    }
                    className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900"
                    required
                  />
                </div>
                <div className='flex space-x-3 w-full items-center justify-center'>
                <div className="mb-4 w-1/2 ">
                  <label
                    htmlFor="numberOfItems"
                    className="block text-sm font-medium "
                  >
                    Number of Items
                  </label>
                  <input
                    type="number"
                    id="numberOfItems"
                    name="numberOfItems"
                    value={orderInfo.numberOfItems}
                    onChange={(e) =>
                      handleInputChange('numberOfItems', e.target.value)
                    }
                    className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900"
                    required
                  />
                </div>

                <div className="mb-4 w-1/2 ">
                  <label
                    htmlFor="numberOfPeople"
                    className="block text-sm font-medium "
                  >
                    Number of People
                  </label>
                  <input
                    type="number"
                    id="numberOfPeople"
                    name="numberOfPeople"
                    value={orderInfo.numberOfPeople}
                    onChange={(e) =>
                      handleInputChange('numberOfPeople', e.target.value)
                    }
                    className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900 focus:outline-none"
                    required
                  />
                </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={orderInfo.phoneNumber}
                    onChange={(e) =>
                      handleInputChange('phoneNumber', e.target.value)
                    }
                    className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="pickupLocation"
                    className="block text-sm font-medium "
                  >
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={orderInfo.pickupLocation}
                    onChange={(e) =>
                      handleInputChange('pickupLocation', e.target.value)
                    }
                    className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium ">
                    Add Items
                  </label>
                  {orderInfo.items.map((item, index) => (
                    <input
                      key={index}
                      type="text"
                      value={item}
                      onChange={(e) => handleItemChange(index, e.target.value)}
                      className="mt-1 p-2 shadow-xl shadow-red-900 rounded-md w-full bg-gray-900 focus:outline-none"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="my-2 bg-fuchsia-700 text-white px-4 py-2 rounded-md"
                  >
                    Add Item
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteItem}
                    className="mx-2 my-2 bg-blue-900 text-white px-4 py-2 rounded-md"
                  >
                    Delete Item
                  </button>
                </div>

                <button
                  type="submit"
                  value="onate"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Submit Order
                </button>
              </form>

              {/* Code for donation */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
