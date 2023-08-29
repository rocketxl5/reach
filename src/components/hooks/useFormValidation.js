import { useState, useEffect } from 'react'

const useForm = (callback, validateFields, state) => {
    const [values, setValues] = useState(state)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        setErrors(validateFields(values))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            setValues((values))
            callback(values)
        }
    }, [])

    return { handleChange, handleSubmit, values, errors }
}

export default useForm;
