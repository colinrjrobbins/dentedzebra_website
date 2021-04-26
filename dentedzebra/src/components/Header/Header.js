import React from 'react';

import './Header.css';
import image from '../../Images/Logo/dentedzebra.png';

const Header = () => {
    return (
        <div>
            <div className="image-container">
                <img className="logo" src={image} alt=""></img>
            </div>
        </div>
    )
};

export default Header;