import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className="flex bg-blue-100 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 animate-fadeIn">
      
      {/* ------- Left Side ------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-blue-900">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>

        {/* Trusted doctors count with icon */}
        <div className="flex items-center mt-4 space-x-2 text-blue-600 text-sm font-medium select-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.85 4.335c0 3.042-2.462 5.5-5.5 5.5s-5.5-2.458-5.5-5.5c0-1.624.716-3.1 1.83-4.125L12 14z" />
          </svg>
          <span>Trusted & Verified</span>
        </div>

        <button
          onClick={() => { navigate('/login'); scrollTo(0, 0) }}
          className="bg-white text-sm sm:text-base text-gray-700 px-8 py-3 rounded-full mt-6 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Create account
        </button>
      </div>

      {/* ------- Right Side ------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20 rounded-lg pointer-events-none"></div>
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="Doctor appointment illustration"
        />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  )
}

export default Banner
