import React, {useState} from 'react';
import styled from 'styled-components';

const SignUpForm = () => {

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues((prevState) => ({
      //This will keep all the other fields intact and updates the only necessary fields
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {firstName, lastName, email, password, confirmPassword} = formValues;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if(!firstName.length){
      newErrors.firstName = 'First name cannot be empty';
      isValid = false;
    }

    if(!lastName.length){
      newErrors.lastName = 'Last name cannot be empty';
      isValid = false;
    }

    if(!emailRegex.test(email)){
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if(password.length <= 7){
      newErrors.password = 'Password must be greater than 7 characters';
      isValid = false;
    }

    if(password !== confirmPassword){
      newErrors.confirmPassword = 'Password do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm())
      console.log('Form submitted successfully');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          value = {formValues.firstName}
          onChange = {handleChange}
        />
        <p data-testid="first-name-error-id" className="error">{errors.firstName}</p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value = {formValues.lastName}
          onChange = {handleChange}
        />
        <p data-testid="last-name-error-id" className="error">{errors.lastName}</p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value = {formValues.email}
          onChange = {handleChange}
        />
        <p data-testid="email-error-id" className="error">{errors.email}</p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
          value = {formValues.password}
          onChange = {handleChange}
        />
        <p data-testid="password-error-id" className="error">{errors.password}</p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value = {formValues.confirmPassword}
          onChange = {handleChange}
        />
        <p data-testid="confirm-password-error-id" className="error">{errors.confirmPassword}</p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;