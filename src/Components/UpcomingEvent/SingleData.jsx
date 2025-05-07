import React from "react";
import { Link } from "react-router";

const SingleData = ({ event }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={event.thumbnail}
        alt={event.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {event.category} | {event.date}
        </p>
        <p className="text-sm font-bold text-gray-600 mb-4">{event.location}</p>
        <p className="text-gray-700 text-sm mb-3">{event.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-[#00a4ef] font-bold">
            Entry Fee: ৳{event.entry_fee}
          </span>
          <Link
            to={`/event-details/${event.id}`}
            className="bg-[#00a4ef] text-white px-4 py-1 rounded hover:bg-base-300 hover:text-black hover:border-0"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
