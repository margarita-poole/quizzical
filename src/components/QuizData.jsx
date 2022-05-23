import Question from './Question'

const QuizData = ({ quizInfoArr, setSelectedAnswer, isCheckingAnswers }) => {
  return (
    <div className='mx-auto'>
      {quizInfoArr.map((questionObj) => (
        <Question
          obj={questionObj}
          setSelectedAnswer={setSelectedAnswer}
          key={questionObj.question}
          isCheckingAnswers={isCheckingAnswers}
        />
      ))}
    </div>
  )
}

export default QuizData
