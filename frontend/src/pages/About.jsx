import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 md:px-20 lg:px-32 py-12 bg-gradient-to-b from-pureWhite via-saffron/20 to-indigo-50 min-h-screen">

      {/* Title */}
      <div className="text-center text-4xl pt-10 font-extrabold tracking-wide text-saffron animate-slideInLeft">
        ABOUT <span className="text-indianGreen">MEDICARE INDIA</span>
      </div>

      {/* About Section */}
      <div className="my-14 flex flex-col md:flex-row gap-14 items-center animate-fadeIn">
        <img
          className="w-full md:max-w-[420px] rounded-xl shadow-xl border-4 border-saffron hover:scale-105 transition-transform duration-500 ease-in-out"
          src={assets.about_image}
          alt="Medicare India Healthcare"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-700 leading-relaxed">
          <p>
            Welcome to <b>Medicare India</b>, your reliable healthcare partner dedicated to simplifying your medical journey across India. From booking appointments with trusted doctors to managing your health records digitally, we bring healthcare to your fingertips.
          </p>
          <p>
            At Medicare India, we are committed to integrating cutting-edge technology with personalized care to improve the healthcare experience for millions of Indians. Our platform supports multiple Indian languages and connects you with verified healthcare professionals across urban and rural regions.
          </p>
          <b className="text-gray-900 text-xl">Our Vision</b>
          <p>
            We envision a healthier India where quality healthcare is accessible to everyone, anytime, anywhere. Medicare India bridges the gap between patients and providers to empower you with seamless, efficient, and affordable healthcare services.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-3xl my-8 font-bold text-indianGreen animate-slideInLeft">
        WHY <span className="text-saffron">CHOOSE US</span>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mb-24">
        {[
          {
            title: "EFFICIENCY",
            desc: "Easy appointment scheduling with top doctors across India, tailored to your busy life."
          },
          {
            title: "CONVENIENCE",
            desc: "Access trusted healthcare professionals in your city or town with multilingual support."
          },
          {
            title: "PERSONALIZATION",
            desc: "Get health reminders, medication alerts, and personalized care plans designed for Indian healthcare needs."
          }
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="border-2 border-indianGreen rounded-xl px-12 py-14 flex flex-col gap-6 text-gray-700 hover:bg-indianGreen hover:text-pureWhite cursor-pointer shadow-lg transition duration-400 ease-in-out"
          >
            <b className="text-xl">{title}</b>
            <p className="leading-snug">{desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-3xl font-extrabold text-center text-saffron mb-8 animate-fadeIn">
        CONTACT <span className="text-indianGreen">US</span>
      </div>
      <div className="max-w-md mx-auto text-gray-800 text-lg space-y-4 p-8 rounded-xl shadow-lg bg-pureWhite border-2 border-saffron">
        <p><b>Address:</b> 45 Medical Plaza, Janpath, Bhubaneswar, Odisha - 751001, India</p>
        <p><b>Phone:</b> +91 98765 43210</p>
        <p><b>Email:</b> support@medicareindia.in</p>
        <p>We are available Monday to Saturday, 9 AM to 7 PM IST.</p>
        <button
          className="mt-6 w-full py-3 bg-saffron hover:bg-[#e6851f] text-pureWhite font-semibold rounded-lg shadow-md transition duration-300"
          onClick={() => alert('Thank you for contacting Medicare India!')}
        >
          Contact Now
        </button>
      </div>
    </div>
  )
}

export default About
