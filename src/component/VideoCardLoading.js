import React, { useState, useEffect } from 'react';
import '../css/VideoCardLoading.css'; // Import the CSS file for the loading animation

const VideoCardLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate delay of 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-[350px] h-[350px] z-50 overflow-hidden transition duration-300 ease-in-out transform bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-[90%] h-[200px] bg-gray-300 rounded-lg mb-4">
            {loading ? null : (
              <div className="flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div className="pt-8 text-center">
                    <p className="text-lg text-red-500 font-semibold">We're sorry!</p>
                    <p className="text-lg text-gray-700">The trailer for this movie isn't available right now.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-[80%] h-6 bg-gray-300 rounded mb-2"></div>
          <div className="w-[60%] h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
      

      
    );
};

export default VideoCardLoading;
