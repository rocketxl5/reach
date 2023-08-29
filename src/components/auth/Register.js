import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useFormValidation from '../hooks/useFormValidation'
import validateFields from '../utilities/validateRegister'
import access from '../../api/resources'

function Register() {
    const [profile, setProfile] = useState({})
    const [isValid, setIsValid] = useState(false)

    const callback = (values) => {
        setProfile(values)
        setIsValid(true)
    }

    const { handleChange, handleSubmit, values, errors } = useFormValidation(
        callback,
        validateFields,
        {
            name: '',
            email: '',
            password: '',
            repeat_password: ''
        }
    )

    console.log(errors)
    return (
        <div className="container">
            <div className="form-content">
                <div className="form-logo">
                    <h1 className="center"><Link to="/">Reach</Link></h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-title">
                        <h2>Create account</h2>
                    </div>
                    <div className="form-element">
                        <label htmlFor="name">{errors.name ? <span className="red-text">{errors.name}</span> : <span>User name</span>}</label>
                        <input
                            className={errors.name && 'red-border'}
                            id="name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="User name"
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email</label>
                        <input
                            className={errors.email && 'red-border'}
                            id="email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password</label>
                        <input
                            className={errors.password && 'red-border'}
                            id="password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="repeat_password">Repeat password</label>
                        <input
                            className={errors.repeat_password && 'red-border'}
                            id="repeat_password"
                            type="password"
                            name="repeat_password"
                            value={values.repeat_password}
                            onChange={handleChange}
                            placeholder="Repeat Password"
                        />
                    </div>
                    <div className="form-element">
                        <Link className="link" to="/login">Already a member?</Link>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Register;
