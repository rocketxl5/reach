const validateRegister = (values) => {
    let errors = {}

    // Check for name
    if (!values.username) {
        errors.username = 'Username required'
    }

    // Check for email
    if (!values.email) {
        errors.email = 'Email required'
    }

    // Check for password
    if (!values.password) {
        errors.password = 'Password Required'
    }

    // Check for password
    if (!values.repeat_password) {
        errors.repeat_password = 'Password Required'
    }

    // Check if passwords match
    if (values.password && values.repeat_password) {
        if (values.password !== values.repeat_password) {
            errors.password = "Passwords don't match"
            errors.repeat_password = "Passwords don't match"
        }
    }

    return errors
};

export default validateRegister
