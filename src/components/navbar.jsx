import React from 'react';
import './navbar.css';
import Logo from '../assets/portfolio-logo.png';
import Message from '../assets/message-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    return (
        <nav className="navbar">

            
            <img src={Logo} alt='Logo' className='logo'/>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
            </div>

        
                <button className="desktopMenuBtn">
                    <img src={Message} alt="" className="desktopMenuIcon" />Reach Out!</button>
        </nav>
    )
}

export default Navbar