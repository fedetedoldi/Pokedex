import usePokemones from '../hooks/usePokemones';
import './Pokemones.css'

function Pokemon({ id, nombre, imagen }) {
  return (
    <div className="pokemon-card">
      <img src={imagen} alt={nombre} className="pokemon-imagen" />
      <p className="pokemon-titulo">
        <span>#{id}</span>
        <span>{nombre} </span>
      </p>
    </div>
  );
}

function Pokemones() {

    const {pokemones} = usePokemones()

  return (
    <section className="pokemon-container">
      {pokemones.map(pokemon => <Pokemon {...pokemon} /> )}
    </section>
  );
}

export default Pokemones;
