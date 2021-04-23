import React from 'react';

import Navigator from '../Navigator/Navigator';

import './Header.css';
import image from '../../images/logo/dentedzebra.png';

const Header = () => {
    return (
        <div>
            <div className="image-container">
                <img className="logo" src={image} alt=""></img>
            </div>
            <div>
                <Navigator />
            </div>
        </div>
    )
};

export default Header;