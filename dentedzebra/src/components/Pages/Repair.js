import React from 'react';

import './Repair.css';
import './StyleGeneral.css';
import './Animations.css';

import AST1500_Rebuild from '../../images/repair/ast1500_subwoofer.jpg';
import AST1500_Crossover from '../../images/repair/ast1500_crossover.jpg';

const Repair = () => {
    return(
    <div className="general animate__fadeIn">
        <h1>Repairs and Upgrades</h1>
        <p>So you want to repair a beautiful old set of speakers? We get it, hand 
            me downs, junk yard salvage, you get the idea. Whatever it is we can
            fix it!
        </p>
        <div className="repair__list">
            <li>New Stain</li>
            <li>Repaired Box</li>
            <li>Attempt to Fix Broken Electronics</li>
            <li>Add Some Style</li>
            <li>Replace Speaker Drivers or Components</li>
            <li>Cleaning and Restoring</li>
        </div>
        <p>Take for example, this set of speakers that we repaired from someone who
            didn't want them anymore.
        </p>
        <div>
            <img src={AST1500_Rebuild} alt="" />
        </div>
        <p></p>
        <p>This set of speakers are known as AST-1500 (props to the company, they built awesome speakers)
                or better known as "scammers speakers", the kind of speakers you buy for $100 out of the back 
                of someone car in a sketchy parking lot with all the insides ripped out and broken speaker drivers. 
        </p>
        <div>
            <img src={AST1500_Crossover} alt="" />
        </div>
        <p></p>
        <p>Thanks to the friend who donated these to us, we repaired and rebuilt them from the ground up.
            Putting entirely new crossovers (electronics) on the inside, we were then able to use these speakers
            that likely would have ended up in the garbage to DJ a wedding, multiple cottage parties and multiple
            keggers. Endless fun from some speakers that would have just been thrown away.
        </p>
        <p>We want this to happen with your old speakers as well! Whether you want us to repair them, upgrade them
            or you just want to get rid of them and know they will go to a better home, we are your people! 
            DentedZebra Speakers makes the best of whatever is handed our way and strive to make your listening experience 
            the best it can be.
        </p>
        <button className="general__button button__ripple"><a href="/contact">CONTACT US</a></button>
    </div>);
}

export default Repair;