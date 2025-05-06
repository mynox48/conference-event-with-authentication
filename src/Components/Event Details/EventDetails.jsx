import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const EventDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [event, setEvent] = useState({});
    console.log(data, id, event)
   

    useEffect (() => {
        const eventDetails = data.find((singleEvent) => singleEvent.id == id)
        setEvent(eventDetails)
    }, [data, id])
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className="rounded-lg overflow-hidden bg-white">
      <img
        className="w-full h-[500px] rounded-2xl "
        src={event?.thumbnail}
      />
      <div className="mt-8 p-4">
        <h2 className="text-xl font-semibold text-gray-800">{event?.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{event?.category} | {event?.date}</p>
        <p className="text-sm font-bold text-gray-600 mb-4">{event?.location}</p>
        <p className="text-gray-700 text-justify mb-3">{event?.detailed_description}</p>
        <div className="flex justify-between items-center mt-6">
        <Link to='/' className="bg-[#00a4ef] text-white px-4 py-1 rounded hover:bg-base-300 hover:text-black hover:border-0">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default EventDetails;