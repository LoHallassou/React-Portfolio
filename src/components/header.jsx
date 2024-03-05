import React from 'react';
import './header.css';
import logo from '../assets/portfolio-logo.png';

const Navbar = () => {

    return (
        <nav className="navbar">

            <div className='desktopMenu'>
            <img src='{logo}' alt='Logo' className='logo'/>
            </div>
                <button className="desktopMenuBtn">
                    <img src="" alt="" className="desktopMenuIcon" />Reach Out!</button>
        </nav>
    )
}

export default Navbar