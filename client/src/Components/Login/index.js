// Import the style for the component
import './index.css';
import logo from '../../Assets/whitelogo.png'

// Declare the Login component
function Login() {
  return (
    <div className="container-image">
      <div className="login">
        <img className="logo" src={logo} />
        <form className="form">
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
          <button className="login-button">Sign in</button>
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