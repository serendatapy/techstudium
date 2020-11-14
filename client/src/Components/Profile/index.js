// Import the style for the component
import CategoryList from '../CategoryList/index';
import './index.css';

// Declare the Profile component
function Profile(props) {
  const userInfo = props.location.state.userinfo;
  const name = userInfo.first_name.charAt(0).toUpperCase() + userInfo.first_name.slice(1);
  return (
    <div className="profile-container">
      <div className="profile-greeting">
        <h1>Welcome back {name}</h1>
        <p>Which subject would you like to test today?</p>
      </div>
      <div className="category-list">
        <CategoryList />
      </div>
    </div>
  )
}

// Export the Profile component
export default Profile;