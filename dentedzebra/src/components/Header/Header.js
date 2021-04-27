import React from 'react';

import './Header.css';
import logo from '../../images/logo/dentedzebra.png';
import '../Pages/Animations.css';

const Header = () => {
    return (
        <div className="logo-container">
                <img className="logo" src={logo} alt=""></img>
        </div>
    )
};

export default Header;