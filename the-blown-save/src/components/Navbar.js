import React from 'react';
import {Link, NavLink} from 'react-router-dom';
function Navbar(){
    return (
        <div className="nav-container" >
            <h1>The Blown Save</h1>
            <div className="nav-buttons">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </div>
    )
}

export default Navbar;