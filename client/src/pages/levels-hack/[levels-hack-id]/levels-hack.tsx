import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { LevelsHackService } from '../../../utils/api/services';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../../features/ui/loading';
import { LEVELS_HACK_NUMBER } from '../../../utils/constants/number_of_levels';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const LevelsHack: FC = () => {
  const { levels_hack_id } = useParams()
  const { data, isLoading } = useQuery(`level-hack ${levels_hack_id}`, () => LevelsHackService.findOne(Number(levels_hack_id) - 1))
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [cookies, setCookie] = useCookies(['hack_progress'])
  const navigate = useNavigate()

  useEffect(() => {
    // if user is starting defualt case
    if (!cookies.hack_progress && levels_hack_id === '1') {
      return
    }
    // if user finished levels and try to do no existing levels
    else if (cookies.hack_progress.length === LEVELS_HACK_NUMBER) {
      navigate(`/level-hack-summary`)
    }
    // if user starting and go for other level case
    else if (!cookies.hack_progress && levels_hack_id !== '1') {
      navigate(`/level-hack/1`)
    }
    // if user is on the level but trying to go to lower or higher level
    else if (Number(levels_hack_id) !== cookies.hack_progress.length + 1) {
      navigate(`/level-hack/${cookies.hack_progress.length + 1}`)
    }
  }, [])

  const checkAnswer = async () => {
    const res = await LevelsHackService.checkAnswer(answer, data?.id as number)
    setIsCorrect(res)

    if (res) {
      setCookie(
        'hack_progress', 
        cookies.hack_progress ? 
        [
          ...cookies.hack_progress, 
          { id: levels_hack_id, isCorrect: res, answer }
        ] :
        [
          { id: levels_hack_id, isCorrect: res, answer }
        ]
      )
    }
   }

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <div>Not found</div>
  }

  return (
    <div className='flex justify-center w-screen h-screen px-2 font-mono text-white bg-black' style={{ fontFamily: 'Courier New', color: '#0f0' }}>
      <section className='w-2/3 mt-48 '>
        <div className='font-light text-center'>
          Poziom {levels_hack_id} {data.difficulty}
        </div>
        <div className='text-xl font-medium text-center' dangerouslySetInnerHTML={{ __html: data.question }} />
        <form className='flex flex-col items-center justify-center mt-10' onSubmit={(e) => {
          e.preventDefault(); 
          checkAnswer();
        }}>
          <label htmlFor="">Odpowiedź</label>
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} className='border text-#0f0 bg-transparent px-6 py-2 outline-none text-lg w-full xl:w-1/2' style={{ borderColor: '#0f0' }} type="text" />
          <input disabled={isCorrect as boolean} type="submit" value="Zatwierdź" className='px-6 py-2 mt-4 text-xl font-bold text-white duration-100 border cursor-pointer hover:opacity-50' style={{ borderColor: '#0f0', color: '#0f0' }}  />
        </form>
        <div className='flex items-center justify-center mt-8' >
          {
            isCorrect ? (
              <div className='w-full'>
                <h2 className='text-3xl text-green-600'>
                  Poprawna odpowiedz
                </h2>
                { LEVELS_HACK_NUMBER === Number(levels_hack_id) ? (
                  <Link to={`/level-hack-summary`} className='text-lg underline duration-100 hover:opacity-50'>Przejdź do podsumowania</Link>
                ) : (
                  <Link to={`/level-hack/${Number(levels_hack_id) + 1}`} className='text-lg underline duration-100 hover:opacity-50'>Następny poziom</Link>
                ) }
                <div className='mt-4' dangerouslySetInnerHTML={{ __html: data.lesson }} />
              </div>
            ) :
            isCorrect === null ? null :
            <div className='w-full text-3xl text-red-600 xl:w-1/2'>Nieoprawna odpowiedz</div>
          }
        </div>
      </section>
    </div>
  )
}

export default LevelsHack;