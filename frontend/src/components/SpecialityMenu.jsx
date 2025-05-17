import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-semibold'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-600'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <div className='flex sm:justify-center gap-6 pt-6 w-full overflow-x-auto scrollbar-hide px-4'>
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            title={item.speciality}
            className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-300 group'
          >
            <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition'>
              <img className='w-10 sm:w-14' src={item.image} alt={item.speciality} />
            </div>
            <p className='mt-2 text-center text-gray-700 group-hover:text-primary font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
