import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import useAudioPlayer from './use-audio-player';

interface Props {
  audio: any
}

const AudioPlayer: React.FC<Props> = (props) => {
  const { playAudio, pauseAudio, isAudioPlaying } = useAudioPlayer(props)

  return (
    <button onClick={isAudioPlaying ? pauseAudio : playAudio} className='flex flex-row items-center justify-between w-2/5 p-10 px-20 transition duration-200 rounded-full bg-bgSec hover:shadow-inner hover:bg-coolGray-200'>
      <FontAwesomeIcon size='4x' icon={isAudioPlaying ? faPauseCircle : faPlayCircle} />
      <p className='ml-20 text-3xl font-semibold'>{isAudioPlaying ? "Zatrzymaj" : "Odtwórz"} nagranie</p>
    </button>
  )
}

export default AudioPlayer;