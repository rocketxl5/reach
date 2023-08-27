import { useState, useEffect } from 'react'

const useForm = (validate, callback) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validate(values))
        setIsValid(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isValid) {
            callback(values)
        }
    }, [])

    return { handleChange, handleSubmit }
}

export default useForm;
