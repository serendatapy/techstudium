// Import the style for the component
import './index.css';
import logo from '../../Assets/whitelogo.png'

// Declare the Login component
function Register() {
  return (
    <div className="container-image">
      <div className="login">
        <img className="logo" src={logo} />
        <form className="form">
        <div className="input-container">
            <input
              type="text"
              placeholder="first name"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="last name"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="email"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="password"
            />
          </div>
          <button className="register">Create account</button>
        </form></div>
    </div>
  )
}

// Export the Login component
export default Register;