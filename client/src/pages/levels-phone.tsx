import React, { useEffect, useState } from 'react';
import { BackButton, Loading, Navbar } from '../features/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { LEVELS_PHONE_NUMBER } from '../utils/constants/number_of_levels';
import { useQuery } from 'react-query';
import { LevelsPhoneService } from '../utils/api/services';
import { CookieLevelProgress, DifficultyEnum } from '../utils/types/levels';
import { useCookies } from 'react-cookie';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const LevelsPhone: React.FC = () => {
  const { data, isLoading } = useQuery(`level-phone`, () => LevelsPhoneService.find())
  const [cookies, setCookie] = useCookies(['phone_progress'])
  const [answers, setAnswers] = useState<CookieLevelProgress[]>([])
  const [answersIds, setAnswersIds] = useState<number[]>([])
  const [answersAccuracy, setAnswersAccuracy] = useState<number>()
  const [nextLevel, setNextLevel] = useState<number | null>(1)

  useEffect(() => {
    const answers: CookieLevelProgress[] = cookies.phone_progress ?? [];
    const answersIds = answers.map(answer => Number(answer.id))
    const correct = answers.filter(answer => answer.isCorrect).length;
    const nextLevel = [...Array(9)].map((_, i) => i + 1).find(n => !answersIds.includes(n)) || null;

    setAnswers(answers)
    setAnswersIds(answersIds)
    setAnswersAccuracy(Math.round((correct/answers.length)*100))
    setNextLevel(nextLevel)
  }, [])

  const resetProgress = () => {
    setCookie('phone_progress', [])
    setAnswersIds([])
    setAnswersAccuracy(NaN)
    setNextLevel(1)
  }

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
        <BackButton customLocation='/' />
      </div>
      <div className='flex flex-col items-center w-3/4 pb-20 mx-auto text-sec'>
        <p className='text-4xl font-bold'>Nauka rozpoznawania oszustw poprzez nagrania głosowe</p>
        <hr className='hr-default' />
        <Link
          to={answersIds.length < LEVELS_PHONE_NUMBER && nextLevel ? `/level-phone/${nextLevel}` : ''}
          onClick={answersIds.length < LEVELS_PHONE_NUMBER ? () => {} : resetProgress}
          className='flex flex-row items-center justify-between w-2/5 p-8 px-16 text-white transition duration-200 rounded-full bg-sec hover:shadow-inner hover:opacity-80'
        >
          <FontAwesomeIcon size='4x' icon={answersIds.length < LEVELS_PHONE_NUMBER ? faBook : faArrowRotateBack} />
          <p className='ml-20 text-3xl font-semibold'>
            {`${answersIds.length === 0 ? 'Rozpocznij naukę' : answersIds.length < LEVELS_PHONE_NUMBER ? 'Kontynuuj naukę' : 'Zresetuj postęp kursu'}`}
          </p>
        </Link>
        <p className='my-5 text-2xl'>Aktualny postęp kursu: {Math.round((answersIds.length/LEVELS_PHONE_NUMBER)*100)}% ({answersIds.length} z {LEVELS_PHONE_NUMBER} zadań)</p>
        <div className='flex flex-row'>
          <Link to={'/levels-phone-tutorial'} className='flex items-center justify-center p-3 text-2xl text-white transition duration-200 rounded-full w-80 bg-pri hover:shadow-inner hover:opacity-85'>
            Zobacz szkolenie
          </Link>
          {
            answersIds.length !== LEVELS_PHONE_NUMBER &&
              <button onClick={resetProgress} className='p-3 ml-8 text-2xl text-white transition duration-200 rounded-full bg-pri w-80 hover:shadow-inner hover:opacity-85'>
                Zresetuj postęp nauki
              </button>
          }
        </div>
        <hr className='hr-default' />
        <div className='flex justify-between w-4/5'>
          <div className='w-3/5'>
            <p className='text-3xl font-semibold'>Lista dostępnych poziomów:</p>
            <ol className='list-disc ml-7'>
              {
                data.map((level, _num) => {
                  return (
                    <Link to={`/level-phone/${_num+1}`}>
                      <li key={level.id} className='mt-5 text-2xl'>
                        Poziom {_num+1} - {" "}
                        <span className={`font-semibold ${level.difficulty === DifficultyEnum.EASY ? "text-green-700" : level.difficulty === DifficultyEnum.MEDIUM ? "text-yellow-600" : "text-red-700"}`}>
                          {level.difficulty}
                        </span>
                        {
                          answersIds.includes(_num+1) &&
                          <>
                            <span> - Ukończony</span>
                            <span className={`ml-3 ${answers.find(a => Number(a.id) === _num+1)?.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                              <FontAwesomeIcon icon={answers.find(a => Number(a.id) === _num+1)?.isCorrect ? faCheckCircle : faCircleXmark} />
                            </span>
                          </>
                        }
                      </li>
                    </Link>
                  )
                })
              }
            </ol>
          </div>
          <div className='w-2/5'>
            <p className='text-3xl font-semibold'>Statystyki:</p>
            {
              answersAccuracy ?
                <div className={`flex items-center justify-between w-full p-4 px-8 mt-5 text-white rounded-full ${answersAccuracy <= 33 ? 'bg-red-600' : answersAccuracy <= 66 ? 'bg-yellow-600' : 'bg-green-600'}`}>
                  <p className='mr-8 -mt-1 text-4xl'>{answersAccuracy}%</p>
                  <p className='text-xl'>Poprawność odpowiedzi w aktualnym kursie</p>
                </div>
              : ''
            }
            {/* <div className='flex items-center justify-between w-full p-4 px-8 mt-5 text-white bg-red-600 rounded-full'>
              <p className='mr-8 -mt-1 text-4xl'>33%</p>
              <p className='text-xl'>Poprawność odpowiedzi w ostatnim ukończonym kursie</p>
            </div> */}
            {
              !answersAccuracy ?
               <p className='mt-5 text-2xl'>Rozwiąż kilka poziomów, aby zobaczyć statystyki.</p>
              : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelsPhone;