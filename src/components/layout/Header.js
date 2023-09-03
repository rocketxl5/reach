import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Header() {
    const [isFirefox, setIsFirefox] = useState(false)

    useEffect(() => {
        setIsFirefox(window.navigator.userAgent.includes('Firefox'))
    }, [])
    return (
        <header className="main-header">
            <Navbar isFirefox={isFirefox} />
        </header>
    )
}

export default Header;