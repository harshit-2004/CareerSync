import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlumniPeople from './alumni_people';

const Alumni = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newAlumni, setNewAlumni] = useState({
        name: '',
        branch: '',
        company: '',
        phone_no: '',
        email: '',
        avatar: '',
        role: '',
        graduation_year: '',
        address: '',
        linkdin: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/alumni/alumni_detail/${currentPage}`);
                setData(response.data.details);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAlumni((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddAlumni = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/alumni/add', newAlumni);
            setData([...data, response.data]);
            setShowAddForm(false);
        } catch (error) {
            console.error('Error adding alumni:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center p-10">
                <div className="p-4 bg-gray-200 rounded-md shadow-md">
                    Alumni's
                </div>
            </div>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                    {showAddForm ? 'Cancel' : 'Add New Alumni'}
                </button>
            </div>

            {showAddForm && (
                <form onSubmit={handleAddAlumni} className="mb-6 p-4 border rounded-md shadow-md">
                    <div className="grid grid-cols-2 gap-4">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={newAlumni.name}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Branch:</label>
                        <input
                            type="text"
                            name="branch"
                            value={newAlumni.branch}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Company:</label>
                        <input
                            type="text"
                            name="company"
                            value={newAlumni.company}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Phone No:</label>
                        <input
                            type="text"
                            name="phone_no"
                            value={newAlumni.phone_no}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={newAlumni.email}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Avatar's Link:</label>
                        <input
                            type="text"
                            name="avatar"
                            value={newAlumni.avatar}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Role:</label>
                        <input
                            type="text"
                            name="role"
                            value={newAlumni.role}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Graduation Year:</label>
                        <input
                            type="date"
                            name="graduation_year"
                            value={newAlumni.graduation_year}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={newAlumni.address}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <label>LinkedIn:</label>
                        <input
                            type="text"
                            name="linkdin"
                            value={newAlumni.linkdin}
                            onChange={handleChange}
                            className="border border-gray-400 rounded px-2 py-1 mb-2"
                        />
                        <button
                            type="submit"
                            className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                            Add Alumni
                        </button>
                    </div>
                </form>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {data && data.map((item, index) => (
                    <div key={index} className="">
                        <AlumniPeople alumniData={item} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}>
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Alumni;
