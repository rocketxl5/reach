const baseURL = (version) => {
    if (version === 'production') {
        return 'https://reach-server.onrender.com'
    }

    return ''
}

export default baseURL