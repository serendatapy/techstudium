// Import the style for the component
import './index.css';
import Answer from '../Answer/index';

// Declare the AnswerList component
function AnswerList({ answers }) {
  // Getting the answers to display
  let answersToDisplay = [];

  // The function will find the correct answer for the question in the array of answers
  function findCorrectAnswer(isCorrectBoolVal, answers) {
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].isCorrect === isCorrectBoolVal) {
        return answers[i];
      }
    }
  }

  // Push the correct answer to the answers to display array
  answersToDisplay.push(findCorrectAnswer(true, answers));

  // Remove the correct answer from the list of answers
  answers = answers.filter(obj => { return obj.isCorrect !== true });

  // The function will randomly select three wrong answers to display
  function selectRandom3WrongAnswers(arr, n) {
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

  console.log("Answers: ", answersToDisplay.concat(selectRandom3WrongAnswers(answers, 3)));

  // Append the wrong answers
  answersToDisplay = answersToDisplay.concat(selectRandom3WrongAnswers(answers, 3));

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

  console.log("Answers to display: ", answersToDisplay);

  return (
    <div className="answer-list">
      {shuffleAnswers(answersToDisplay).map(answer => <Answer key={answer.id} answer={answer} />)}
    </div>
  )
}

// Export the AnswerList component
export default AnswerList;