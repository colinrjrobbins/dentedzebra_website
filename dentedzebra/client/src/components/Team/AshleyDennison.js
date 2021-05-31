import React from 'react';
import { Link } from 'react-router-dom';

import './AshleyDennison.css';
import '../Pages/StyleGeneral.css';
import '../Pages/Animations.css';

const AshleyDennison = () => {
    return(
        <div className='general ashleydennison-page animate__fadeIn'>
            <h1>Ashley Dennison</h1>

            <button className="general__button button__ripple"><Link to="/team">Back</Link></button>
        </div>
    );
}

export default AshleyDennison;