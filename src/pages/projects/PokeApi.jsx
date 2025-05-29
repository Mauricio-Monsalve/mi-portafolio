import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function PokeApi() {

  const refNombre = useRef();
  const navegarA = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    const nombre = refNombre.current.value.trim().toLowerCase();
    navegarA("/projects/pokeapi/"+nombre);
  }

  return (
    <div>
      <h2>Poke API</h2>
      <form onSubmit={searchHandler}>
        <label>
          <span>Nombre del pokemon</span>
          <input ref={refNombre} type="text" required/>
        </label>
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default PokeApi;