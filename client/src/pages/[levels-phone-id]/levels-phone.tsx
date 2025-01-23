import React from 'react';
import { useParams } from 'react-router';
import { BackButton, Loading, Navbar } from '../../features/ui';
import { useQuery } from 'react-query';
import { LevelsPhoneService } from '../../utils/api/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const LevelsPhone: React.FC = () => {
  const { levels_phone_id } = useParams()
  const { data, isLoading } = useQuery(`level-phone ${levels_phone_id}`, () => LevelsPhoneService.findOne(Number(levels_phone_id) - 1))

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
      <div className='flex flex-col items-center w-3/4 mx-auto text-sec'>
        <p className='text-4xl font-bold'>Nauka rozpoznawania oszustw poprzez nagrania głosowe</p>
        <p className='mt-5 text-3xl'>Poziom {levels_phone_id}/9</p>
        <hr className='w-full h-px my-12 border-0 shadow-sm bg-bgSec' />
        <button className='flex flex-row items-center justify-between w-2/5 p-10 px-20 transition duration-200 rounded-full bg-bgSec hover:shadow-inner hover:bg-coolGray-200'>
          <FontAwesomeIcon size='4x' icon={true ? faPlayCircle : faPauseCircle} />
          <p className='ml-20 text-3xl font-semibold'>{true ? "Odtwórz" : "Zatrzymaj"} nagranie</p>
        </button>
        <p className='my-10 text-4xl font-semibold'>{data.content_message}</p>
        <div className='text-3xl font-bold text-white'>
          <button className='p-5 px-20 mr-8 transition duration-200 bg-green-700 rounded-full hover:shadow-inner hover:bg-green-800'>TAK</button>
          <button className='p-5 px-20 transition duration-200 bg-red-700 rounded-full hover:shadow-inner hover:bg-red-800'>NIE</button>
        </div>
        <button className='p-3 px-24 mt-8 text-2xl transition duration-200 bg-gray-300 rounded-full hover:shadow-inner hover:bg-gray-200'>Uzyskaj podpowiedź</button>
      </div>
    </div>
  )
}

export default LevelsPhone;