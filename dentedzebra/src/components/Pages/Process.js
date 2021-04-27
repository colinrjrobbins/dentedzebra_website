import React from 'react';

import './Process.css';
import './StyleGeneral.css';
import './Animations.css';

import Render from '../../images/process/stickerbomb_mini_render.png';
import Progress1 from '../../images/process/progress_photo_01.jpg';
import Progress2 from '../../images/process/progress_photo_1.jpg';
import Progress4 from '../../images/process/progress_photo_3.jpg';
import FinalPhoto from '../../images/process/final_image.jpg';

const Process = () => {
    return(
    <div className="general">
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
            <img src={Render} alt="digit_rendered_photo" />
        </div>
        <p></p>
        <h4><u>Re-Iteration Process</u></h4>
        <p>After we have sent a design that we believe will be great for you
            we need you to tell us what you like and don't like so we can rework
            and design again. Once we get it just right we will begin the purchasing
            process.
        </p>
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
        <div>
            <img src={Progress1} alt="" />
        </div>
        <div >
            <img src={Progress2} alt="" />
        </div>
        <p></p>
        <h4><u>Finishing</u></h4>
        <p>Wow, what a journey. May seem like a lot happened but it is all going to be
            on our end, you just need to sit back, relax and watch the build take place.
            Then you get to bask in the glory of your one of a kind speaker build.
        </p>
        <div>
        <img src={Progress4} alt="" />
        </div>
        <p>What are you waiting for?!</p>
        <img src={FinalPhoto} alt="" />
        <button className="general__button button__ripple"><a href="/contact">CONTACT US</a></button>
    </div>);
}

export default Process;