import React, { useState } from 'react';
import { useParams } from 'react-router';
import { BackButton, Loading, Navbar } from '../../features/ui';
import { useQuery } from 'react-query';
import { LevelsPhoneService } from '../../utils/api/services';
import { AudioPlayer } from '../../features/levels-phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const LevelsPhone: React.FC = () => {
  const { levels_phone_id } = useParams()
  const { data, isLoading } = useQuery(`level-phone ${levels_phone_id}`, () => LevelsPhoneService.findOne(Number(levels_phone_id) - 1))
  const [showHint, setShowHint] = useState<boolean>(false)

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
        <p className='mt-5 text-3xl'>Poziom {levels_phone_id}/9</p>
        <hr className='w-full h-px my-12 border-0 shadow-sm bg-bgSec' />
        <AudioPlayer audio={import.meta.env.VITE_API_URL_FOR_AUDIOS + data.content_media.url} />
        <p className='my-10 text-4xl font-semibold'>{data.content_message}</p>
        <div className='text-3xl font-bold text-white'>
          <button className='p-5 px-20 mr-8 transition duration-200 bg-green-700 rounded-full hover:shadow-inner hover:bg-green-800'>TAK</button>
          <button className='p-5 px-20 transition duration-200 bg-red-700 rounded-full hover:shadow-inner hover:bg-red-800'>NIE</button>
        </div>
        <button onClick={() => setShowHint(!showHint)} className='p-3 px-24 mt-8 text-2xl transition duration-200 bg-gray-300 rounded-full hover:shadow-inner hover:bg-gray-200'>
          {showHint ? "Schowaj" : "Uzyskaj"} podpowiedź
        </button>
        {
          showHint &&
            <div className='relative w-3/4 px-16 py-12 mt-10 shadow rounded-3xl bg-bgSec'>
              <p className='mb-5 text-3xl font-bold'>Podpowiedź do pytania</p>
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

export default LevelsPhone;