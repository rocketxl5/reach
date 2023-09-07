import React, { useState, useEffect } from 'react'
import useSetBrowser from '../hooks/useSetBrowser'

function Footer() {
    const [browser, setBrowser] = useState('undefined')
    const { firefox, crios } = useSetBrowser()

    useEffect(() => {
        if (firefox) {
            setBrowser('firefox')
        }
        if (crios) {
            setBrowser('crios')
        }
    }, [firefox, crios])
    return (
        <div>
            <p className="center">{browser}</p>
            <p className="center">{window.navigator.userAgent}</p>
            <p className="center">Copyright &copy; 2023</p>
        </div>
    )
}

export default Footer
