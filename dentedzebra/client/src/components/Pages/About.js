import React from 'react';
import {Link} from 'react-router-dom';

import './About.css';
import './StyleGeneral.css';
import './Animations.css';

import EngraveLogo from '../../images/about/dentedzebra_label_1.jpg'

const About = () => {
    return(
    <div className="general animate__fadeIn">
        <h1>About Us</h1>
        <div className="about">
            <img src={EngraveLogo} alt="engraved logo" />
        </div>
        <h4>
            We are DentedZebra Speakers. A team of creative individuals with a passion for change.
        </h4>
        <p>For years we have gone to parties, get togethers, wine and cheese parties, you name it, and for the vast majority we have been 
            disappointed with lack luster sound and creativity of modern speakers. You may have a super nice high quality speaker but it is 
            still just a box, with no life and feeling to it. Nothing to make it yours. That is where we come in. 
        </p>
        <p>Are you tired of the same old boxes with no "colour"? Or an extreme lack of uniqueness? We are too! We want to make a speaker for you 
            that is as unique and one of a kind as you are. But we also want to help the environment as much as possible, if you have old speakers 
            that need a shock of life back into them we can do that. If you have a kitchen cabinet that you plan to throw out, DON'T! It can be 
            turned into a speaker.
        </p>
        <p>If you want to know more about us and our team members, check us out!</p>
        <button className="general__button button__ripple"><Link to="/team">OUR TEAM</Link></button>
        <p>If this has intruiged you, fire us an email and we can welcome you to the DentedZebra Speaker family!</p>
        <button className="general__button button__ripple"><Link to="/contact">CONTACT US</Link></button>
    </div>);
}

export default About;

/* <p>I am <b>Colin Robbins</b>, the creator of DentedZebra Speakers. I have always had a passion for 
music, a love for building and am always thrilled to learn something new! I completed my Computer Engineering diploma
at Seneca College and am currently taking Software Engineering at McMaster.
</p>
<p>As someone who hears speakers everywhere, from my own, to friends, at parties, etc, I realized something. Music 
is the glue that keeps people together, and breathes new life and enjoyment to people. I wanted to be the person
that brings a smile to peoples faces and be able to indulge in the skills I have learned and adapted over the years.
I want to bring you something completely unique with sound quality that will make you quiver with excitement everytime you turn 
your speakers on. I want to make your vision come to fruition. 
</p> */