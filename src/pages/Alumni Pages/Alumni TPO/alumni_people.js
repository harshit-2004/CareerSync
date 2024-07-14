import React, { useState } from 'react';
import axios from 'axios';

function AlumniPeople({ alumniData }) {
  const [alumni, setAlumni] = useState(alumniData);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumni((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSave(e) {
    e.preventDefault();
    try {
      console.log("saving alumni data ", alumni);
      const response = await axios.post("http://localhost:8000/alumni/update", alumni);
      console.log(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating alumni data:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div key={alumni.id} className="border rounded-lg shadow-lg p-6">
        {editing ? (
          <form onSubmit={handleSave} className="grid grid-cols-2 gap-4">
            <label className="col-span-2 font-semibold text-lg">Edit Alumni Details</label>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={alumni.name}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Company Name:</label>
            <input
              type="text"
              name="company"
              value={alumni.company}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Phone No:</label>
            <input
              type="text"
              name="phone_no"
              value={alumni.phone_no}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={alumni.role}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={alumni.email}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Avatar:</label>
            <input
              type="text"
              name="avatar"
              value={alumni.avatar}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Graduation Year:</label>
            <input
              type="date"
              name="graduation_year"
              value={alumni.graduation_year}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={alumni.address}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>LinkedIn:</label>
            <input
              type="text"
              name="linkdin"
              value={alumni.linkdin}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <label>Branch:</label>
            <input
              type="text"
              name="branch"
              value={alumni.branch}
              onChange={handleChange}
              className="border border-gray-400 rounded px-2 py-1 mb-2"
            />
            <button
              type="submit"
              className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={alumni.avatar}
              alt="Alumni Avatar"
              className="rounded-full w-24 h-24 object-cover mb-4"
            />
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="font-semibold">Name:</div>
              <div>{alumni.name}</div>
              <div className="font-semibold">Branch:</div>
              <div>{alumni.branch}</div>
              <div className="font-semibold">Company:</div>
              <div>{alumni.company}</div>
              <div className="font-semibold">Phone No:</div>
              <div>{alumni.phone_no}</div>
              <div className="font-semibold">Email:</div>
              <div>{alumni.email}</div>
              <div className="font-semibold">Role:</div>
              <div>{alumni.role}</div>
              <div className="font-semibold">Graduation Year:</div>
              <div>{new Date(alumni.graduation_year).getFullYear()}</div>
              <div className="font-semibold">Address:</div>
              <div>{alumni.address}</div>
              <div className="font-semibold">LinkedIn:</div>
              <div>{alumni.linkdin}</div>
            </div>
            <button
              onClick={handleEdit}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniPeople;
