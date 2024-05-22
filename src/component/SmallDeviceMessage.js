import React from 'react';

const SmallDeviceMessage = () => {
  return (
    <div className="small-device-message">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops! Not Optimized</h2>
          <p className="text-lg text-white">Your current device might not display this website correctly.</p>
          <p className="text-lg text-white mt-2">For the best experience, please switch to a larger screen.</p>
        </div>
        <button className="px-6 py-3 bg-white text-red-500 rounded-lg font-semibold shadow-md hover:bg-red-200 transition duration-300 ease-in-out">View on Larger Device</button>
      </div>
    </div>
  );
};

export default SmallDeviceMessage;
