import React from 'react';
import { useLoaderData } from 'react-router';
import SingleData from './SingleData';

const UpcomingEvent = () => {
    const events = useLoaderData();
    return (
        <div className='w-11/12 mx-auto mt-64'>
            <h1 className='text-4xl font-bold text-center text-[#00a4ef]'>Our Upcoming Events</h1>
            <p className='text-center my-5'>Join us at our upcoming conferences and summits where technology leaders, innovators, and <br /> professionals come together to share knowledge, exchange ideas, and shape the future.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
      {
            events.map(event => <SingleData key={event.id} event={event}></SingleData>)
        }
      </div>
        </div>
    );
};

export default UpcomingEvent;