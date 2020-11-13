// Import the style for the component
import './index.css';
import logo from '../../assets/whitelogo.png'

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
            placeholder="username"
          />
          </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="password"
          />
        </div>
        <button>&nbsp;Login&nbsp;</button>
        </form>
      <p>Forgot your password?</p>
    </div>
    </div >
  )
}

// Export the Login component
export default Login;