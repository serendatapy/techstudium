// Import the style for the component
import './index.css';

function Answer(props) {
  const answer = props.answer;

  const buttonClasses = props.selected ? 'answer selected' : 'answer'

  return (
    <div className="answer-container">
      <button
        value={answer.isCorrect}
        className={buttonClasses}
        onClick={props.handleAnswerClick}>
        {answer.text}
      </button>
    </div>
  )
}

// Export the Answer component
export default Answer;