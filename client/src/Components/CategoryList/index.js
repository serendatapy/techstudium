// Import the style for the component
import './index.css';
import Category from '../Category/index';

// Declare the CategoryList component
function CategoryList() {
  return (
    <div className="category-list">
      <Category />
      <Category />
      <Category />
    </div>
  )
}

// Export the CategoryList component
export default CategoryList;