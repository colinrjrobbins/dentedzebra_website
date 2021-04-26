import React from 'react';

import './Process.css';

import Banner from '../../Images/Process/banner.png';
import RickandMorty from '../../Images/Process/rick_and_morty_speaker_concept.jpg';


const Process = () => {
    return(
    <div className="process-page">
        <h2>It All Begins Here</h2>
        <p>
            We go through a fairly extensive process to make sure that
            what we are designing is exactly what you want, and we don't
            cut any corners.
        </p>
        <h4><u>Getting Your Design</u></h4>
        <p>To begin, we need your idea. What you want, how big 
            you want it to be, if there are any designs or pictures,
            all that cool stuff. From there we come up with a digital
            concept design for you to checkout and change how you want.
        </p>
        <p>For example:</p>
        <div>
            <img src={Banner} alt="digit_rendered_photo" />
        </div>
        <p></p>
        <h4><u>Re-Iteration Process</u></h4>
        <p>After we have sent a design that we believe will be great for you
            we need you to tell us what you like and don't like so we can rework
            and design again. Once we get it just right we will begin the purchasing
            process.
        </p>
        <div>
            <img src={RickandMorty} alt="rick_and_morty_designed_speakers" />
        </div>
        <p></p>
        <h4><u>Puchasing and Preparing</u></h4>
        <p>Once the design has been confirmed a go, we will begin figuring out what
            speaker drivers, paint, prints, electronics and material will work best 
            for your build. If you need a receiver to go with the build we will pick
            out one that works in your budget and will work best with your speakers.
        </p>
        <p></p>
        <h4><u>Keep You Updated</u></h4>
        <p>As we are working to put everything together and design the best speaker we
            can we will be updating you and keeping you in the loop, either with pictures
            or purchases to make sure every piece is exactly correct.
        </p>
        <div >
            <img src="{{ url_for('static',filename='images/progress_photo.jpg') }}" />
        </div>
        <p></p>
        <h4><u>Finishing</u></h4>
        <p>Wow, what a journey. May seem like a lot happened but it is all going to be
            on our end, you just need to sit back, relax and watch the build take place.
            Then you get to bask in the glory of your one of a kind speaker build.
        </p>
        <div>
            <img src="{{ url_for('static',filename='images/classic_rock_speakers.png') }}" />
        </div>
        <p>What are you waiting for?!</p>
        <button className="process-page__button"><a href="/contact">CONTACT US</a></button>
    </div>);
}

export default Process;