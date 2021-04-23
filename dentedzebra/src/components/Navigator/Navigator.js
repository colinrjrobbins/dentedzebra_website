import React from 'react';
import { BrowserRouter as Router,
         NavLink} from 'react-router-dom';

import './Navigator.css';

const Navigator = () => {
    return(
        <Router>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>
        </Router>
    );
}

export default Navigator;