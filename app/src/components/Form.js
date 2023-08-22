import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validator from 'validator'
import { updateField } from '../store'

export const Form = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const isFormValid = () => {
    if (!formData.first_name) return false
    if (!formData.last_name) return false
    if (!validator.isEmail(formData.email)) return false
    if (!formData.message || formData.message.length < 10) return false

    return true
  }

  const validateFormAndSetErrors = () => {
    let errors = {}

    if (!formData.first_name) errors.first_name = 'First Name is required'
    if (!formData.last_name) errors.last_name = 'Last Name is required'
    if (!validator.isEmail(formData.email)) errors.email = 'Invalid Email'
    if (!formData.message) {
      errors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      errors.message = 'Message should be at least 10 characters long'
    }

    setFormErrors(errors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    validateFormAndSetErrors()

    if (isFormValid()) {
      for (let field in formData) {
        dispatch(updateField({ fieldName: field, value: formData[field] }))
      }
      console.log('Data submitted to store')
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label id="first_name">First Name:</label>
        <input
          type="text"
          name="first_name"
          aria-labelledby="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
        />
        {formErrors.first_name && <p>{formErrors.first_name}</p>}
      </div>
      <div>
        <label id="last_name">Last Name:</label>
        <input
          type="text"
          name="last_name"
          aria-labelledby="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
        />
        {formErrors.last_name && <p>{formErrors.last_name}</p>}
      </div>
      <div>
        <label id="email">Email:</label>
        <input
          type="email"
          name="email"
          aria-labelledby="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>
      <div>
        <label id="message">Message:</label>
        <textarea
          name="message"
          aria-labelledby="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {formErrors.message && <p>{formErrors.message}</p>}
      </div>
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  )
}
