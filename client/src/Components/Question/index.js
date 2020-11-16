// Import the style for the component
import './index.css';

// Declare the Question component
function Question({ question }) {
  console.log("The question is: ", question);
  return (
    <div className="questions">
      {question.title}
    </div>
  )
}

// Export the Question component
export default Question;