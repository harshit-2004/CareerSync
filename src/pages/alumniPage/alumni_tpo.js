import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlumniPeople from './alumni_people';

const Alumni = () => {
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
                // setData(pk);
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
        <div className="flex flex-col">
            <div class="flex justify-center items-center p-10">
                <div class="p-4 bg-gray-200 rounded-md shadow-md">
                    Alumni's
                </div>
            </div>

            <div className="grid grid-cols-2 p-10">
                {data && data.map((item, index) => {
                    return (<div key={index} className="">
                        <AlumniPeople alumniData={item} />
                    </div>)
                })}

            </div>
            <div class="flex justify-center items-center">
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
