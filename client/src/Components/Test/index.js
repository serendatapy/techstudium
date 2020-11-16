// Import the style for the component
import './index.css';
import ApiClient from '../../Services/AuthApiClient';
import { useState, useEffect } from 'react';

// Declare the Test component
function Test(props) {
  const category_name = props.match.params.category_name;

  const [questions, setQuestions] = useState([]);

  // Fetch the categories from the API call
  useEffect(() => {
    ApiClient.getCategory(category_name)
      .then(category => setQuestions(category.Questions));
  }, [])

  return (
    <div className="test-container">
      <div className="test-question">
        The question goes here {category_name}!
      </div>
      <div></div>
    </div>
  )
}

// Export the Test component
export default Test;