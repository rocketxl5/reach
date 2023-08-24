import React, { useEffect } from 'react'
import axios from 'axios'
import access from '../../api/resources'

function Signin() {

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data } = await axios.get(
            `${access.serverURL}/api/users`
        )
        console.log(data)
    }

    const handleSubmit = e => e.preventDefault()

    return (
        <div className="form-content">
            <header className="form-header">
                <div className="form-logo">
                    <h1>reach</h1>
                </div>
            </header>
            <form className="form">
                <div className="form-element">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="form-element" />
                </div>
                <div className="form-element">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="form-element" />
                </div>
                <div className="form-element">
                    <button type="submit" onSubmit={handleSubmit}>Login</button>
                    <a href="#">Create account</a>
                </div>
            </form>

        </div>
    )
}

export default Signin;
