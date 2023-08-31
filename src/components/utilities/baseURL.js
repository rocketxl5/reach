const baseURL = () => {
    const mode = 'production'

    if (mode === 'production') {
        return 'https://reach-server.onrender.com'
    }

    return ''
}

export default baseURL