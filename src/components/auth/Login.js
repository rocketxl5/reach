import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useFormValidation from '../hooks/useFormValidation'
import inputValidation from '../utilities/validateLogin'
import { UserContext } from '../../contexts/UserContext'
import access from '../../api/resources'

function Login() {
    const [credentials, setCredentials] = useState({})
    const [isValid, setIsValid] = useState(false)

    const callback = (values) => {
        setCredentials(values)
        setIsValid(true)
    }

    const { handleChange, handleSubmit, handleFocus, handleBlur, values, errors } = useFormValidation(
        callback,
        inputValidation,
        {
            email: '',
            password: ''
        }
    )

    return (
        <div className="container">
            <div className="form-content">
                <div className="form-logo">
                    <h1 className="center"><Link to="/">Reach</Link></h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-title">
                        <h2>Sign in</h2>
                    </div>
                    <div className="form-element">
                        <label htmlFor="name">Email</label>
                        <input
                            className={errors.email && 'input-error'}
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={errors.email ? errors.email : "Email"} />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password</label>
                        <input
                            className={errors.password && 'input-error'}
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={errors.password ? errors.password : "Password"} />
                    </div>
                    <div className="form-element">
                        <Link className="link" to="/register">Create account</Link>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
