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

            <div className="grid grid-cols-2 p-4">
                {data && data.map((alumni, index) => {
                    return (
                    <div className="flex flex-col border" key={index} >
                    <div className='grid grid-cols-2 center p-5'>
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
                        <div>Avatar :</div>
                        <div>{alumni.avatar}</div>
                        <div>Role :</div>
                        <div>{alumni.role}</div>
                        <div>Graduation Year :</div>
                        <div>{alumni.graduation_year}</div>
                        <div>Address :</div>
                        <div>{alumni.address}</div>
                        <div>Linkdin :</div>
                        <div>{alumni.linkdin}</div>
                    </div>
                </div>
                )
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

export default AlumniPublic;
