import { useState, useEffect } from 'react'

const useSetBrowser = () => {
    const [isFirefox, setIsFirefox] = useState(false)
    const [isChrome, setIsChrome] = useState(false)

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        userAgent.includes('firefox') && setIsFirefox(true)
        userAgent.includes('crios') && setIsChrome(true)
    }, [])

    return { isFirefox, isChrome }
}

export default useSetBrowser