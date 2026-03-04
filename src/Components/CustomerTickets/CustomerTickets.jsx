import React, { use, useState } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';
import TicketStatus from './TicketStatus';
import { toast } from 'react-toastify';
import ResolvedTickets from './resolvedTickets';
import { GiClothJar } from 'react-icons/gi';


const CustomerTickets = ({ fetchDatas, setProgress, setSolved }) => {

    const tickets = use(fetchDatas)
    const [status, setStatus] = useState([])
    const [resolved, setResolved] = useState([]);
    // const [progress, setProgress] = useState(0)
    const handleStats = (ticket, id) => {
        // console.log('Yo man I am here from', id);
        setStatus(stat => [...stat, ticket])
        toast('Ticket Added');
        setProgress(prev => prev + 1)
        // const remainTicketsList = tickets.filter(stat => stat.id !== id)
    }

    // console.log(progress)


    const handleMarkAsResolved = (id, stats) => {
        // console.log(id)
        const remainTickets = status.filter(stat => stat.id !== id);
        setStatus(remainTickets);
        setResolved(prev => [...prev, stats]);
        toast('Ticket Resolved')
        setProgress(prev => prev - 1)
        setSolved(prev => prev + 1)
        // setResolved(remainTickets)
    }

    // console.log(resolved);


    return (
        <div className="bg-gray-100 min-h-screen px-8 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Customer Tickets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* <div className="bg-white rounded-lg shadow-sm p-5 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-sm text-gray-800">
                                    Login Issues - Can't Access Account
                                </h3>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                    Open
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Customer is unable to log in to their account. They've tried resetting their password multiple times.
                            </p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <div className="flex gap-3">
                                    <span>#1001</span>
                                    <span className="text-red-500 font-medium">HIGH PRIORITY</span>
                                </div>
                                <div className="flex gap-3">
                                    <span>John Smith</span>
                                    <span>1/15/2024</span>
                                </div>
                            </div>
                        </div> */}

                        {
                            tickets.map(ticket => <CustomerTicket handleStats={handleStats} key={ticket.id} ticket={ticket}></CustomerTicket>)
                        }
                        {/* 
                        <div className="bg-white rounded-lg shadow-sm p-5 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-sm text-gray-800">
                                    Unable to Download Invoice
                                </h3>
                                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                                    In Progress
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Customer cannot download their January invoice from the billing div.
                            </p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <div className="flex gap-3">
                                    <span>#1003</span>
                                    <span className="text-yellow-500 font-medium">MEDIUM PRIORITY</span>
                                </div>
                                <div className="flex gap-3">
                                    <span>Michael Brown</span>
                                    <span>1/17/2024</span>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Task Status
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Select a ticket to add to Task Status
                    </p>

                    {/* {
                        status.map()
                    } */}

                    {
                        status.map(stat => <TicketStatus handleMarkAsResolved={handleMarkAsResolved} key={stat.id} stat={stat}></TicketStatus>)
                    }



                    {/* <h2 className='text-black'>{status.title}</h2> */}

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Resolved Task
                        </h3>
                        {/* <p className="text-sm text-gray-500">
                            No resolved tasks yet.
                            
                            resolved.something
                        </p> */}
                        {
                            resolved.map(res => <ResolvedTickets key={res.id} resolved={res}></ResolvedTickets>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerTickets;