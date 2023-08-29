const validateLogin = (values) => {
    const errors = {}

    // if email is empty
    if (!values.email.trim()) {
        errors.email = 'Email is required'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    }

    return errors;
}

export default validateLogin
