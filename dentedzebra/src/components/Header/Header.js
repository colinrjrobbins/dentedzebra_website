import React from 'react';

import Navigator from './Navigator';

import './Header.css';
import image from '../../images/logo/dentedzebra.png';

const Header = () => {
    return (
        <div>
            <div>
                <img src={image} alt=""></img>
            </div>
            <div>
                <Navigator />
            </div>
        </div>
    )
};

export default Header;