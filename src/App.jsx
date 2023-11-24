import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Buscador from "./components/Buscador";

function App() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      });

      setPokemones(await Promise.all(newPokemones));
    };

    getPokemones();
  }, []);

  return (
    <>
      <NavBar />
      <div className="App">
        <Buscador />

        {pokemones.map((pokemon) => {
          return (
            <div>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name} </p>
              <span>{pokemon.id}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
