import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the corresponding error when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address.',
      }));
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Please enter a message.',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // For demonstration purposes, you can replace this with the actual logic
      // to send an email using a backend service or an API.
      console.log('Form submitted:', formData);

      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{formErrors.email}</p>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <p className="error">{formErrors.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
