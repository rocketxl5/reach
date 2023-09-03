import React from 'react'
import { Link } from 'react-router-dom'
import hideShowMenu from '../utilities/hideShowMenu'



function Navbar({ isFirefox }) {
    const { handleChange } = hideShowMenu()


    return (
        <div className="navbar">
            <input type="checkbox" id="mobile-nav" onChange={() => isFirefox && handleChange(document.querySelector('header'))} />
            <nav>
                <section className="left-side">
                    <h1 className="logo">Reach</h1>
                    <ul>
                        <li><Link className="nav-link" to="#"><span>Home</span></Link></li>
                        <li><Link className="nav-link" to="#"><span>Team</span></Link></li>
                        <li><Link className="nav-link" to="#"><span>About</span></Link></li>
                        <li><Link className="nav-link" to="#"><span>Contact</span></Link></li>
                        <li><Link className="nav-link" to="/register"><span>Create account</span></Link></li>
                    </ul>
                </section>
                <section className="right-side">
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign up</Link>
                    <label htmlFor="mobile-nav" className="mobile-nav-label">
                        <span></span>
                    </label>
                </section>
            </nav>

        </div>
    )
}

export default Navbar;