import { useCookies } from "react-cookie"
import { LevelType } from "../../../utils/types/levels"

interface Props {
  correctAnswer: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean | undefined>>
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
  setGivenAnswer: React.Dispatch<React.SetStateAction<boolean | undefined>>
  levelId: string
  levelType: LevelType
}

const useAnswerButtons = (props:Props) => {
  const { correctAnswer, setIsAnswerCorrect, setShowResult, setGivenAnswer, levelId, levelType } = props
  const [cookies, setCookie] = useCookies([`${levelType}_progress`])

  const checkAnswer = (givenAnswer:boolean) => {
    setGivenAnswer(givenAnswer)
    setShowResult(true)

    const isCorrect = givenAnswer === correctAnswer
    setIsAnswerCorrect(isCorrect)

    setCookie(
      `${levelType}_progress`,
      cookies[`${levelType}_progress`] ?
      [
        ...cookies[`${levelType}_progress`],
        { id: levelId, isCorrect, answer: givenAnswer }
      ] :
      [
        { id: levelId, isCorrect, answer: givenAnswer }
      ]
    )
  }

  return {
    checkAnswer
  }
}

export default useAnswerButtons;