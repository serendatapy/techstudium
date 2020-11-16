// Import the style for the component
import './index.css';

// Declare the Category component
function Category({category}) {
  return (
    <button className="category-thumbnail">
      {category.name}
    </button>
  )
}

// Export the Category component
export default Category;