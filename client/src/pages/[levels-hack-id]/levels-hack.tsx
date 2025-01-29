import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { LevelsHackService } from '../../utils/api/services';
import { useParams } from 'react-router';
import Loading from '../../features/ui/loading';

const LevelsHack: FC = () => {
  const { levels_hack_id } = useParams()
  const { data, isLoading } = useQuery(`level-hack ${levels_hack_id}`, () => LevelsHackService.findOne(Number(levels_hack_id) - 1))
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  
  const checkAnswer = async () => {
    const res = await LevelsHackService.checkAnswer(answer, data?.id as number)
    setIsCorrect(res)
  }

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <div>Not found</div>
  }

  return (
    <div className='flex justify-center w-screen h-screen px-2 font-mono text-white bg-black' style={{ fontFamily: 'Courier New', color: '#0f0' }}>
      <section className='w-1/2 mt-48'>
        <div className='text-sm font-light'>
          {data.difficulty}
        </div>
        <div className='text-xl font-medium' dangerouslySetInnerHTML={{ __html: data.question }} />
        <form className='flex flex-col items-center justify-center mt-8' onSubmit={(e) => {
          e.preventDefault(); 
          checkAnswer();
        }}>
          <label htmlFor="">Odpowiedź</label>
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} className='border text-#0f0 bg-transparent px-6 py-2 outline-none text-lg w-full xl:w-1/2' style={{ borderColor: '#0f0' }} type="text" />
          <input disabled={isCorrect as boolean} type="submit" value="Zatwierdź" className='px-6 py-2 mt-4 text-xl font-bold text-white duration-100 border cursor-pointer hover:opacity-50' style={{ borderColor: '#0f0', color: '#0f0' }}  />
        </form>
        <div className='flex items-center justify-center mt-4' >
          { 
            isCorrect ? (
              <div className='w-1/2'>
                <h2 className='text-3xl text-green-600'>
                  Poprawna odpowiedz
                </h2>
                <a href={`/levels-hack/${Number(levels_hack_id) + 1}`} className='underline duration-100 hover:opacity-50'>Nastepny poziom</a>
                <div dangerouslySetInnerHTML={{ __html: data.lesson }} />
              </div>
            ) :  
            isCorrect === null ? null :
            <div className='w-1/2 text-3xl text-red-600'>Nieoprawna odpowiedz</div>
          }
        </div>
        
      </section>
    </div>
  )
}

export default LevelsHack;