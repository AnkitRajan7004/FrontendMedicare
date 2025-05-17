import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-semibold'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm text-gray-600'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className='w-full grid grid-cols-auto gap-6 pt-6 px-4 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            window.scrollTo(0, 0);
                        }}
                        key={index}
                        className='cursor-pointer border border-blue-200 bg-white rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300'
                    >
                        {/* Image container with fixed aspect ratio */}
                        <div className="w-full aspect-w-4 aspect-h-3 bg-blue-50">
                            <img
                                className='w-full h-full object-cover'
                                src={item.image}
                                alt={item.name}
                            />
                        </div>

                        <div className='p-4 space-y-1'>
                            <div className='flex items-center gap-2 text-sm text-green-600 font-medium'>
                                <span className='w-2 h-2 rounded-full bg-green-500'></span>
                                <span>Available</span>
                            </div>
                            <p className='text-lg font-semibold text-gray-900'>{item.name}</p>
                            <p className='text-sm text-gray-500'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }}
                className='bg-primary text-white px-10 py-3 rounded-full mt-10 hover:bg-indigo-600 transition'
            >
                See More Doctors
            </button>
        </div>
    )
}

export default TopDoctors
