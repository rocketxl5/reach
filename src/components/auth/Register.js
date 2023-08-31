import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFormValidation from '../hooks/useFormValidation'
import inputValidation from '../utilities/validateRegister'
import baseURL from '../utilities/baseURL'

function Register() {
    const [input, setInput] = useState({})
    const [isValid, setIsValid] = useState(false)

    const registerUser = (isValid) => {
        if (isValid) {
            const userInput = {
                username: input.username,
                email: input.email,
                password: input.password,
            }

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInput)
            }

            try {
                fetch(`${baseURL()}/api/users/register`, options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            } catch (error) {
                console.log(error)
            }
        }
    }

    const callback = (values) => {
        setInput(values)
        setIsValid(true)
    }

    const { handleChange, handleFocus, handleBlur, handleSubmit, values, errors } = useFormValidation(
        callback,
        inputValidation,
        {
            username: '',
            email: '',
            password: '',
            repeat_password: ''
        }
    )

    useEffect(() => {

        if (isValid) {
            registerUser(isValid)
        }
    }, [isValid])

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
                        <label htmlFor="username">Username</label>
                        <input
                            className={errors.username && 'input-error'}
                            id="username"
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={errors.username ? errors.username : "Username"}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email</label>                        
                        <input
                            className={errors.email && 'input-error'}
                            id="email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={errors.email ? errors.email : "Email"}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password</label>                        
                        <input
                            className={errors.password && 'input-error'}
                            id="password"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={errors.password ? errors.password : "Password"}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password_repeat">Repeat password</label>                        
                        <input
                            className={errors.repeat_password && 'input-error'}
                            id="repeat_password"
                            type="password"
                            name="repeat_password"
                            value={values.repeat_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            placeholder={errors.repeat_password ? errors.repeat_password : "Repeat password"}
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
