import React from 'react';
import '../App.css'
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Slider from '../Components/Slider/Slider';

const Root = () => {
    return (
        <div className=''>
            <header>
                <Navbar></Navbar>
                <Slider></Slider>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Root;