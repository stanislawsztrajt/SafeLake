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
      <div className='flex flex-col items-center w-full p-4 mx-auto text-xl leading-10 lg:p-8 xl:w-3/4 xl:p-20 text-sec'>
        <h1 className='text-5xl font-bold text-center'>
          Bezpieczne rozmowy i SMS-y dla seniora
        </h1>
        <h2 className='flex mt-4 text-xl font-light text-center'>
          Dowiedz się, jak w prosty sposób wytłumaczyć seniorom, na co zwracać uwagę podczas odbierania
          telefonów i czytania wiadomości SMS, jak rozpoznawać próby oszustwa, unikać fałszywych numerów
          oraz chronić dane osobowe i finansowe.
        </h2>
        <div className='flex flex-col w-full mt-10 lg:flex-row justify-evenly'>
          <Link to={'/levels-phone'} className='flex flex-row items-center justify-center w-full p-5 mr-10 duration-100 bg-white shadow-sm lg:w-auto hover:opacity-70 rounded-3xl'>
            <div>
              <img className='w-36' src={UndrawPhone} alt="" />
            </div>
            <p className='ml-10 text-xl lg:text-2xl xl:text-3xl'>Nauka rozpoznawania oszustw poprzez nagrania głosowe</p>
          </Link>

          <Link to={'/levels-message'} className='flex flex-row items-center justify-center w-full p-5 mt-4 duration-100 bg-white shadow-sm lg:mt-0 lg:w-auto hover:opacity-70 rounded-3xl'>
            <div>
              <img className='w-36' src={UndrawSMS} alt="" />
            </div>
            <p className='ml-10 text-xl lg:text-2xl xl:text-3xl'>Nauka rozpoznawania oszustw poprzez wiadomości tekstowe</p>
          </Link>
        </div>
        <hr className='mx-auto hr-default' />
        <h1 className='text-5xl font-bold text-center'>
          Zabezpieczenie aplikacji dla młodych programistów
        </h1>
        <h2 className='flex mt-4 text-xl font-light text-center'>
          
        </h2>
        <Link to={'/level-hack-intro'} className='flex flex-row items-center justify-center w-full p-5 mt-10 duration-100 bg-white shadow-sm lg:w-3/4 hover:opacity-70 rounded-3xl'>
          <div>
            <img className='w-48' src={UndrawSafe} alt="" />
          </div>
          <p className='ml-10 text-xl lg:text-2xl xl:text-3xl'>Nauka wykrywania błędów w zabezpieczeniach aplikacji</p>
        </Link>
      </div>
      <footer className="m-4 bg-white rounded-lg shadow-sm ">
          <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {(new Date()).getFullYear()} <a href="https://github.com/stanislawsztrajt/safelake" className="hover:underline">Stanisław Sztrajt, Kordian Janowski</a>, Wszelkie prawa zastrzeżone
          </span>
          </div>
      </footer>
    </div>
  )
}

export default Home;