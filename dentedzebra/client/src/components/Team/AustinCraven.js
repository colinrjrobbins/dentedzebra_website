import React from 'react';
import { Link } from 'react-router-dom';

import './AustinCraven.css';
import '../Pages/StyleGeneral.css';
import '../Pages/Animations.css';

import AustinPhoto2 from '../../images/team/austinImage2.jpg';

const AustinCraven = () => {
    return(
        <div className='general austincraven-page animate__fadeIn'>
            <h1>Austin Craven</h1>
            <img src={AustinPhoto2} alt="" />
            <p><em>"We do not pick our interests but our interests pick us. How we express those interests however, is up to us."</em></p>
            <p>Taking 
            things apart and understanding how to build them back up seemed to be in my nature. Music took hold of me sometime near the beginning of highschool. I joined the school band, with hopes of being apart of that sound. From there it took me to places I didn't even knew existed. </p> 
            <p>
                My name is Austin Craven and after completing my undergraduate in Mechatronics Engineering have found that combining my interests in music and engineering can produce something truly one of a kind. I would like to turn speakers from a box that plays music to something that truly expresses you, a piece of art.
            </p>
            <button className="general__button button__ripple"><Link to="/team">Back</Link></button>
        </div>
    );
}

export default AustinCraven;