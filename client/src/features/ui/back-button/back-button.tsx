import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import useBackButton from './use-back-button';

const BackButton: React.FC = () => {
  const { getToPreviousLocation } = useBackButton()

  return (
    <button onClick={getToPreviousLocation} className='flex flex-row items-center text-sec'>
      <FontAwesomeIcon size='2x' icon={faArrowLeftLong} />
      <span className='ml-2 text-3xl font-semibold'>Powrót</span>
    </button>
  )
}

export default BackButton;