import { FC } from 'react';
import { Navbar } from '../features/ui';
import { Link } from 'react-router-dom';
import UndrawPhone from '../assets/undraw_phone.png'
import UndrawSafe from '../assets/undraw_safe.png'
import UndrawSMS from '../assets/undraw_sms.png'

const Home: FC = () => {

  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center w-3/4 p-20 mx-auto text-xl leading-10 text-sec'>
        <h1 className='text-5xl font-bold text-center'>
          Bezpieczne rozmowy i SMS-y dla seniora
        </h1>
        <h2 className='flex mt-4 text-xl font-light text-center'>
          Dowiedz się, jak w prosty sposób wytłumaczyć seniorom, na co zwracać uwagę podczas odbierania
          telefonów i czytania wiadomości SMS, jak rozpoznawać próby oszustwa, unikać fałszywych numerów
          oraz chronić dane osobowe i finansowe.
        </h2>
        <div className='flex w-full mt-10 justify-evenly'>
          <Link to={'/levels-phone'} className='flex flex-row items-center justify-center p-5 mr-10 bg-white shadow-sm rounded-3xl'>
            <div>
              <img className='w-36' src={UndrawPhone} alt="" />
            </div>
            <p className='ml-10 text-3xl'>Nauka rozpoznawania oszustw poprzez nagrania głosowe</p>
          </Link>

          <Link to={'/levels-message'} className='flex flex-row items-center justify-center p-5 bg-white shadow-sm rounded-3xl'>
            <div>
              <img className='w-36' src={UndrawSMS} alt="" />
            </div>
            <p className='ml-10 text-3xl'>Nauka rozpoznawania oszustw poprzez wiadomości tekstowe</p>
          </Link>
        </div>
        <hr className='mx-auto hr-default' />
        <Link to={'/level-hack-intro'} className='flex flex-row items-center justify-center w-3/4 p-5 bg-white shadow-sm rounded-3xl'>
          <div>
            <img className='w-48' src={UndrawSafe} alt="" />
          </div>
          <p className='ml-10 text-3xl'>Nauka wykrywania błędów w zabezpieczeniach aplikacji</p>
        </Link>
      </div>
    </div>
  )
}

export default Home;