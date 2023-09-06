import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Header() {
    const [userAgent, setUserAgent] = useState('')

    useEffect(() => {
        setUserAgent(window.navigator.userAgent.toLowerCase())
    }, [])

    return (
        <header className="main-header">
            <Navbar isFirefox={userAgent} />
            <div>{userAgent}</div>
        </header>
    )
}

export default Header;