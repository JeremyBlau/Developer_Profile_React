import React, { useState } from 'react';
import '../styles/Contact.css';

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
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="error" role="alert">
              {formErrors.email}
            </p>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <p className="error" role="alert">
              {formErrors.message}
            </p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h2 className="contact-title">
        Contact me if you think I would be a good fit for your organization.
      </h2>
    </div>
  );
};

export default Contact;
