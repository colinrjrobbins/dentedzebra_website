import React from 'react';

import './Footer.css';
import './../Pages/Animations.css';
import './../Pages/StyleGeneral.css';
// import FacebookLogo from '../../images/logo/facebook.png';
import InstagramLogo from '../../images/logo/instagram.png';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="main-footer__title">
                <h3>DentedZebra Speakers</h3>
            </div>
            <div className="main-footer__social">
                <ul>
                    {/* <button className="main-footer__button button__ripple">
                        <a href="https://facebook.com" target="__blank">
                            <img src={FacebookLogo} alt="Facebook"></img>
                        </a>
                    </button> */}
                    <button className="main-footer__button button__ripple">
                        <a href="https://www.instagram.com/dentedzebraspeakers/" target="__blank">
                            <img src={InstagramLogo} alt="Instagram"></img>
                        </a>
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Footer;