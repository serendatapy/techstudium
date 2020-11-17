// Import the style for the component
import './index.css';
import AnswerList from '../AnswerList/index';
import { useState } from 'react';


// Declare the Question component
function Question(props) {
  let question = props.question;

  const [selectedAnswer, setSelectedAnswer] = useState();

  const handleAnswerClick = value => {
    setSelectedAnswer(value);
    props.receivedAnswer(value);
  }

  return (
    <>
      <h1 className="questions">
        {question.title}
      </h1>
      <AnswerList
        answers={question.Answers}
        selectedAnswer={selectedAnswer}
        handleAnswerClick={handleAnswerClick}
      />
    </>
  )
}

// Export the Question component
export default Question;