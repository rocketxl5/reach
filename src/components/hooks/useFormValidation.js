import { useState, useEffect } from 'react'

const useForm = (callback, inputValidation, state) => {
    const [values, setValues] = useState(state)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleFocus = (e) => {
        if (e.target.classList.contains('input-error')) {
            e.target.classList.remove('input-error')
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target
        if (!value && isSubmit) {
            e.target.classList.add('input-error')
            e.target.placeholder = `${name.charAt(0, 1).toUpperCase()}${name.substring(1)} is required`
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(inputValidation(values))
        console.log(values)
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback(values)
        }
    }, [])

    return { handleChange, handleSubmit, handleFocus, handleBlur, values, errors }
}

export default useForm;
