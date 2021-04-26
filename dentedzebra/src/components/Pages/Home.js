import React from 'react';

import './Home.css';

const Home = () =>{
    return(
        <div className="main_page">
            <h2>Your Dream, Your Speakers</h2>
            
            <p>Welcome to something NEW and exciting!</p>
            <button className="main-page__button"><a href="/contact">CONTACT US</a></button>
            <p></p>
            <p>Build a speaker that your excited about instead
                of the boring old boxes with mediocre sound that we see and hear day in and day out.
            </p>
            <p>Don't just take our word for it, check out some previous
                work in the <u><a href="/gallery">Gallery</a></u>, find out
                more about DentedZebra Speakers under the <u><a href="/about">About Us</a></u>
                section, and even see our <u><a href="/process">Process</a></u> and how it would
                all work if you did decide to build your speakers with us.
            </p>
            <p>On the other side, if you have speakers already (we would hope most of you do), we
                can do some upgrades or repairs for you! Have an old set that still has a lot of potential? 
                No worries! If you need new drivers, new box, new electronics or anything in between, we
                are happy to help. Check out <u><a href="/repairs">Repairs and Upgrades</a></u> for
                more information on that.
            </p>
            <p>Since we are all trying to do our part to help the environment, DentedZebra likes
                to be <span class="main-page__green">ECO FRIENDLY</span> too! We will take your 
                old furniture (cabinets, wardrobes, kitchen cupboard) and use the wood from that 
                to build your speakers! If you just want to dispose of your old speakers, we are happy
                to take them and salvage as much as we can for your build or another persons build.
                Saves you money on your own speakers, and saving the environment one speaker at a time, YAY!
            </p>
            <p>If you decide to pull the trigger, go to the <u><a href="/contact">Contact</a></u> 
                section to start your journey and make a speaker you will adore.</p>

            <h2>Welcome to a new look and a better sound.</h2>
        </div>
    );
}

export default Home;