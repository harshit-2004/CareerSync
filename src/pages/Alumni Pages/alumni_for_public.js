import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlumniPublic = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center p-10">
            <div className="p-4 bg-gray-200 rounded-md shadow-md mb-6">
                Alumni's
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
                {data && data.map((alumni, index) => (
                    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center" key={index}>
                        <img 
                            src={alumni.avatar} 
                            alt={`${alumni.name}'s avatar`} 
                            className="w-16 h-16 rounded-full mb-2"
                        />
                        <div className="text-center mb-2">
                            <div className="text-lg font-bold mb-1">{alumni.name}</div>
                            <div className="text-gray-600 text-sm">{alumni.role}</div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-1 gap-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Branch:</span>
                                    <span>{alumni.branch}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Company:</span>
                                    <span>{alumni.company}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Graduated Year:</span>
                                    <span>{new Date(alumni.graduation_year).getFullYear()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Address:</span>
                                    <span>{alumni.address}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">LinkedIn:</span>
                                    <span>{alumni.linkdin}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mt-6">
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

export default AlumniPublic;