import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function PokeCard() {

  const {id} = useParams();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [poke, setPoke] = useState(null);

  useEffect(()=>{

    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(response=>{
      return response.json();
    })
    .then(data=>{
      setPoke(data);
      setCargando(false);
    })
    .catch(error=>{
      console.error(error);
      setError(true);
      setCargando(false);
    });
  },[]);

  return (
    <>
      {cargando && <p>Cargando...</p>}
      {error && <p>Error: pokemon no encontrado</p>}
      {poke && 
        <div>
          <strong>{poke.name}</strong>
          <img src={poke.sprites.other["official-artwork"].front_default} width={100} alt={poke.name} />
        </div>
      }
    </>
  )
}

export default PokeCard