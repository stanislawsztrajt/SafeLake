import React, { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen'>
      <div className='flex gap-2'>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='w-8 h-8 bg-black rounded-full animate-bounce'></div>
      </div>
    </div>
    

  )
}

export default Loading;