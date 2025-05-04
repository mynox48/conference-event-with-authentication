import React from 'react';
import { useLoaderData } from 'react-router';
import SingleData from './SingleData';

const UpcomingEvent = () => {
    const events = useLoaderData();
    console.log(events)
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center text-[#00a4ef]'>Our Upcoming Events</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-20'>
      {
            events.map(event => <SingleData event={event}></SingleData>)
        }
      </div>
        </div>
    );
};

export default UpcomingEvent;