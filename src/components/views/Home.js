import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="container">
            <div style={{ display: "block", width: "30%", padding: "1em" }}>
                <h2 style={{ display: "block" }}><Link to="/signin">Sign in</Link></h2>
                <h2 style={{ display: "block" }}><Link to="/signup">Sign up</Link></h2>
            </div>
        </main>
    )
}

export default Home