import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import toggleClass from '../utilities/toggleClass'
import animateMenu from '../utilities/animateMenu'
import useSetBrowser from '../hooks/useSetBrowser'

function Navbar() {
    const [target, setTarget] = useState({})
    const { isFirefox } = useSetBrowser()

    useEffect(() => {
        if (isFirefox) {
            setTarget(document.querySelector('header'))
        }
    }, [isFirefox])

    useEffect(() => {
        animateMenu(document.querySelector('.mobile-nav-label'))
    }, [])

    return (
        <div className="navbar">
            <input type="checkbox" id="mobile-nav" onChange={() => isFirefox && toggleClass(target, 'checked')} />    
            <nav>
                <section className="left-side">
                    <h1 className="logo">Reach</h1>
                    <ul>
                        <li><Link className="nav-link" to="#"><span>Home</span></Link></li>
                        <li><Link className="nav-link" to="#"><span>Team</span></Link></li>
                        <li><Link className="nav-link" to="#"><span>About</span></Link></li>
                        <li><Link className="nav-link" to="#"><span>Contact</span></Link></li>
                        <li><Link className="nav-link" to="/signup"><span>Create account</span></Link></li>
                    </ul>
                </section>
                <section className="right-side">
                    <Link className="btn-small" to="/login">Sign in</Link>
                    <Link className="btn-small" to="/signup">Sign up</Link>
                    <label htmlFor="mobile-nav" className="mobile-nav-label">
                        <span></span>
                    </label>
                </section>
            </nav>
        </div>
    )
}

export default Navbar;