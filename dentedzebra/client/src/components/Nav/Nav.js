import React from 'react';
import {Link} from 'react-router-dom';

import './Nav.css';
import '../Pages/Animations.css';
import '../Pages/StyleGeneral.css';

const fadeIn = "animate__fadeIn";

const Nav = () => {
    return (
        <div className="nav">
          <ul className={fadeIn}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/process">PROCESS</Link></li>
            <li><Link to="/repair">REPAIRS</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
    );
};

export default Nav;