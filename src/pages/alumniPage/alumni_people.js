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

    async function handleSave(e){
        e.preventDefault();
        try {
            console.log("saving alumni data ",alumni);
            const response = await axios.post("http://localhost:8000/alumni/update", alumni);
            console.log(response.data);
            setEditing(false);
        } catch (error) {
            console.error('Error updating alumni data:', error);
        }
    };

    return (
        <div className="container">
            <div>
                <div key={alumni.id} className="border p-4">
                {editing ? (
                    <form onSubmit={(e) => handleSave(e)} className='grid grid-cols-2'>
                        <div>Name : </div>
                        <input
                            type="text"
                            name="name"
                            value={alumni.name}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Company Name : </div>
                        <input
                            type="text"
                            name="company"
                            value={alumni.company}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Phone No : </div>
                        <input
                            type="text"
                            name="phone_no"
                            value={alumni.phone_no}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Role : </div>
                        <input
                            type="text"
                            name="role"
                            value={alumni.role}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Email : </div>
                        <input
                            type="text"
                            name="email"
                            value={alumni.email}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Avatar : </div>
                        <input
                            type="text"
                            name="avatar"
                            value={alumni.avatar}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Graduation Year :</div>
                        <input
                            type="text"
                            name="graduation_year"
                            value={alumni.graduation_year}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Address :</div>
                        <input
                            type="text"
                            name="address"
                            value={alumni.address}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Linkdin : </div>
                        <input
                            type="text"
                            name="linkdin"
                            value={alumni.linkdin}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <div>Branch :</div>
                        <input
                            type="text"
                            name="branch"
                            value={alumni.branch}
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
                    <div className="flex flex-col">
                        <div className='grid grid-cols-2 center'>
                            <div>Avatar :</div>
                            <img
                                src={`${alumni.avatar}`}
                                alt="Alumni Avatar"
                                className="rounded-full w-24 h-24 object-cover"
                                />

                            <div>Name :</div>
                            <div>{alumni.name}</div>
                            <div>Branch :</div>
                            <div>{alumni.branch}</div>
                            <div>Company :</div>
                            <div>{alumni.company}</div>
                            <div>Phone No :</div>
                            <div>{alumni.phone_no}</div>
                            <div>Email :</div>
                            <div>{alumni.email}</div>
                            <div>Role :</div>
                            <div>{alumni.role}</div>
                            <div>Graduation Year :</div>
                            <div>{alumni.graduation_year}</div>
                            <div>Address :</div>
                            <div>{alumni.address}</div>
                            <div>Linkdin :</div>
                            <div>{alumni.linkdin}</div>
                        </div>
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