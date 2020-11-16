// Import the style for the component
import './index.css';
import logo from '../../assets/white_logo_transparent_background2.png'
// Import the packages
import React from 'react';
import { Link } from 'react-router-dom';


// Declare the NavBar component
function NavBar({ isAuthenticated }) {
  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={logo} height="100%" />
      <div className="nav-items">
        <ul>
          {isAuthenticated ? (
            <React.Fragment>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li><Link to="/logout">Logout</Link></li>
            </React.Fragment>
          ) : (
              <React.Fragment>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </React.Fragment>
            )
          }
        </ul>

      </div>
    </div>
  )
}

// Export the NavBar component
export default NavBar;