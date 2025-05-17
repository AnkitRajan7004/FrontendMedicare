import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  // Custom class for active NavLink
  const activeClass =
    'text-primary border-b-2 border-primary font-semibold'

  return (
    <nav className='flex items-center justify-between py-4 mb-5 border-b border-gray-300 px-6 md:px-10 lg:px-20 bg-white shadow-md sticky top-0 z-50' role="navigation" aria-label="Main Navigation">
      <img
        onClick={() => {
          navigate('/')
          setShowMenu(false)
        }}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8 font-medium text-gray-700'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? activeClass : 'hover:text-primary transition-colors duration-200'
          }
        >
          HOME
        </NavLink>
        <NavLink
          to='/doctors'
          className={({ isActive }) =>
            isActive ? activeClass : 'hover:text-primary transition-colors duration-200'
          }
        >
          ALL DOCTORS
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? activeClass : 'hover:text-primary transition-colors duration-200'
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? activeClass : 'hover:text-primary transition-colors duration-200'
          }
        >
          CONTACT
        </NavLink>
      </ul>

      {/* Right Side: User profile or login button */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='relative group'>
            <button
              aria-haspopup='true'
              aria-expanded='false'
              className='flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded'
            >
              <img
                className='w-8 h-8 rounded-full object-cover'
                src={assets.profile_pic}
                alt='User profile'
              />
              <img
                className='w-3'
                src={assets.dropdown_icon}
                alt='Dropdown arrow'
              />
            </button>
            {/* Dropdown Menu */}
            <div
              className='hidden group-hover:flex flex-col absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-3 text-gray-700 font-medium'
              role='menu'
              aria-label='User menu'
            >
              <button
                onClick={() => {
                  navigate('/my-profile')
                  setShowMenu(false)
                }}
                className='px-4 py-2 hover:bg-gray-100 text-left'
                role='menuitem'
              >
                My Profile
              </button>
              <button
                onClick={() => {
                  navigate('/my-appointments')
                  setShowMenu(false)
                }}
                className='px-4 py-2 hover:bg-gray-100 text-left'
                role='menuitem'
              >
                My Appointments
              </button>
              <button
                onClick={() => {
                  setToken(false)
                  navigate('/')
                  setShowMenu(false)
                }}
                className='px-4 py-2 hover:bg-gray-100 text-left'
                role='menuitem'
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate('/login')
              setShowMenu(false)
            }}
            className='hidden md:block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300'
          >
            Create Account
          </button>
        )}

        {/* Mobile menu button */}
        <button
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
          onClick={() => setShowMenu((prev) => !prev)}
          className='md:hidden focus:outline-none focus:ring-2 focus:ring-primary rounded'
        >
          <img
            src={showMenu ? assets.cross_icon : assets.menu_icon}
            alt='Menu icon'
            className='w-6 h-6'
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${showMenu ? 'translate-x-0' : 'translate-x-full'}
        `}
        role='menu'
        aria-label='Mobile menu'
      >
        <div className='flex items-center justify-between px-6 py-6 border-b border-gray-200'>
          <img
            src={assets.logo}
            alt='Logo'
            className='w-36 cursor-pointer'
            onClick={() => {
              navigate('/')
              setShowMenu(false)
            }}
          />
          <button
            aria-label='Close menu'
            onClick={() => setShowMenu(false)}
            className='focus:outline-none focus:ring-2 focus:ring-primary rounded'
          >
            <img src={assets.cross_icon} alt='Close menu icon' className='w-7 h-7' />
          </button>
        </div>

        <ul className='flex flex-col mt-6 gap-4 px-6 text-lg font-semibold text-gray-700'>
          <NavLink
            to='/'
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary transition-colors duration-200'
            }
          >
            HOME
          </NavLink>
          <NavLink
            to='/doctors'
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary transition-colors duration-200'
            }
          >
            ALL DOCTORS
          </NavLink>
          <NavLink
            to='/about'
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary transition-colors duration-200'
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to='/contact'
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-primary transition-colors duration-200'
            }
          >
            CONTACT
          </NavLink>
          {!token && (
            <button
              onClick={() => {
                navigate('/login')
                setShowMenu(false)
              }}
              className='mt-6 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300'
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
