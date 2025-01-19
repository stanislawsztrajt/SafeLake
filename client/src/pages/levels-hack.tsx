import React, { FC } from 'react';

const LevelsHack: FC = () => {
  return (
    <section className='border-r h-screen w-64'>
      <ol>
      { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(el => (
        <li className='text-center p-2'>Poziom {el}</li>
      ))}
      </ol>
    </section>
  )
}

export default LevelsHack;