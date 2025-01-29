import { useCookies } from "react-cookie"
import { useParams } from "react-router"

interface Props {
  correctAnswer: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
  setGivenAnswer: React.Dispatch<React.SetStateAction<boolean | undefined>>
}



const useAnswerButtons = (props:Props) => {
  const { correctAnswer, setIsAnswerCorrect, setShowResult, setGivenAnswer } = props
  const [cookies, setCookie] = useCookies(['phone_progress'])
  const { level_phone_id } = useParams()

  const checkAnswer = (givenAnswer:boolean) => {
    setGivenAnswer(givenAnswer)
    setShowResult(true)

    const isCorrect = givenAnswer === correctAnswer
    setIsAnswerCorrect(isCorrect)

    setCookie(
      'phone_progress', 
      cookies.phone_progress ? 
      [
        ...cookies.phone_progress, 
        { id: level_phone_id, isCorrect, answer: givenAnswer }
      ] :
      [
        { id: level_phone_id, isCorrect, answer: givenAnswer }
      ]
    )
  }

  return {
    checkAnswer
  }
}

export default useAnswerButtons;