import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="md:mx-10 bg-gray-50 text-gray-700">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Prescripto Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
          At Mediecare, we are dedicated to connecting patients with trusted 
          healthcare professionals seamlessly. Our platform ensures easy 
          appointment booking, reliable support, and trusted medical advice, 
          making healthcare accessible to everyone.
          </p>
        </div>

        <nav aria-label="Company links">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="/delivery" className="hover:text-primary transition-colors">
                Delivery
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy policy
              </a>
            </li>
          </ul>
        </nav>

        <address className="not-italic" aria-label="Contact information">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="tel:+917004189931" className="hover:text-primary transition-colors" aria-label="Phone number">
                +91 7004189931
              </a>
            </li>
            <li>
              <a href="mailto:rajanankit47@gmail.com" className="hover:text-primary transition-colors" aria-label="Email address">
                rajanankit47@gmail.com
              </a>
            </li>
          </ul>
        </address>

      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          &copy; 2024 Medicare.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
