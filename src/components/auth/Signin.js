import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import access from '../../api/resources'
import useLogin from '../hooks/useLogin'
import validate from '../utilities/validateLogin'
import { UserContext } from '../../contexts/UserContext'

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    // const { setUser } = useContext(UserContext)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data } = await axios.get(
            `${access.serverURL}/api/users`
        )
        console.log(data)
    }

    const callback = (values) => {
        setEmail(values.email)
        setPassword(values.password)
        setIsValid(true)
    }

    const { handleChange, handleSubmit } = useLogin(validate, callback);

    return (
        <div className="container">
            <div className="form-content">
                <div className="form-logo">
                    <h1 className="center"><Link to="/">Reach</Link></h1>
                </div>
                <form className="form">
                    <div className="form-title">
                        <h2>Sign in</h2>
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={handleChange} placeholder="Email" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password" />
                    </div>
                    <div className="form-element">
                        <Link className="link" to="/signup">Create account</Link>
                        <button type="submit" onSubmit={handleSubmit}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;
