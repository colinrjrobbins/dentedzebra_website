import React from 'react';

import './Footer.css';
import FacebookLogo from '../../Images/Logo/facebook.png';
import InstagramLogo from '../../Images/Logo/instagram.png';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="main-footer__title">
                <h3>DentedZebra Speakers</h3>
            </div>
            <div className="main-footer__social">
                <ul>
                    <li>
                        <a href="https://facebook.com" target="__blank">
                            <img src={FacebookLogo} alt="Facebook"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dentedzebraspeakers/" target="__blank">
                            <img src={InstagramLogo} alt="Instagram"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;