import { useState, useEffect } from 'react'

const useSetBrowser = () => {
    const [firefox, setFirefox] = useState(false)
    const [crios, setCrios] = useState(false)
    const [target, setTarget] = useState({})

    useEffect(() => {
        const handleSetBrowser = () => {
            const userAgent = window.navigator.userAgent.toLowerCase()
            console.log('handlebrowser')
            if (userAgent.includes('firefox')) {
                setFirefox(true)
                setTarget(document.querySelector('header'))
            }
            if (userAgent.includes('crios')) {
                setCrios(true)
                setTarget(document.querySelector('.mobile-nav-label'))
            }
        }
        handleSetBrowser()
        window.addEventListener('load', handleSetBrowser)

        return () => {
            console.log('return')
            window.removeEventListener('load', handleSetBrowser)
        }
    }, [])

    return { firefox, crios, setTarget, target }
}

export default useSetBrowser