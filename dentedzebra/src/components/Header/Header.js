import React from 'react';

import './Header.css';
import image from '../../Images/Logo/dentedzebra.png';

const Header = () => {
    return (
        <div className="logo-container">
                <img className="logo" src={image} alt=""></img>
        </div>
    )
};

export default Header;