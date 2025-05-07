import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { auth } from "../../Firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {createUser, setUser} = use (AuthContext)

  const navigate = useNavigate()
  //  Email with password Auth
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photourl = e.target.photourl.value;
    console.log(name, email, password, photourl);

    createUser ( email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        setUser(user);
         Swal.fire({
                  title: "Sign Up successful! 🎉",
                  icon: "success",
                  draggable: true
                });
        navigate('/')
      })
      .catch((error) => {

        if (name == '' || email == '' || password =='' || photourl == '') {
          toast.error("Please fill in the blank");
        }
        else if (!/[A-Z]/.test(password)) {
          toast.error("Must type at least one UpperCase Letter");
          return;
        } else if (!/[a-z]/.test(password)) {
          toast.error("Must type at least one LowerCase Letter");
          return;
        } else if (!/[0-9]/.test(password)) {
          toast.error("Must type at least one Number");
          return;
        } 
        
        else {
          toast.error(error.message);
        }
      });
  };

  // Sign in with google
  const provider = new GoogleAuthProvider();
  const handleSignUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Sign Up successful! 🎉",
          icon: "success",
          draggable: true
        });
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto flex justify-center items-center ">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Signup for new account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Already have an account?
          <Link
            to="/login"
            href="#"
            rel="noopener noreferrer"
            className="text-blue-600 underline focus:underline hover:underline"
          >
            Sign in here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleSignUpWithGoogle}
            aria-label="Login with Google"
            type="button"
            className="cursor-pointer flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Andrew John"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photourl" className="block text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photourl"
                id="photourl"
                placeholder="https://photourl.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-sm bg-base-100 border-0 absolute top-1 right-2"
                >
                  {" "}
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#00a4ef] text-white hover:bg-base-300 hover:text-black hover:border-0 cursor-pointer w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign in
          </button>
        </form>
      </div>
      <ToastContainer />
      <Helmet>
        <title>Sign Up | Conference Event </title>
      </Helmet>
    </div>
  );
};

export default Signup;
