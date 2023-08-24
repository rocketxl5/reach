import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">Reach</h1>
            <input type="checkbox" id="mobile-nav" />
            <nav>
                <ul>
                    <li><a href="#"><span>Home</span></a></li>
                    <li><a href="#"><span>Mission</span></a></li>
                    <li><a href="#"><span>Crew</span></a></li>
                    <li><a href="#"><span>Data</span></a></li>
                </ul>
            </nav>
            <label htmlFor="mobile-nav" className="mobile-nav-label">
                <span></span>
            </label>
        </div>
    )
}

export default Navbar;