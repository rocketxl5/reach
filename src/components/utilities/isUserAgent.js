export default function isUserAgent(search) {
    return window.navigator.userAgent.toLowerCase().includes(search)
} 