import React from 'react'
import Link from 'react-router-dom'

function Home() {
    return (
        <main className="container">
            <h2><Link to="/signin">Sign in</Link></h2>
            <h2><Link to="/signup">Sign up</Link></h2>
        </main>
    )
}

export default Home