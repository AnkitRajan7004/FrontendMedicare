import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-100 rounded-lg px-4 sm:px-6 md:px-10 lg:px-20'>

      {/* --------- Header Left --------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 md:py-16'>
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-900 font-semibold leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-3 text-blue-800 text-sm font-light max-w-md'>
          <img className='w-24 sm:w-28 rounded-full border-2 border-white shadow-lg' src={assets.group_profiles} alt="Doctors group" />
          <div>
            <p>
              Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />
              schedule your appointment hassle-free.
            </p>
            <small className='text-xs italic mt-1'>Trusted by 1000+ patients nationwide</small>
          </div>
        </div>

        <a
          href="#speciality"
          onClick={e => {
            e.preventDefault();
            document.querySelector('#speciality').scrollIntoView({ behavior: 'smooth' });
          }}
          className='flex items-center gap-2 bg-white px-6 py-2.5 rounded-full text-gray-700 text-sm hover:scale-105 transition-transform duration-300 shadow hover:shadow-lg'
        >
          Book appointment
          <img className='w-3' src={assets.arrow_icon} alt="arrow icon" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className='md:w-1/2 flex items-end justify-center relative p-4'>
        <img
          className='w-full max-w-[700px] rounded-lg animate-float'
          src={assets.header_img}
          alt="Doctor illustration"
        />
      </div>

      {/* Floating Image Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  )
}

export default Header
