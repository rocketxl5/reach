import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <input type="checkbox" id="mobile-nav" />
            <nav>
                <h1 className="logo">Reach</h1>
                <ul>
                    <Link className="signing-link" to="signin">Sign in</Link>
                    <Link className="signing-link" to="signup">Sign up</Link>
                    <li><Link className="nav-link" to="#"><span>Home</span></Link></li>
                    <li><Link className="nav-link" to="#"><span>Team</span></Link></li>
                    <li><Link className="nav-link" to="#"><span>About</span></Link></li>
                    <li><Link className="nav-link" to="#"><span>Contact</span></Link></li>
                </ul>
            </nav>
            <div className="signing-links">
                <Link to="signin">Sign in</Link>
                <Link to="signup">Sign up</Link>
            </div>
            <label htmlFor="mobile-nav" className="mobile-nav-label">
                <span></span>
            </label>
        </div>
    )
}

export default Navbar;