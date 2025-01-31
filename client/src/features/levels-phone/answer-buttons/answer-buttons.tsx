import React from 'react'
import useAnswerButtons from './use-answer-buttons'

interface Props {
  givenAnswer: boolean | undefined
  setGivenAnswer: React.Dispatch<React.SetStateAction<boolean | undefined>>
  correctAnswer: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean | undefined>>
  showResult: boolean
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
}

const AnswerButtons: React.FC<Props> = (props) => {
  const { showResult } = props
  const { checkAnswer } = useAnswerButtons({...props})

  return (
    <div>
      <button
        onClick={() => checkAnswer(true)}
        disabled={showResult}
        className={`p-5 px-20 mr-8 transition duration-200 bg-green-700 rounded-full hover:shadow-inner hover:opacity-85 ${props.givenAnswer || 'disabled:bg-zinc-400'}`}
      >
        TAK
      </button>
      <button
        onClick={() => checkAnswer(false)}
        disabled={showResult}
        className={`p-5 px-20 transition duration-200 bg-red-700 rounded-full hover:shadow-inner hover:opacity-85 ${!props.givenAnswer || 'disabled:bg-zinc-400'}`}
      >
        NIE
      </button>
    </div>
  )
}

export default AnswerButtons;