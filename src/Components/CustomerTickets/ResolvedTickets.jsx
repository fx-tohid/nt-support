import React from 'react';

const ResolvedTickets = ({ resolved }) => {
    const {title} = resolved;
    // console.log(resolved);
    return (
        <div className='bg-[#E0E7FF]  rounded-sm p-4 my-3'>
            <h2 className='text-[#001931] text-lg font-medium'>{title}</h2>
        </div>
    );
};

export default ResolvedTickets;