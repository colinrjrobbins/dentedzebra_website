import React from 'react';
import {Link} from 'react-router-dom';

import './Animations.css';
import './WhatAreWe.css';
import './StyleGeneral.css';

const WhatAreWe = () =>{
    return (
        <div className="general animate__fadeIn">
            <h1>Welcome to something <b>NEW</b>!</h1>
            <p>Build a speaker that your excited about instead of the boring old boxes with mediocre sound
                 that we see and hear day in and day out. Time to dent those speakers to be a little more like 
                 you and not like a company.
            </p>
            <p>Don't just take our word for it, check out some previous
                work in the <b><u><Link to="/gallery">Gallery</Link></u></b>, find out
                more about DentedZebra Speakers under the <b><u><Link to="/about">About Us</Link></u></b> section,
                 and even see our <b><u><Link to="/process">Process</Link></u></b> and how it would
                all work if you did decide to build your speakers with us.
            </p>
            <p>On the other side, if you have speakers already (we would hope most of you do), we
                can do some upgrades or repairs for you! Have an old set that still has a lot of potential? 
                No worries! If you need new drivers, new box, new electronics or anything in between, we
                are happy to help. Check out <b><u><Link to="/repair">Repairs and Upgrades</Link></u></b> for
                more information on that.
            </p>
            <p>Since we are all trying to do our part to help the environment, DentedZebra likes
                to be <span className="main-page__green">ECO FRIENDLY</span> too! We will take your 
                old furniture (cabinets, wardrobes, kitchen cupboard) and use the wood from that 
                to build your speakers! If you just want to dispose of your old speakers, we are happy
                to take them and salvage as much as we can for your build or another persons build.
                Saves you money on your own speakers, and saving the environment one speaker at a time, YAY!
            </p>
            <p>If you decide to pull the trigger, go to the <b><u><Link to="/contact">Contact</Link></u></b> section
             to start your journey and make a speaker you will adore.</p>
             <button className="general__button button__ripple"><Link to="/contact">CONTACT US</Link></button>
        </div>
    );
};

export default WhatAreWe;