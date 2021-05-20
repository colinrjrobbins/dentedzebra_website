import React from 'react';
import { Link } from 'react-router-dom';

import './Team.css';
import '../Pages/StyleGeneral.css';
import '../Pages/Animations.css';

import ColinImage from '../../images/team/colinImage.jpg';
import AustinImage from '../../images/team/austinImage.png';
import AshleyImage from '../../images/team/ashleyImage.jpg';

const Team = () => {
    return(
        <div className="general team-page animate__fadeIn">
            <h1>Our Team</h1>
            <table>
                <tr>
                    <td>
                        <img src={ColinImage} alt="" />
                    </td>
                    <td>
                        <h2>Colin Robbins</h2>
                        <em><h3>Lead Product Designer // Creator</h3></em>
                        <p>Colin finished school in Computer Engineering and is continuing 
                            with Software Engineering while having fun building custom speakers for people.
                        </p>
                        <button className="general__button button__ripple"><a href="colinrobbins.dentedzebra.best">Colin's Portfolio</a></button>
                    </td>
                </tr>
                <hr />
                <tr>
                    <td>
                        <img src={AustinImage} alt="" />
                    </td>
                    <td>
                        <h2>Austin Craven</h2>
                        <em><h3>Designer // Audio Engineer</h3></em>
                        <p>Austin went through school as a Mechanical Engineer and took time 
                            exploring the world, partying and generally loves high quality music.
                        </p>
                        <button className="general__button button__ripple"><Link to="/austincraven">Austin's Portfolio</Link></button>
                    </td>
                </tr>
                <hr />
                <tr>
                    <td>
                        <img src={AshleyImage} alt="" />
                    </td>
                    <td>
                        <h2>Ashley Dennison</h2>
                        <em><h3>Creator // Social Media Manager</h3></em>
                        <p>Ashley went through and got her Bachelor's of Arts and Science, and majored in Criminology. 
                            She has a passion for music and a keen eye for design.
                        </p>
                        <button className="general__button button__ripple"><Link to="/ashleydennison">Ashley's Portfolio</Link></button>
                    </td>
                </tr>
            </table>
            <button className="general__button button__ripple"><Link to="/contact">CONTACT US</Link></button>
        </div>
    )
};

export default Team;