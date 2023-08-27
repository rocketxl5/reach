const validate = (values) => {
    const errors = {}
    // if email is empty
    if (!values.email.trim()) {
        errors.email = 'Email is required'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    }
}

export default validate
