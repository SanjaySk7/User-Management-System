import React, { useState } from 'react';
import './Form.css'
import { useDispatch } from 'react-redux';
import { actions } from '../../pages/Methods/slice';


const Form = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const dispatch=useDispatch();


      const handleChange =(e)=> {
        const {name,value} = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        const today = new Date();
    
        if (!formValues.name.trim()) {
          newErrors.name = 'Name is required.';
        }
        if (!formValues.email.trim()) {
          newErrors.email = 'Email is required.';
        } else if (!validateEmail(formValues.email)) {
          newErrors.email = 'Please enter a valid email address.';
        }
        if (!formValues.dateOfBirth.trim()) {
            newErrors.dateOfBirth = 'Date of Birth is required.';
          } else if (new Date(formValues.dateOfBirth) > today) {
            newErrors.dateOfBirth = 'Date of Birth cannot be in the future.';
          }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          dispatch(actions.addUsers(formValues));  
          alert('Form submitted successfully!');
          setFormValues({
            name: '',
            email: '',
            dateOfBirth: '',
          });
        }
      };
    
      return (
        <div className="form-container">
          <h2 className="form-title">Add User</h2>
          <form onSubmit={handleSubmit} className="form-box">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formValues.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <span className="error-text">{errors.dateOfBirth}</span>}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      );
    };
    

export default Form