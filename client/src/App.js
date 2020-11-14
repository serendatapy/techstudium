// Import the style for the component
import './App.css';
// Import the components
import Login from './Components/Login/index';
import Navbar from './Components/NavBar/index';
import Home from './Components/Home/index';
import Dashboard from './Dashboard';
import auth from './Utils/auth';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

// Declare the App component
function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  const location = useLocation();

  // Return the App component
  return (
    <div className="App">
      { 
        location.pathname === '/login' 
        ? '' 
        :  <Navbar isAuthenticated={isAuthenticated} />
       }
      <Dashboard setIsAuthenticated={setIsAuthenticated} />
    </div>
  )
}

// Export the App component
export default App;