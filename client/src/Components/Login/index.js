// Import the style for the component
import './index.css';
// Import the neccessary files
import logo from '../../Assets/whitelogo.png'
import auth from '../../Utils/auth';
import authApiService from '../../Services/AuthApiClient';
// Import the packages
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

// Declare the initial states 
const initialUserState = {
  email: '',
  password: ''
};
const initialAuthState = auth.isAuthenticated();


// Declare the Login component
function Login(props) {
  
  const history = useHistory();
  // Set the state
  const [userState, setUserState] = useState(initialUserState);
  const [isAuthenticated, setAuthState] = useState(initialAuthState);


  // Handle the changes made in the form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle actions on submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get the inputted user information from the state
    const { email, password } = userState;
    // Save the above information in the user variable
    const user = { email, password };
    // Look for the user in the database
    const res = await authApiService.login(user);
    console.log(res);
    // If the user is not found, notify the user
    if (res.err) {
      alert(`${res.message}`);
      setUserState(initialUserState);
    }
    else {
      setAuthState(true);
      auth.login(() => history.push('/profile'));
      console.log("The user is authenticated")
    }
  }

  // Validate the form
  const validateForm = () => {
    return !userState.email || !userState.password;
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
              value={userState.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={userState.password}
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