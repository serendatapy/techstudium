// Import the style for the component
import './index.css';

// Declare the Question component
function Question({ question }) {
  return (
    <div className="questions">
      {question.title}
    </div>
  )
}

// Export the Question component
export default Question;