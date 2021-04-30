import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import './StyleGeneral.css';
import './Animations.css';

const ButtonAnimation = "general__button animate__slideLeft button__ripple";

const Home = () =>{
    return(
        <div className="general main-page__main-container animate__fadeIn">
            <h1 className="animate__slideLeft">Your Dream, Your Speakers</h1>
            <button className={ButtonAnimation}><Link to="/whatarewe">WHAT ARE WE?!</Link></button>
            <p></p>
            <div className="welcome-box">
                <div>
                    <button className={ButtonAnimation}>
                        <Link to="/contact">CONTACT</Link>
                    </button>
                    <p></p>
                    <button className={ButtonAnimation}>
                        <Link to="/process">OUR PROCESS</Link>
                    </button>
                    <p></p>
                    <button className={ButtonAnimation}>
                        <Link to="/gallery">GALLERY</Link>
                    </button>
                    <p></p>
                    <button className={ButtonAnimation}>
                        <Link to="/repair">REPAIRS + UPGRADES</Link>
                    </button>
                    <p></p>
                    <button className={ButtonAnimation}>
                        <Link to="/about">ABOUT US</Link>
                    </button>
                    <p></p>
                </div>
            </div>

            <h2 className="animate__slideLeft">Welcome to a new look and a better sound.</h2>
        </div>
    );
}

export default Home;