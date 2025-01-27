import { FC } from 'react';
import { Navbar } from '../features/ui';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <div className='p-20 text-xl leading-10'>
        <p>HOME</p>
        <Link to={'/levels-phone'}>Nauka rozpoznawania oszustw poprzez nagrania głosowe</Link>
      </div>
    </div>
  )
}

export default Home;