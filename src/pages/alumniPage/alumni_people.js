import React, { useState } from 'react';
import axios from 'axios';

function AlumniPeople({alumniData}) {
    const [alumni, setAlumni] = useState(alumniData);
    const [editing, setEditing] = useState(false);

    const handleEdit = (id) => {
        setEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlumni((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async (id) => {
        try {
            console.log(alumni);
            // const response = await axios.post(`http://localhost:8000/alumni/update/${id}`, alumni);
            // console.log(response.data);
            setEditing(false);
        } catch (error) {
            console.error('Error updating alumni data:', error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Alumni Page</h1>
            <div className="grid grid-rows-10 gap-4">
                <div key={alumni.id} className="border p-4">
                {editing ? (
                    <form onSubmit={(e) => handleSave(e)}>
                        <input
                            type="text"
                            name="name"
                            value={alumni.name}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="company"
                            value={alumni.company}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="phone_no"
                            value={alumni.phone_no}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="role"
                            value={alumni.role}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="email"
                            value={alumni.email}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="avatar"
                            value={alumni.avatar}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="graduation_year"
                            value={alumni.graduation_year}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="name"
                            value={alumni.name}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="address"
                            value={alumni.address}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="linkdin"
                            value={alumni.linkdin}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <input
                            type="text"
                            name="batch"
                            value={alumni.batch}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </form>
                ) : (
                    <div>
                        <p>Name: {alumni.name}</p>
                        <p>Batch: {alumni.company}</p>
                        <p>Phone No: {alumni.phone_no}</p>
                        <p>Email: {alumni.email}</p>
                        <p>Avatar: {alumni.avatar}</p>
                        <p>role: {alumni.role}</p>
                        <p>Graduation Year: {alumni.graduation_year}</p>
                        <p>Address: {alumni.address}</p>
                        <p>Linkdin: {alumni.linkdin}</p>
                        <button
                            onClick={() => handleEdit(alumni.id)}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                            Edit
                        </button>
                    </div>
                )}
                    </div>
            </div>
        </div>
    );
};

export default AlumniPeople;