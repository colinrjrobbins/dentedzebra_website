import React from 'react';

import './Footer.css';
import FacebookLogo from '../../images/logo/facebook.png';
import InstagramLogo from '../../images/logo/instagram.png';

const Footer = () => {
    return (
        <div>
            <div>
                <h6>DentedZebra Speakers</h6>
            </div>
            <div>
                <ul>
                    <li><img src={FacebookLogo} alt="Facebook"></img></li>
                    <li><img src={InstagramLogo} alt="Instagram"></img></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;