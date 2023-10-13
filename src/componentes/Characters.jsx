export default function Characters(props) {
    const { characters, setCharacters } = props;

    const ResetCharacter=()=>{
        setCharacters(null)
    } 

    return (
        <div className="Caracteres">
            <h1 className="text-6xl text-gray-50 mb-5">Personajes</h1>
            <button className="ClassHome" onClick={ResetCharacter}>Volver al Inicio</button>
            <div className="grid grid-cols-6 p-5 items-center">
                {characters.map((character, index) => (
                    <>
                    <div className="flex items-center m-2 " key={index}>
                        <img src={character.image} alt={character.name} className="rounded-lg" />
                    </div>
                        <div className="text-left ">
                            <h3 className="text-slate-100 text-2xl text-left">{character.name}</h3>
                            <h6 className="text-slate-50 text-left">
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="Alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        < span className="Dead" />
                                Dead
                                </>
                                    
                                )}
                            </h6>

                            <div className="text-gray-400">
                                <span className="flex ">Episoduo:<p className="font-bold ml-2"> {character.episode.length}</p></span>
                                <span>Especie: {character.species} </span>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <button className="" onClick={ResetCharacter}>Volver a la Home</button>
        </div>
    )
}
