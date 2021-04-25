import React from 'react';

import './Footer.css';
import FacebookLogo from '../../images/logo/facebook.png';
import InstagramLogo from '../../images/logo/instagram.png';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="">
                <h3>DentedZebra Speakers</h3>
            </div>
            <div>
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