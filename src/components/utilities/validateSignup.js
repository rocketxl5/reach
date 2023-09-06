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

    return errors
};

export default validateRegister
