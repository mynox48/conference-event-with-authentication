import React from "react";
import Error from "..//../assets/404.jpg";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center mt-10">
      <img className="w-[450px] h-[400px]" src={Error} alt="" />
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="btn bg-[#00a4ef] mt-5 text-white hover:bg-base-300 hover:text-black hover:border-0"
      >
        {" "}
        Back to Home
      </Link>
      <Helmet>
        <title>Error 404 | Page Not Found</title>
      </Helmet>
    </div>
  );
};

export default Error404;
