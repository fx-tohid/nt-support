import React from 'react';
import { LuCalendar } from "react-icons/lu";


const CustomerTicket = ({ ticket, handleStats }) => {
    const { title, status, description, priority, id, customer, createdAt } = ticket;
    return (
        <div onClick={() => handleStats(ticket, id)} className="bg-white rounded-lg shadow-sm p-5 space-y-4">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-sm text-gray-800">
                    {title}
                </h3>
                <span className={`px-3 py-1 text-xs rounded-full ${status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-[#F8F3B9] text-[#9C7700]'} font-medium`}>
                    {status}
                </span>
            </div>
            <p className="text-sm text-gray-500">
                {description}
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
                <div className="flex gap-3">
                    <span>#{id}</span>
                    <span className={` font-medium ${priority === "Critical" ? 'text-red-700' : priority === 'High' ? 'text-orange-500' : priority === 'Medium' ? 'text-amber-400' : 'text-[#02A53B]'}`}>{priority} Priority</span>
                    {/* FEBB0C */}
                </div>
                <div className="flex gap-3">
                    <span>{customer}</span>
                    <span className='flex items-center gap-1'><LuCalendar size={17} /> {createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;