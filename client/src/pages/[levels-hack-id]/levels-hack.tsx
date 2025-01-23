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
    <>
      <section>
        <div dangerouslySetInnerHTML={{ __html: data.question }} />
        <div>
          {data.difficulty}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          checkAnswer();
        }}>
          <label htmlFor="">odpowiedź</label>
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} className='border' type="text" />
          <input type="submit" value="Zatwierdź" />
        </form>

        {
          isCorrect ? (
            <div>
              <h2>
                Poprawna odpowiedz
              </h2>
              <a href={`/levels-hack/${Number(levels_hack_id) + 1}`}>Nastepny poziom</a>
              <div dangerouslySetInnerHTML={{ __html: data.lesson }} />
            </div>
          ) :
          isCorrect === null ? null :
          <div>Nieoprawna odpowiedz</div>
        }
      </section>
    </>
  )
}

export default LevelsHack;