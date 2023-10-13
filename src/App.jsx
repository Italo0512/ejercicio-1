import { useState } from 'react';
import ricky from './img/rick-morty.png';
import Characters from './componentes/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const ApiRest = async () => {
    const apiPeli = await fetch('https://rickandmortyapi.com/api/character')
    const personaje = await apiPeli.json();
    setCharacters(personaje.results);
  }

  return (
    <>
      <div className='bg-gray-700 flex-col justify-center w-full  h-fit'>
        <div className='w-5/6 m-auto text-center p-5'>
          <h1 className='text-slate-300 text-5xl text-center py-16'>Ricky Morty</h1>
          {characters ? (
            <Characters characters={characters} setCharacters={setCharacters} />
          ) : (
            <>
              <img src={ricky} alt="" className='w-[800px] rounded-[50%]  m-auto' />
              <button onClick={ApiRest} className='rounded-lg px-5 py-3 m-10 bg-slate-200'>Ver Catalogo</button>
            </>
          )}
        </div>

      </div>

    </>
  )
}

export default App
