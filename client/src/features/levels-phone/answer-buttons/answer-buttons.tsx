import React, { useState } from 'react'
import useAnswerButtons from './use-answer-buttons'

interface Props {
  correctAnswer: boolean
  setIsAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>
  showResult: boolean
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>
}

const AnswerButtons: React.FC<Props> = (props) => {
  const { showResult } = props
  const [givenAnswer, setGivenAnswer] = useState<boolean>()
  const { checkAnswer } = useAnswerButtons({...props, setGivenAnswer})

  return (
    <div>
      <button
        onClick={() => checkAnswer(true)}
        disabled={showResult}
        className={`p-5 px-20 mr-8 transition duration-200 bg-green-700 rounded-full hover:shadow-inner hover:opacity-85 ${givenAnswer || 'disabled:bg-zinc-400'}`}
      >
        TAK
      </button>
      <button
        onClick={() => checkAnswer(false)}
        disabled={showResult}
        className={`p-5 px-20 transition duration-200 bg-red-700 rounded-full hover:shadow-inner hover:opacity-85 ${!givenAnswer || 'disabled:bg-zinc-400'}`}
      >
        NIE
      </button>
    </div>
  )
}

export default AnswerButtons;