// Import the style for the component
import './index.css';
import logo from '../../Assets/white_logo_transparent_background2.png'

// Declare the NavBar component
function NavBar() {
  return (
    <div className="navbar-container">
      <img src={logo} height="100%"/>
      <div className="nav-items">
        <ion-icon name="person-circle-outline"></ion-icon>
      </div>
    </div>
  )
}

// Export the NavBar component
export default NavBar;