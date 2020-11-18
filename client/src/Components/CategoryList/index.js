// Import the style for the component
import './index.css';
import Category from '../Category/index';

// Declare the CategoryList component
function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map(category => <Category key={category.id} category={category} />)}
    </div>
  )
}

// Export the CategoryList component
export default CategoryList;