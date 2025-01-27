interface Props {
  correctAnswer: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
  setGivenAnswer: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

const useAnswerButtons = (props:Props) => {
  const { correctAnswer, setIsAnswerCorrect, setShowResult, setGivenAnswer } = props

  const checkAnswer = (givenAnswer:boolean) => {
    setGivenAnswer(givenAnswer)
    setShowResult(true)

    if(givenAnswer == correctAnswer) {
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }

  return {
    checkAnswer
  }
}

export default useAnswerButtons;