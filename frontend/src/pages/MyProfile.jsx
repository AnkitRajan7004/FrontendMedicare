import React, { useState, useRef } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: "Ankit Rajan",
    image: assets.profile_pic,
    email: 'rajanankit47@gmail.com',
    phone: '7004189931',
    address: {
      line1: 'Iter R3, Dist_Khordh',
      line2: 'Jagamara, Khandagiri, Bhubaneswar',
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  // Simple validation
  const validate = () => {
    let errs = {};
    if (!userData.name.trim()) errs.name = 'Name is required';
    if (!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = 'Invalid email format';
    if (!userData.phone.match(/^\d{10}$/))
      errs.phone = 'Phone must be 10 digits';
    return errs;
  };

  const handleSave = () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setIsEdit(false);
      alert('Profile updated successfully!');
    }
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData(prev => ({ ...prev, image: e.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 text-sm">
      <div className="flex flex-col items-center">
        <img
          className="w-36 h-36 rounded-full object-cover border-4 border-primary"
          src={userData.image}
          alt="Profile"
        />
        {isEdit && (
          <button
            onClick={() => fileInputRef.current.click()}
            className="mt-2 text-primary hover:underline text-sm"
          >
            Change Picture
          </button>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={onImageChange}
        />
      </div>

      {isEdit ? (
        <>
          <input
            className={`bg-gray-50 text-3xl font-medium max-w-full mt-4 border-b-2 focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-primary'
            }`}
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </>
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <section>
        <p className="text-neutral-500 underline mt-3 flex items-center gap-2 font-semibold">
          <span>📞</span> CONTACT INFORMATION
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          {isEdit ? (
            <div className="flex flex-col">
              <input
                className={`bg-gray-50 max-w-full px-2 py-1 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded`}
                type="email"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                value={userData.email}
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          ) : (
            <p className="text-blue-500">{userData.email}</p>
          )}

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <div className="flex flex-col">
              <input
                className={`bg-gray-50 max-w-full px-2 py-1 border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } rounded`}
                type="tel"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={userData.phone}
                placeholder="10-digit phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-1">
              <input
                className="bg-gray-50 px-2 py-1 border border-gray-300 rounded"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                placeholder="Address Line 1"
              />
              <input
                className="bg-gray-50 px-2 py-1 border border-gray-300 rounded"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                placeholder="Address Line 2"
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </section>

      <section>
        <p className="text-neutral-500 underline mt-6 flex items-center gap-2 font-semibold">
          <span>👤</span> BASIC INFORMATION
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700 items-center">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-50 px-2 py-1 border border-gray-300 rounded"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-50 px-2 py-1 border border-gray-300 rounded"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        {isEdit ? (
          <button
            onClick={handleSave}
            disabled={Object.keys(validate()).length > 0}
            className={`border border-primary px-8 py-2 rounded-full transition-all duration-300 ${
              Object.keys(validate()).length > 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'hover:bg-primary hover:text-white text-primary'
            }`}
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
