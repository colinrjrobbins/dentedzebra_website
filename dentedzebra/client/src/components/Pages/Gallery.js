import React from 'react';
import { Link } from 'react-router-dom';

import './Gallery.css';
import './StyleGeneral.css';
import './Animations.css';

import ClassicRockSpeakers from '../../images/gallery/classic_rock_speakers.png';
import StickerBomb from '../../images/gallery/stickerbomb_2_edit.png';
import DeskSpeakers from '../../images/gallery/desk_speakers.jpg';
import AllWhite from '../../images/gallery/allWhiteSpeakers.jpg';

const Gallery = () => {
    return(
    <div className="general animate__fadeIn">
        <h1>Gallery</h1>
        <p>You made it to the gallery! If you want to checkout some more up to date work 
            done by us take a look at 
            our <u><a href="https://www.instagram.com/dentedzebraspeakers/">Instagram</a></u>!
        </p>
        <h2><u>The Classic Rock Speakers</u></h2>
        <img src={ClassicRockSpeakers} alt="" />
        <p>Made for some of the most badass parents we have met, these speakers were made by
            special request. Some of the best albums of all time made on the front, with large
            high powered 8" woofers, loud yet smooth 2" tweeters and a crossover on the inside
            to handle any frequencies fired into them. On the outside a felt covering and a 3/4"
            MDF sealed box to give a clean bass feel and sound. 
        </p>
        <h2><u>All White</u></h2>
        <img src={AllWhite} alt="" />
        <p>These monster size speakers were made by specific design request that they will be drawn 
            and painted on. This allows for maximum customizability for the buyer. He was blown away by 
            the set and was thrilled by the design and simplicity.
        </p>
        <h2><u>The Desktop Speakers</u></h2>
        <img src={DeskSpeakers} alt="" />
        <p>Designed for a small room to pack a high quality sound, these guys were the lifeforce
            of a university student in a small 6' x 10' room. With a 1" Tweeter and 4" Woofer speaker driver (top to bottom),
            this small speaker set is perfect for casually listening to music all the way up to a
            university party and blows the socks off any bluetooth speaker that can be bought to date. 
            Finished with rustic screws and a light rustic oak stain as well as felt substituted for 
            feet to avoid heavy vibrations if your studying.
        </p>
        <h2><u>Stickerbomb Speakers</u></h2>
        <img src={StickerBomb} alt="" />
        <p>Designed for pure awesomeness and customization to the max. This set was made with a 1" tweeter and a 5" woofer, and
            for the smaller size rocks the house. The wood for this build was actually completely recycled from an old kitchen 
            counter siding, would you ever be able to tell? 
        </p>
        <button className="general__button button__ripple"><Link to="/contact">CONTACT US</Link></button>
    </div>);
}

export default Gallery;