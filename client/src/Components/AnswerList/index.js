// Import the style for the component
import './index.css';
import Answer from '../Answer/index';

// Declare the AnswerList component
function AnswerList(props) {
  let answers = props.answers;
  // Getting the answers to display
  let answersToDisplay = [];

  // The function will find the correct answer for the question in the array of answers
  const correctAnswer = answers.filter(answer => answer.isCorrect === true)[0];
  // Push the correct answer to the answers to display array
  answersToDisplay.push(correctAnswer);

  // Remove the correct answer from the list of answers
  const wrongAnswers = answers.filter(obj => obj.isCorrect !== true);

  // Append the wrong answers
  answersToDisplay = answersToDisplay.concat(selectRandomAnswers(wrongAnswers, 3));

  const handleAnswerClickLocally = (event) => {
    props.handleAnswerClick(event.target.value);
  }
  return (
    <div className="answer-list">
      {shuffleAnswers(answersToDisplay)
        .map(answer =>
          <Answer
            key={answer.id}
            answer={answer}
            handleAnswerClick={handleAnswerClickLocally}
            selected={props.selectedAnswer === answer} />)}
    </div>
  )
}

// Export the AnswerList component
export default AnswerList;

// The function shuffles the answers in order to not always put the correct answers first
function shuffleAnswers(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// The function will randomly select three wrong answers to display
function selectRandomAnswers(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}