import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import TitleLogo from '../imgs/TitleLogoInverted.png'

function Navbar(){
    return (
        <div className="nav-container" >
            <img src={TitleLogo} alt='The Blown Save' className='nav-logo'/>
            <div className="nav-buttons">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </div>
    )
}

export default Navbar;