import React, { use } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import './Navbar.css'
import  { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const links = <>
    <li> <NavLink className='mr-6' to='/'>Home</NavLink> </li>
    <li> <NavLink className='mr-6' to='/about'>About</NavLink> </li>
    <li> <NavLink className='mr-6' to='/faq'>Faq</NavLink> </li>
    <li> <NavLink  to='/contact-us'>Contact Us</NavLink> </li>
    </>

    const {user, logOut} = use(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then (() => {
          toast.success("You Logged Out successful! 🎉");
      }).catch ((error) => {
        toast.error(error);
      })
    }


    return (
        <div className="navbar bg-base-100  w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
       {links}

      </ul>
    </div>
    <Link to='/'><h2 className='text xl lg:text-2xl font-bold'><span className='text-[#00a4ef]'>C</span>onference <span className='text-[#00a4ef]'>E</span>vent</h2></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
        {links}

      {
        user?<li> <NavLink className='mr-6' to='/teams'>Teams</NavLink> </li>:<Navigate to='/login'></Navigate>
      }

    </ul>
  </div>
  <div className="navbar-end">
    {/* <p> {user && user.email} </p> */}
      <img title={user && user.displayName} className='w-12 rounded-full mr-4' src={user && user.photoURL} alt="" />

{
  user ? <button onClick={handleLogOut} className="btn btn-md bg-[#00a4ef] text-white hover:bg-base-300 hover:text-black hover:border-0">Sign Out</button> :  <Link to='/login' className="btn btn-md bg-[#00a4ef] text-white hover:bg-base-300 hover:text-black hover:border-0">Login</Link>
}
    
  </div>

  <ToastContainer></ToastContainer>
</div>
    );
};

export default Navbar;