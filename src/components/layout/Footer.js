import React, { useState, useEffect } from 'react'
import useSetBrowser from '../hooks/useSetBrowser'

function Footer() {
    const { isChrome } = useSetBrowser()
    return (
        <div>
            <p className="center">{window.navigator.userAgent.toLowerCase().includes('crios')}</p>
            <p className="center">{window.navigator.userAgent}</p>
            <p className="center">Copiright &copy; 2023</p>
        </div>
    )
}

export default Footer
