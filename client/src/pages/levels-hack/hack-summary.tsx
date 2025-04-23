import { FC, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { LEVELS_HACK_NUMBER } from '../../utils/constants/number_of_levels';
import { Link } from 'react-router-dom';

const HackSumarry: FC = () => {
  const [cookies,, removeCookie] = useCookies(['hack_progress'])
  const navigate = useNavigate()

  useEffect(() => {
    if (!cookies.hack_progress) {
      navigate('/level-hack/1')
    }
    else if (cookies.hack_progress.length !== LEVELS_HACK_NUMBER ) {
      navigate(`/level-hack/${cookies.hack_progress.length}`)
    } else return
  }, [])

  const resetProgress = () => {
    removeCookie('hack_progress')
  }

  return (
    <div className='flex justify-center w-screen h-screen px-2 font-mono text-white bg-black' style={{ fontFamily: 'Courier New', color: '#0f0' }}>
      <section className='w-2/3 mt-48 '>
        <h1>Gratulacje!</h1>
        <p>Udało ci się ukończyć poziomy odpowiedzialne za zabezpieczanie aplikacji</p>
        <div className='flex gap-4 mt-4'>
          <Link
            onClick={resetProgress} 
            to={`/level-hack/1`} 
            className='px-4 py-2 text-xl duration-100 border hover:opacity-50' 
            style={{ borderColor: '#0f0' }}
          >
            Zresetuj postęp
          </Link>
          <Link
            to={`/`} 
            className='px-4 py-2 text-xl duration-100 border hover:opacity-50' 
            style={{ borderColor: '#0f0' }}
          >
            Wróć do strony głównej
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HackSumarry;