import { FC } from 'react';
import { Link } from 'react-router-dom';

const HackIntro: FC = () => {
  return (
    <div className='flex justify-center w-screen min-h-screen px-2 font-mono text-white bg-black' style={{ fontFamily: 'Courier New', color: '#0f0' }}>
      <section className='w-full px-4 mt-12 lg:mt-36 xl:w-2/3 xl:mt-48'>
        <h1 className='text-xl font-semibold md:text-2xl'>Witaj!</h1>
        <p className='text-sm md:text-base'>
          w aplikacji, która nauczy Cię, jak skutecznie zabezpieczać swoje oprogramowanie poprzez analizę podatności i luk w zabezpieczeniach! <br /> <br />
          Świat programowania to nie tylko tworzenie funkcjonalnych aplikacji, ale także dbanie o ich bezpieczeństwo. Każdego dnia hakerzy wyszukują słabe punkty w kodzie, wykorzystując je do przeprowadzania ataków. Twoim zadaniem jako programisty jest przewidywanie takich zagrożeń i budowanie odpornych systemów. <br /> <br />
          W tej aplikacji będziesz mógł nauczyć się zabezpieczania oprogramowania poprzez rozwiązywanie różnych poziomów, w których odkryjesz potencjalne luki w zabezpieczeniach. Każde wyzwanie pozwoli Ci zdobyć praktyczną wiedzę i lepiej przygotować się do ochrony własnych aplikacji.
        </p>
        <div className='mt-10'>
          <Link to={`/level-hack/1`} className='px-4 py-2 text-xl duration-100 border hover:opacity-50' style={{ borderColor: '#0f0' }}>Przejdź do zadań</Link>
          <Link to={`/`} className='px-4 py-2 ml-4 text-xl duration-100 border hover:opacity-50' style={{ borderColor: '#0f0' }}>Wróć do strony głównej</Link>
        </div>
      </section>
    </div>
  )
}

export default HackIntro;