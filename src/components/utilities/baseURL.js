const baseURL = () => {
    const inProduction = true

    if (inProduction) {
        return 'https://reach-server.onrender.com'
    }

    return ''
}

export default baseURL