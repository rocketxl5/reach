const baseURL = () => {
    const mode = 'dev'

    if (mode === 'production') {
        return 'https://reach-server.onrender.com'
    }

    return ''
}

export default baseURL