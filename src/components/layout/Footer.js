import React, { useState, useEffect } from 'react'

function Footer() {
    const [userAgent, setUserAgent] = useState('')

    useEffect(() => {
        setUserAgent(window.navigator.userAgent.toLowerCase())
    }, [])
    return (
        <div>
            <h2>{userAgent}</h2>
        </div>
    )
}

export default Footer
