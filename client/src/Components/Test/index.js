// Import the style for the component
import './index.css';
import ApiClient from '../../Services/AuthApiClient';
import { useState, useEffect } from 'react';
import Question from '../Question/index';
import Progress from '../Progress/index';
import Result from '../Result/index';

// Declare the Test component
function Test(props) {
  const category_name = props.match.params.category_name;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resultArray, setResultArray] = useState([]);

  const createResultArray = (data) => {

  }

  // Fetch the categories from the API call
  useEffect(async () => {
    await ApiClient.getCategory(category_name)
      .then(category => {
        setQuestions(category.Questions);
        let whatever = [];
        category.Questions.forEach(question => {
          whatever.push({ questionId: question.id, answerGiven: null });
        })
        console.log(whatever);
        setResultArray(whatever);
      });
  }, []);

  const incrementCurrentIndex = (value) => {
    if (resultArray !== []) {

      const localArray = resultArray;
      localArray[currentQuestionIndex].answerGiven = value;
      setResultArray(localArray);
      console.log(resultArray);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const questionData = questions[currentQuestionIndex] ? questions[currentQuestionIndex] : null;

  return (
    questions ? (<div className="test-container">
      <div className="test-category">
        <h1>{category_name}</h1>
      </div>
      {currentQuestionIndex < questions.length ?
        <Progress total={questions.length} current={currentQuestionIndex + 1} /> : null}

      {questionData ? <Question
        question={questions[currentQuestionIndex]}
        receivedAnswer={incrementCurrentIndex} /> : null}
      {currentQuestionIndex === questions.length ? <Result resultArray={resultArray} /> : null}
    </div>) : (<span>Loading test...</span>)
  )
}

// Export the Test component
export default Test;