import { useEffect, useState } from 'react'
import QuizData from '../components/QuizData'
import { shuffle, parseQuotes } from '../lib'

const Quiz = () => {
  const [quizInfo, setQuizInfo] = useState([])
  const [isCheckingAnswers, setIsCheckingAnswers] = useState(false)
  const [score, setScore] = useState(0)

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=5&category=9')
      .then((res) => res.json())
      .then((res) => {
        const newArr = res.results.map((result) => {
          const answersArr = [
            ...result.incorrect_answers.map((answer) => ({
              value: parseQuotes(answer),
              isCorrect: false,
            })),
            { value: parseQuotes(result.correct_answer), isCorrect: true },
          ]
          return {
            question: parseQuotes(result.question),
            answers: shuffle(answersArr),
            selectedAnswer: null,
          }
        })
        setQuizInfo(newArr)
        setScore(newArr.length)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const setSelectedAnswer = (question, answer) => {
    const newQuizInfo = quizInfo.map((questionObj) => {
      if (questionObj.question === question) {
        questionObj.selectedAnswer = answer
      }
      return questionObj
    })
    setQuizInfo(newQuizInfo)
  }

  const checkAnswers = () => {
    const isCompleted = quizInfo.every(
      (questionObj) => questionObj.selectedAnswer !== null
    )
    if (isCheckingAnswers) {
      fetchData()
      setIsCheckingAnswers(false)
      return
    }
    if (isCompleted) {
      setIsCheckingAnswers(true)
      quizInfo.forEach((questionObj) => {
        !questionObj.selectedAnswer?.isCorrect && decrementScore()
      })
    }
  }

  const decrementScore = () => {
    setScore((prev) => prev - 1)
  }

  return (
    <main className='h-screen w-screen overflow-hidden'>
      <QuizData
        quizInfoArr={quizInfo}
        setSelectedAnswer={setSelectedAnswer}
        isCheckingAnswers={isCheckingAnswers}
      />
      <button
        className='flex border-2 border-sky-700 rounded-xl mx-auto my-16 p-4 bg-sky-700 text-white'
        onClick={checkAnswers}
      >
        {isCheckingAnswers ? 'Try Again' : 'Check Answers'}
      </button>
      {isCheckingAnswers && (
        <div className='flex w-screen justify-center text-2xl'>{`You scored a ${score}/${quizInfo.length}!`}</div>
      )}
    </main>
  )
}

export default Quiz
