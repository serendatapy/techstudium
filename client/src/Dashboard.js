import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Components/Register/index';
import Login from './Components/Login/index';
import Profile from './Components/Profile/index';
import Logout from './Components/Logout/index';
import Home from './Components/Home/index';


const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <div className="dashboard">
      <Switch>
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              setIsAuthenticated={setIsAuthenticated}/>
          )}
        />
        <Route path="/profile" 
          render={(props) => (
            <Profile {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Dashboard;