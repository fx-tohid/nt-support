import React from 'react';

const TicketStatus = ({ stat }) => {
    const {title} = stat;
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 my-3">
            <h2 className="text-lg font-medium text-gray-800 mb-4">{title}</h2>
            <button className='btn w-full border-none py-4 px-3 bg-[#02A53B] text-white'>Complete</button>
        </div>
    );
};

export default TicketStatus;