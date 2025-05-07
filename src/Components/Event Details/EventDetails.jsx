import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  console.log(data, id, event);

  useEffect(() => {
    const eventDetails = data.find((singleEvent) => singleEvent.id == id);
    setEvent(eventDetails);
  }, [data, id]);

  const handleReserveButton = (e) => {
    e.preventDefault();

    const name = e.target.email.value;
    const password = e.target.password.value;

    if (name == "" || password == "") {
      alert("Please Fill in the blank");
    } else {
      Swal.fire({
        title: "Reserved successful! 🎉",
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="rounded-lg overflow-hidden bg-white">
        <img
          className="w-full h-[250px] lg:h-[500px] rounded-2xl "
          src={event?.thumbnail}
        />
        <div className="mt-8 p-4">
          <h2 className="text-xl font-semibold text-gray-800">{event?.name}</h2>
          <p className="text-sm text-gray-600 mb-4">
            {event?.category} | {event?.date}
          </p>
          <p className="text-sm font-bold text-gray-600 mb-4">
            {event?.location}
          </p>
          <p className="text-gray-700 text-justify mb-3">
            {event?.detailed_description}
          </p>
          <div className="flex justify-between items-center mt-6">
            <Link
              to="/"
              className="bg-[#00a4ef] text-white px-4 py-1 rounded hover:bg-base-300 hover:text-black hover:border-0"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-3">
        <h2 className="text-3xl font-bold text-center text-[#00a4ef]">
          Reserve Your Seat
        </h2>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleReserveButton} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button
                type="submit"
                className="btn text-white bg-[#00a4ef] mt-4 hover:bg-base-300 hover:text-black hover:border-0"
              >
                Reserve seat
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
