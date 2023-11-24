import { useState, useEffect } from "react";

function usePokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [siguienteUrl, setSiguienteUrl] = useState("");

  const getPokemones = async () => {
    // Recuperamos el listado de los pokemones
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const listaPokemones = await response.json();
    const { results } = listaPokemones; //Guardamos el result

    //Ahora por cada result (pokemon), necesitamos obtener la información
    const newPokemones = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const poke = await response.json();

      return {
        id: poke.id,
        nombre: poke.name,
        imagen: poke.sprites.other.dream_world.front_default,
      }
    })

    setPokemones(await Promise.all(newPokemones));
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return { pokemones };
}

export default usePokemones;
