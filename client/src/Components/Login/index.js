// Import the style for the component
import './index.css';
// Import the neccessary files
import logo from '../../Assets/whitelogo.png'
import auth from '../../Utils/auth';
import authApiService from '../../Services/AuthApiClient';
// Import the packages
import React, { useState } from 'react';

// Declare the initial state of the user email and password
const initialState = {
  email: '',
  password: ''
};

// Declare the Login component
function Login() {
  // Set the state
  const [state, setState] = useState(initialState);

  // Handle the changes made in the form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle actions on submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get the inputted user information from the state
    const { email, password } = state;
    // Save the above information in the user variable
    const user = { email, password };
    // Look for the user in the database
    const res = await authApiService.login(user);
    console.log(res);
  }

  // Validate the form
  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <div className="container-image">
      <div className="login">
        <img className="logo" src={logo} />
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <button className="login-button" type="submit" disabled={validateForm()}>Sign in</button>
        </form>
        <div className="register" >
          Don't have an account? Register here!
        </div>
      </div>
    </div>
  )
}

// Export the Login component
export default Login;