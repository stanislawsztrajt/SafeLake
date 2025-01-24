import { useState } from "react"
import useSound from 'use-sound';

interface Props {
  audio: any
}

const useAudioPlayer = (props:Props) => {
  const { audio } = props
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false)
  const [play, { stop }] = useSound(audio, {
    onend: () => setIsAudioPlaying(false)
  });

  const playAudio = () => {
    setIsAudioPlaying(true)
    play()
  }

  const pauseAudio = () => {
    setIsAudioPlaying(false)
    stop()
  }

  return {
    playAudio,
    pauseAudio,
    isAudioPlaying
  }
}

export default useAudioPlayer;