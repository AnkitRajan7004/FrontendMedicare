import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-20 lg:px-32 py-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">

          {/* Logo and About */}
          <div>
            <img className="mb-5 w-40" src={assets.logo} alt="Medicare Logo" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6 break-words">
              At Medicare, we are dedicated to connecting patients with trusted 
              healthcare professionals seamlessly. Our platform ensures easy 
              appointment booking, reliable support, and trusted medical advice, 
              making healthcare accessible to everyone.
            </p>
          </div>

          {/* Company Links */}
          <nav aria-label="Company links">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-primary transition-colors">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Information */}
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
          <hr className="my-4" />
          <p className="py-5 text-sm text-center text-gray-500">
            &copy; 2024 Medicare.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
