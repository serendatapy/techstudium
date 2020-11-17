// Import the style for the component
import './index.css';
import PropTypes from 'prop-types';

// Declare the QuestionCount component
function QuestionCount({ props }) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

// Export the QuestionCount component
export default QuestionCount;