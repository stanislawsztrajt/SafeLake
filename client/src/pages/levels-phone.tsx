import React from 'react';
import { BackButton, Loading, Navbar } from '../features/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { LEVELS_PHONE_NUMBER } from '../utils/constants';
import { useQuery } from 'react-query';
import { LevelsPhoneService } from '../utils/api/services';
import { DifficultyEnum } from '../utils/types/levels';

const LevelsPhone: React.FC = () => {
  const { data, isLoading } = useQuery(`level-phone`, () => LevelsPhoneService.find())

  const tempFinishedLevels = [22, 23, 24]

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
        <hr className='hr-default' />
        <Link to={`/level-phone/1`} className='flex flex-row items-center justify-between w-2/5 p-8 px-20 text-white transition duration-200 rounded-full bg-sec hover:shadow-inner hover:opacity-80'>
          <FontAwesomeIcon size='4x' icon={faBook} />
          <p className='ml-20 text-3xl font-semibold'>Rozpocznij naukę</p>
        </Link>
        <p className='my-5 text-2xl'>Aktualny postęp kursu: 33% (3 z {LEVELS_PHONE_NUMBER} zadań)</p>
        <div>
          <button className='p-3 mr-8 text-2xl text-white transition duration-200 rounded-full w-80 bg-pri hover:shadow-inner hover:opacity-85'>
            Zobacz szkolenie
          </button>
          <button className='p-3 text-2xl text-white transition duration-200 rounded-full bg-pri w-80 hover:shadow-inner hover:opacity-85'>
            Zresetuj postęp nauki
          </button>
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
                          tempFinishedLevels.includes(level.id) &&
                            <span> - Ukończony</span>
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
            <div className='flex items-center justify-between w-full p-4 px-8 mt-5 text-white bg-green-700 rounded-full'>
              <p className='mr-8 -mt-1 text-4xl'>87%</p>
              <p className='text-xl'>Poprawność odpowiedzi w aktualnym kursie</p>
            </div>
            <div className='flex items-center justify-between w-full p-4 px-8 mt-5 text-white bg-red-600 rounded-full'>
              <p className='mr-8 -mt-1 text-4xl'>33%</p>
              <p className='text-xl'>Poprawność odpowiedzi w ostatnim ukończonym kursie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelsPhone;