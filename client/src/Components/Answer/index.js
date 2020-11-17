// Import the style for the component
import './index.css';

function Answer({ answer }) {
  function handleClick() {

  }

  return (
    <div className="answer-container">
      <button onClick={handleClick}>
        {answer.text}
      </button>
    </div>
  )
}

// Export the Answer component
export default Answer;