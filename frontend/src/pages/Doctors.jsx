import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const itemsPerPage = 6;

  useEffect(() => {
    let filtered = speciality && speciality !== 'All Doctors'
      ? doctors.filter(doc => doc.speciality === speciality)
      : doctors;

    if (searchQuery.trim()) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilterDoc(filtered);
    setCurrentPage(1);
  }, [doctors, speciality, searchQuery]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentDocs = filterDoc.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filterDoc.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add "All Doctors" to specialties list
  const specialties = [
    'All Doctors',
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Find Your Specialist Doctor</h2>
      <p className="text-gray-600 mb-6">Browse through the specialist doctors and book your appointment easily.</p>

      {/* Top controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Filter toggle for mobile */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`sm:hidden py-2 px-4 border rounded text-sm font-medium transition-colors ${
            showFilter ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-indigo-600'
          }`}
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search doctors by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Filters */}
      <div
        className={`mb-8 ${
          showFilter ? 'block' : 'hidden'
        } sm:block bg-white border border-gray-200 rounded p-4 shadow-sm`}
      >
        <h3 className="font-semibold text-gray-700 mb-3">Filter by Specialty</h3>
        <div className="flex flex-wrap gap-3">
          {specialties.map((spec) => {
            const isActive = speciality === spec || (!speciality && spec === 'All Doctors');
            return (
              <button
                key={spec}
                onClick={() => {
                  if (spec === 'All Doctors') {
                    navigate('/doctors');
                  } else {
                    navigate(`/doctors/${spec}`);
                  }
                }}
                className={`px-4 py-2 rounded-full border transition-colors font-medium text-sm
                  ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50'
                  }`}
              >
                {spec}
              </button>
            );
          })}
        </div>
      </div>

      {/* Doctor cards */}
      {currentDocs.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDocs.map((doc) => (
            <div
              key={doc._id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
              onClick={() => {
                navigate(`/appointment/${doc._id}`);
                window.scrollTo(0, 0);
              }}
            >
              {/* Fix image display */}
              <div className="w-full h-48 bg-indigo-50 flex items-center justify-center overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      doc.available ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                  <p className={`text-sm font-semibold ${doc.available ? 'text-green-600' : 'text-red-600'}`}>
                    {doc.available ? 'Available' : 'Not Available'}
                  </p>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{doc.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{doc.speciality}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/appointment/${doc._id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors text-center font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded border transition-colors font-medium ${
                currentPage === i + 1
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;
