// Import the style for the component
import './index.css';
import CategoryList from '../CategoryList/index';
import ApiClient from '../../Services/AuthApiClient';

// Import the neccessary packages
import { useState, useEffect } from 'react';

// Declare the Profile component
function Profile(props) {
  const [categories, setCategories] = useState([]);

  const userInfo = props.location.state.userinfo;
  const name = userInfo.first_name.charAt(0).toUpperCase() + userInfo.first_name.slice(1);

  // Fetch the categories from the API call
  useEffect(() => {
    ApiClient.getCategories()
      .then(categories => setCategories(categories));
  }, [])

  return (
    <div className="profile-container">
      <div className="profile-greeting">
        <h1>Welcome back, {name}!</h1>
        <p>Which subject would you like to test today?</p>
      </div>
      <div className="category-list">
        <CategoryList categories={categories.sort()}/>
      </div>
    </div>
  )
}

// Export the Profile component
export default Profile;