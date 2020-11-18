function Result(props) {
  console.log(props.resultArray);

  const result = props.resultArray.map(item => <div>Question id {item.questionId} with answer {item.answerGiven === "true" ? "correct" : "wrong"}</div>);
  return (
    <div>
      {result}
    </div>
  )
}

export default Result;