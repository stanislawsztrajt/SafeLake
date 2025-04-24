import React from 'react';
import { BackButton, Navbar } from '../features/ui';
import startCourseButtonImg from '../assets/rozpocznij.jpg'
import audioButtonImg from '../assets/przycisk-audio.jpg'
import questionImg from '../assets/pytanie-messages.jpg'
import buttonsImg from '../assets/przyciski.jpg'
import hintImg from '../assets/wskazowka.jpg'


const LevelsPhoneTutorial: React.FC = () => {

  return (
    <div>
      <Navbar />
      <div className='m-4'>
        <BackButton customLocation='/' />
      </div>
      <div className='flex flex-col items-center w-3/4 pb-20 mx-auto text-sec'>
        <p className='text-4xl font-bold'>Szkolenie do rozpoznawania oszustw poprzez nagrania głosowe</p>
        <hr className='hr-default' />
        <div className='w-2/3'>
          <div className='text-2xl'>
            <p className='mb-1 text-3xl font-bold'>Krok 1</p>
            <p className='mb-4'>Rozpocznij naukę poprzez naciśnięcie dużego granatowwego przycisku</p>
            <img className='w-80' src={startCourseButtonImg} />
          </div>
          <hr className='hr-default' />
          <div className='mt-10 text-2xl'>
            <p className='mb-1 text-3xl font-bold'>Krok 2</p>
            <p className='mb-4'>Zapoznaj się z wiadomością głosową poprzez naciśnięcie błękitnego przycisku</p>
            <img className='w-96' src={audioButtonImg} />
          </div>
          <hr className='hr-default' />
          <div className='mt-10 text-2xl'>
            <p className='mb-1 text-3xl font-bold'>Krok 3</p>
            <p className='mb-4'>Zapoznaj się z treścią pytania (przykładowe pokazane niżej)</p>
            <img className='w-96' src={questionImg} />
          </div>
          <hr className='hr-default' />
          <div className='mt-10 text-2xl'>
            <p className='mb-1 text-3xl font-bold'>Krok 4</p>
            <p className='mb-4'>Udziel odpowiedzi na pytanie poprzez jeden z przycisków</p>
            <img className='w-96' src={buttonsImg} />
          </div>
          <hr className='hr-default' />
          <div className='mt-10 text-2xl'>
            <p className='mb-1 text-3xl font-bold'>Warto wiedzieć!</p>
            <p className='mb-4'>W przypadku gdy nie jesteś pewny jaka odpowiedź jest poprawna, możesz skorzystać z wskazówki. Wystarczy nacisnąć niebieski przycisk, który znajduje się pod przyciskami do udzielenia odpowiedzi</p>
            <img className='w-96' src={hintImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelsPhoneTutorial;