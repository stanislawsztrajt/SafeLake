import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BackButton, Loading, Navbar } from '../../features/ui';
import { useQuery } from 'react-query';
import { LevelsMessageService } from '../../utils/api/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLightbulb, faX } from '@fortawesome/free-solid-svg-icons';
import AnswerButtons from '../../features/levels-phone/answer-buttons';
import { LEVELS_MESSAGE_NUMBER } from '../../utils/constants';
import { useCookies } from 'react-cookie';
import { CookieLevelProgress, LevelsEnum } from '../../utils/types/levels';
import { Link } from 'react-router-dom';
import placeholderImage from '../../assets/img-placeholder.png'

const LevelMessage: React.FC = () => {
  const { level_message_id } = useParams()
  const { data, isLoading } = useQuery(`level-message ${level_message_id}`, () => LevelsMessageService.findOne(Number(level_message_id) - 1))
  const [cookies] = useCookies(['message_progress'])

  const [showHint, setShowHint] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>()
  const [givenAnswer, setGivenAnswer] = useState<boolean>()
  const [displaySummary, setDisplaySummary] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  useEffect(() => {
    const answers: CookieLevelProgress[] = cookies.message_progress ?? [];
    const _givenAnswer = answers.find(answer => answer.id === level_message_id)
    if (!_givenAnswer) return
    setShowResult(true)
    setIsAnswerCorrect(_givenAnswer.isCorrect)
    setGivenAnswer(_givenAnswer.answer)
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
        <div className='flex flex-col items-center w-full'>
          <p className='text-4xl font-bold'>Nauka rozpoznawania oszustw poprzez wiadomości tekstowe</p>
          <p className='mt-5 text-3xl'>Poziom {level_message_id}/{LEVELS_MESSAGE_NUMBER}</p>
          <hr className='hr-default' />
        </div>
        <div className={`flex flex-col items-center w-full ${displaySummary ? 'hidden' : ''}`}>
          <div className='w-full overflow-hidden border rounded-md shadow-sm md:w-1/3'>
          <img
            onLoad={() => setImageLoaded(true)}
            src={imageLoaded ? data.real_photo.url : placeholderImage}
          />
          </div>
          <p className='my-10 text-4xl font-semibold'>{data.question}</p>
          <div className='text-3xl font-bold text-white'>
            <AnswerButtons
              givenAnswer={givenAnswer}
              setGivenAnswer={setGivenAnswer}
              correctAnswer={data.answer}
              setIsAnswerCorrect={setIsAnswerCorrect}
              showResult={showResult}
              setShowResult={setShowResult}
              levelId={`${level_message_id}`}
              levelType={LevelsEnum.MESSAGE}
            />
          </div>
          <p className={`transition-opacity duration-300 font-semibold -mb-6 ${showResult ? "opacity-100 mt-6 text-4xl mb-0" : "opacity-0 invisible"}`}>
            Twoja odpowiedź jest
            <span className={`font-bold ${isAnswerCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isAnswerCorrect ? ' poprawna' : ' niepoprawna'}
            </span>!
          </p>
        </div>
        <div className={`flex flex-col items-center w-full ${displaySummary ? '' : 'hidden'}`}>
          <p className='text-3xl font-semibold'>
            Podsumowanie pytania: <span className='text-pri'>{data.question}</span>
          </p>
          <p className='mt-10 text-4xl'>
            Udzielona przez Ciebie odpowiedź, to:
            <span className={`font-bold ${givenAnswer ? "text-green-700" : "text-red-700"}`}> {givenAnswer ? "TAK" : "NIE"}</span>, i jest ona
            <span className={`font-bold ${isAnswerCorrect ? "text-green-700" : "text-red-700"}`}> {isAnswerCorrect ? "POPRAWNA" : "NIEPOPRAWNA"}</span>
          </p>
          <div className='relative w-3/4 px-16 py-12 mt-10 shadow rounded-3xl bg-bgSec'>
            <p className='mb-5 text-3xl font-bold'>Wyjaśnienie odpowiedzi</p>
            <p className='text-2xl'>{data.explanation}</p>
          </div>

        </div>
        {
          showResult ?
            <div className='flex flex-row'>
              <button onClick={() => setDisplaySummary(!displaySummary)} className='p-3 px-24 mt-8 text-2xl text-white transition duration-200 rounded-full bg-sec hover:shadow-inner hover:opacity-85'>
                <FontAwesomeIcon className="mr-5" icon={displaySummary ? faArrowLeft : faLightbulb}/>
                <span>{displaySummary ? "Wróć do pytania" : "Przejdź do podsumowania"}</span>
              </button>
              {
                !displaySummary &&
                <div>
                  <span className='mx-5 text-2xl'>lub</span>
                  <Link to="/levels-message" className='inline-block p-3 px-24 mt-8 text-2xl text-white transition duration-200 rounded-full bg-sec hover:shadow-inner hover:opacity-85'>
                    <FontAwesomeIcon className="mr-5" icon={faArrowLeft}/>
                    <span>Wróć do menu głównego</span>
                  </Link>
                </div>
              }
            </div>
          :
            <button onClick={() => setShowHint(!showHint)} className='p-3 px-24 mt-8 text-2xl text-white transition duration-200 rounded-full bg-pri hover:shadow-inner hover:opacity-85'>
              {showHint ? "Schowaj" : "Uzyskaj"} wskazówkę
            </button>
        }
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

export default LevelMessage;
