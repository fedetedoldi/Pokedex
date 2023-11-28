import "./Buscador.css";
import { Buscar } from "./Icons";

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  return (
    <>
      <h3 className="titulo">Mas de 800 pokemones, elige tu favorito</h3>
      <form className="container-buscar" onSubmit={buscarPokemon}>
        <input
          type="text"
          placeholder="Encuentra tu Pokémon"
          className="input-buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="btn-buscar" type="submit">
          <Buscar />
          Buscar Pokémon
        </button>
      </form>
    </>
  );
}

export default Buscador;
