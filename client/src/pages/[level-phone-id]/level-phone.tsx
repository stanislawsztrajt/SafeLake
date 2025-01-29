import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BackButton, Loading, Navbar } from '../../features/ui';
import { useQuery } from 'react-query';
import { LevelsPhoneService } from '../../utils/api/services';
import { AudioPlayer } from '../../features/levels-phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import AnswerButtons from '../../features/levels-phone/answer-buttons';
import { LEVELS_PHONE_NUMBER } from '../../utils/constants';
import { useCookies } from 'react-cookie';
import { CookieLevelProgress } from '../../utils/types/levels';

const LevelPhone: React.FC = () => {
  const { level_phone_id } = useParams()
  const { data, isLoading } = useQuery(`level-phone ${level_phone_id}`, () => LevelsPhoneService.findOne(Number(level_phone_id) - 1))
  const [cookies] = useCookies(['phone_progress'])

  const [showHint, setShowHint] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false)
  const [givenAnswer, setGivenAnswer] = useState<boolean>()

  useEffect(() => {
    const answers: CookieLevelProgress[] = cookies.phone_progress ?? [];
    const _givenAnswer = answers.find(answer => answer.id === level_phone_id)
    if (!_givenAnswer) return
    setShowResult(true)
    setIsAnswerCorrect(_givenAnswer.isCorrect)
    setGivenAnswer(_givenAnswer.isCorrect)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <div>Not found</div>
  }

  return (
    <div>
      <Navbar />
      <div className='m-4'>
        <BackButton />
      </div>
      <div className='flex flex-col items-center w-3/4 pb-20 mx-auto text-sec'>
        <p className='text-4xl font-bold'>Nauka rozpoznawania oszustw poprzez nagrania głosowe</p>
        <p className='mt-5 text-3xl'>Poziom {level_phone_id}/{LEVELS_PHONE_NUMBER}</p>
        <hr className='hr-default' />
        <AudioPlayer audio={import.meta.env.VITE_API_URL_FOR_AUDIOS + data.content_media.url} />
        <p className='my-10 text-4xl font-semibold'>{data.content_message}</p>
        <div className='text-3xl font-bold text-white'>
          <AnswerButtons
            givenAnswer={givenAnswer}
            setGivenAnswer={setGivenAnswer}
            correctAnswer={data.answer}
            setIsAnswerCorrect={setIsAnswerCorrect}
            showResult={showResult}
            setShowResult={setShowResult}
          />
        </div>
        <p className={`transition-opacity duration-300 font-semibold -mb-6 ${showResult ? "opacity-100 mt-6 text-4xl mb-0" : "opacity-0 invisible"}`}>
          Twoja odpowiedź jest
          <span className={`font-bold ${isAnswerCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isAnswerCorrect ? ' poprawna' : ' niepoprawna'}
          </span>!
        </p>
        <button onClick={() => setShowHint(!showHint)} className='p-3 px-24 mt-8 text-2xl text-white transition duration-200 rounded-full bg-pri hover:shadow-inner hover:opacity-85'>
          {showHint ? "Schowaj" : "Uzyskaj"} wskazówkę
        </button>
        {
          showHint &&
            <div className='relative w-3/4 px-16 py-12 mt-10 shadow rounded-3xl bg-bgSec'>
              <p className='mb-5 text-3xl font-bold'>Wskazówka do pytania</p>
              <p className='text-2xl'>{data.tip}</p>
              <button onClick={() => setShowHint(false)} className='absolute top-8 right-12'>
                <FontAwesomeIcon size='2x' icon={faX} />
              </button>
            </div>
        }
      </div>
    </div>
  )
}

export default LevelPhone;