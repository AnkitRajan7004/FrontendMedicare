import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 pb-32 px-4 sm:px-10 md:px-20 lg:px-32">
      {/* Heading */}
      <div className="text-center text-3xl sm:text-4xl font-bold text-blue-900 mb-10">
        CONTACT <span className="text-blue-600">US</span>
      </div>

      {/* Contact Card Section */}
      <div className="w-full bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-blue-900">

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1">OUR OFFICE</h3>
            <p className="text-blue-700">
              123 MG Road, Bengaluru, Karnataka, India - 560001
            </p>
          </div>

          <div>
            <p className="text-blue-700">
              Tel: <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a><br />
              Email: <a href="mailto:support@medicareindia.in" className="text-blue-600 hover:underline">support@medicareindia.in</a>
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1">CAREERS AT MEDICARE</h3>
            <p className="text-blue-700 mb-4">Learn more about our teams and job openings.</p>
            <button
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500"
              onClick={() => window.open('https://www.medicareindia.in/careers', '_blank')}
            >
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
