import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Helper to format date nicely
const formatDateTime = (datetimeStr) => {
  const options = { 
    day: 'numeric', month: 'long', year: 'numeric', 
    hour: '2-digit', minute: '2-digit', hour12: true 
  };
  const date = new Date(datetimeStr);
  return date.toLocaleString(undefined, options);
};

// Status badge component
const StatusBadge = ({ status }) => {
  const statusColors = {
    Confirmed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Cancelled: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[status] || 'bg-gray-100 text-gray-600'}`}
    >
      {status}
    </span>
  );
};

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <section className="max-w-4xl mx-auto p-4">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-xl">My appointments</p>
      <div className="mt-6 space-y-4">
        {doctors.slice(0, 2).map((item) => (
          <article
            key={item.id ?? item.name}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <div>
              <img
                className="w-32 h-32 object-cover rounded-md bg-indigo-50"
                src={item.image}
                alt={`Dr. ${item.name}`}
              />
            </div>

            <div className="flex-1 text-sm text-zinc-600">
              <div className="flex justify-between items-center mb-1">
                <p className="text-neutral-800 font-semibold text-lg">{item.name}</p>
                <StatusBadge status={item.appointmentStatus} />
              </div>
              <p className="italic text-xs mb-1">{item.speciality}</p>

              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>

              <p className="text-xs mt-2">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{' '}
                {item.appointmentDate ? formatDateTime(item.appointmentDate) : 'Not Scheduled'}
              </p>
            </div>

            <div className="flex flex-col gap-3 justify-end">
              <button
                disabled={item.isPaid}
                className={`text-sm text-center sm:min-w-48 py-2 border rounded 
                  transition-all duration-300 
                  ${item.isPaid ? 'bg-green-100 text-green-700 cursor-not-allowed' : 'text-stone-500 hover:bg-primary hover:text-white'}`}
              >
                {item.isPaid ? 'Paid' : 'Pay Online'}
              </button>

              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel appointment
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyAppointments;
