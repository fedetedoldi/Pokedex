import "./Buscador.css";
import { Buscar } from "./Icons";

function Buscador() {
  return (
    <>
      <h3 className="titulo">Mas de 800 pokemones, elige tu favorito</h3>
      <section className="container-buscar">
        <input
          type="text"
          placeholder="Encuentra tu Pokémon"
          className="input-buscar"
        />
        <button className="btn-buscar">
          <Buscar />
          Buscar Pokémon
        </button>
      </section>
    </>
  );
}

export default Buscador;
