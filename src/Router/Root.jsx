import React from 'react';
import '../App.css'
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Slider from '../Components/Slider/Slider';
import UpcomingEvent from '../Components/UpcomingEvent/UpcomingEvent';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <header>
                <Navbar></Navbar>
                <Slider></Slider>
            </header>
            <main>
                <section>
                    <UpcomingEvent></UpcomingEvent>
                </section>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;