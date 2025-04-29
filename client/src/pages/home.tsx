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
      <div className='p-20 text-xl leading-10'>
        <h1 className='text-5xl font-bold text-center'>
          Bezpieczne rozmowy i SMS-y dla seniora
        </h1>
        <h2 className='flex mt-4 text-xl font-light text-center'>
          Dowiedz się, jak w prosty sposób wytłumaczyć seniorom, na co zwracać uwagę podczas odbierania
          telefonów i czytania wiadomości SMS, jak rozpoznawać próby oszustwa, unikać fałszywych numerów 
          oraz chronić dane osobowe i finansowe.
        </h2>
        <div className='flex'>
          <div>
            <Link to={'/levels-phone'}>Nauka rozpoznawania oszustw poprzez nagrania głosowe</Link>
            <div>
              <img className='w-36' src={UndrawPhone} alt="" />
            </div>
          </div>

          <div>
            <Link to={'/levels-message'}>Nauka UndrawSMSozpoznawania oszustw popUndrawSMSzez nagrania głosowe</Link>
            <div>
              <img className='w-36' src={UndrawSMS} alt="" />
            </div>
          </div>
        </div>
        

        <div>
          <Link to={'/level-hack-intro'}>Nauka wykrywania błędów w zabezpieczeniu aplikacji</Link>
          <div>
            <img className='w-48' src={UndrawSafe} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;