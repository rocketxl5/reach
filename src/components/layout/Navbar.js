import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">Reach</h1>
            <input type="checkbox" id="mobile-nav" />
            <nav>
                <ul>
                    <li><Link className="nav-link" to="#"><span>About</span></Link></li>
                    <li><Link className="nav-link" to="#"><span>Home</span></Link></li>
                    <li><Link className="nav-link" to="#"><span>Team</span></Link></li>
                    <li><Link className="nav-link" to="#"><span>Contact</span></Link></li>
                </ul>
            </nav>
            <label htmlFor="mobile-nav" className="mobile-nav-label">
                <span></span>
            </label>
        </div>
    )
}

export default Navbar;