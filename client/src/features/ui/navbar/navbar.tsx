import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='w-full py-6 px-28 bg-pri'>
      <Link to={'/'} className='text-4xl text-white'>SafeLake</Link>
    </div>
  )
}

export default Navbar;