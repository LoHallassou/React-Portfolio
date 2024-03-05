import React from 'react';
import './intro.css';
import bg from '../assets/profilebg.png'

const Intro = () => {
    return (
        <section className="intro">
            <div className="introContent">
                <span className='Hi'>Hi,</span>
                <span className='introText'>I'm <span className='introName'>Lowell</span> <br /> Front-End Web Developer </span>
                <p className="introPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={bg} alt='Profile' className='bg'></img>
        </section>
    )
}

export default Intro;