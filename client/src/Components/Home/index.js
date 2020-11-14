// Import the style for the component
import './index.css';
import homeImage from '../../assets/laptop.jpg'
import { Link } from 'react-router-dom';

// Declare the Home component
function Home() {
  return (
    <div className="container">
      <div className="image-container">
        <img className="image default-shadow" src={homeImage} />
        <div className="box default-shadow" />
      </div>
      <div className="text-container">
        <h1 className="title">Welcome</h1>
        <p className="description">
        Have you ever felt stressed over an upcoming interview? Battled Imposter Syndrome?
        <br/><br />
        Tech Studium is the resource to help YOU help you!
        <br />
        Practice whenever you want, wherever you want, so you can face the world prepared and confident.
        </p>
        <Link to="/login">
          <button className="home-login-button">Get started</button>
        </Link>
      </div>
    </div>
  )
}

// Export the Home component
export default Home;