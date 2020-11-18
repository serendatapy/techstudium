// Import the style for the component
import './index.css';
import { Link } from 'react-router-dom';

// Declare the Category component
function Category({ category }) {
  const name = category.name;
  return (
    <Link to={`/test/${name}`}>
      <button className="category-thumbnail">
        {name}
      </button>
    </Link>
  )
}

// Export the Category component
export default Category;