import React from 'react';

import './About.css';
import './StyleGeneral.css';
import './Animations.css';

import EngraveLogo from '../../images/about/dentedzebra_label_1.jpg'

const About = () => {
    return(
    <div className="general">
        <h2>About Us</h2>
        <img className="about__image" src={EngraveLogo} alt="colin" />
        <p></p>
        <p>I am <b>Colin Robbins</b>, the creator of DentedZebra Speakers. I have always had a passion for 
            music, a love for building and am always thrilled to learn something new! I completed my Computer Engineering diploma
            at Seneca College and am currently taking Software Engineering at McMaster.
        </p>
        <p>As someone who hears speakers everywhere, from my own, to friends, at parties, etc, I realized something. Music 
            is the glue that keeps people together, and breathes new life and enjoyment to people. I wanted to be the person
            that brings a smile to peoples faces and be able to indulge in the skills I have learned and adapted over the years.
            I want to bring you something completely unique with sound quality that will make you quiver with excitement everytime you turn 
            your speakers on. I want to make your vision come to fruition. 
        </p>
        <button className="general__button button__ripple"><a href="/contact">CONTACT US</a></button>
    </div>);
}

export default About;