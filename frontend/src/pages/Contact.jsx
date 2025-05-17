import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-16 bg-gradient-to-b from-pureWhite via-saffron/20 to-indigo-50 min-h-screen">

      {/* Heading */}
      <div className='text-center text-3xl md:text-4xl font-bold text-saffron tracking-wide mb-12'>
        CONTACT <span className='text-indianGreen'>US</span>
      </div>

      {/* Main Flex Container */}
      <div className='flex flex-col md:flex-row items-center gap-12'>

        {/* Left - Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={assets.contact_image}
            alt="Contact"
            className='w-full max-w-[360px] rounded-xl shadow-md border-4 border-saffron hover:scale-105 transition-transform duration-500 ease-in-out'
          />
        </div>

        {/* Right - Contact Info */}
        <div className='w-full md:w-1/2 flex flex-col gap-6 text-gray-700'>

          <div>
            <h3 className='text-xl font-semibold text-indianGreen mb-1'>OUR OFFICE</h3>
            <p className='text-gray-600'>
              123 MG Road, Bengaluru, Karnataka, India - 560001
            </p>
          </div>

          <div>
            <p className='text-gray-600'>
              Tel: <a href="tel:+919876543210" className="text-saffron hover:underline">+91 98765 43210</a><br />
              Email: <a href="mailto:support@medicareindia.in" className="text-saffron hover:underline">support@medicareindia.in</a>
            </p>
          </div>

          <div className='pt-4'>
            <h3 className='text-xl font-semibold text-indianGreen mb-1'>CAREERS AT MEDICARE</h3>
            <p className='text-gray-600 mb-4'>Learn more about our teams and job openings.</p>
            <button
              className='border border-saffron text-saffron px-8 py-3 rounded-lg hover:bg-saffron hover:text-white transition-all duration-500'
              onClick={() => window.open('https://www.medicareindia.in/careers', '_blank')}
            >
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
