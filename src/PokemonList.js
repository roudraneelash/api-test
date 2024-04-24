import React, { useState, useEffect } from "react";
import { getPokemonsFromApi } from "./api";
const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch the Pokémon data when the component mounts
    getPokemonsFromApi()
      .then((data) => {
        setPokemons(data.results); // Set the fetched data in state
      })
      .catch((error) => {
        setError(true); // Set error state on catch
        console.error("Error fetching Pokémon data:", error);
      });
  }, []); // Dependency array to ensure effect runs only once on component mount

  return (
    <div>
      {error ? (
        <p>Unable to fetch Pokémon data</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Pokémon Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => (
              <tr key={pokemon.name}>
                {" "}
                {/* Ensure unique key */}
                <td>{pokemon.name}</td> {/* Correct property to display */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PokemonList;
