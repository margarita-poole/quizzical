const Question = ({ obj, setSelectedAnswer, isCheckingAnswers }) => {
  return (
    <div className='mx-auto p-4 my-6 text-lg' key={obj._id}>
      <h1>{obj.question}</h1>
      <div className='flex mt-1'>
        {obj.answers.map((answer) => {
          const isSelected = answer.value === obj.selectedAnswer?.value

          const getButtonStyle = () => {
            const css = {}
            if (isSelected) {
              css.backgroundColor = 'white'
            }
            if(answer.isCorrect && isCheckingAnswers){
                css.backgroundColor = 'green'
            }
            if (isSelected && !obj.selectedAnswer?.isCorrect && isCheckingAnswers){
                css.backgroundColor = "red"
            }
            return css
          }

          return (
            <button
              key={answer.value}
              onClick={() => setSelectedAnswer(obj.question, answer)}
              className='border-2 border-slate-900 rounded-2xl px-2 mx-2 text-slate-900'
              style={getButtonStyle()}
            >
              {answer.value}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Question
