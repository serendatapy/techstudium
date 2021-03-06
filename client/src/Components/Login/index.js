// Import the style for the component
import './index.css';
// Import the neccessary files
import logo from '../../assets/whitelogo.png'
import auth from '../../Utils/auth';
import authApiService from '../../Services/AuthApiClient';
// Import the packages
import React, { useState } from 'react';

// Declare the initial state
const initialUserState = {
  email: '',
  password: ''
};

// Declare the Login component
function Login(props) {
  // Set the state
  const [userState, setUserState] = useState(initialUserState);

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
    // If the user is not found, notify the user
    if (res.err) {
      alert(`${res.message}`);
      setUserState(initialUserState);
    }
    else {
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push({
        pathname: "/profile",
        state: {
          userinfo: res
        }
      }));
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
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={userState.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <ion-icon name="lock-closed-outline"></ion-icon>
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