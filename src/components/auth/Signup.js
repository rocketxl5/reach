import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import access from '../../api/resources'

function Signup() {
    const handleSubmit = e => e.preventDefault()

    return (
        <div className="container">
            <div className="form-content">
                <div className="form-logo padding-1-inline padding-2-block">
                    <h1 className="center">Reach</h1>
                </div>
                <form className="form padding-1-inline padding-2-block">
                    <div className="form-title">
                        <h2>Create account</h2>
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Username</label>
                        <input type="text" id="username" placeholder="Username" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password_repeat">Repeat password</label>
                        <input type="password" name="password" id="password_repeat" placeholder="Password" />
                    </div>
                    <div className="form-element">
                        <Link className="link" to="/signin">Already a member?</Link>
                        <button type="submit" onSubmit={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
