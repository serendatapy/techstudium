// Import the style for the component
import './index.css';
import ApiClient from '../../Services/AuthApiClient';
import { useState, useEffect } from 'react';
import Question from '../Question/index';
import AnswerList from '../AnswerList';

// Declare the Test component
function Test(props) {
  const category_name = props.match.params.category_name;
  const [question, setQuestions] = useState([]);

  // Fetch the categories from the API call
  useEffect(() => {
    ApiClient.getCategory(category_name)
      .then(category => setQuestions(category.Questions[0]));
  }, [])

  return (
    <div className="test-container">
      <div className="test-category">
        <h1>{category_name}</h1>
      </div>
      <div className="test-question">
        <Question question={question} />
      </div>
      <div className="test-answer-list">
        <AnswerList answers={question.Answers}/>
      </div>
    </div>
  )
}

// Export the Test component
export default Test;