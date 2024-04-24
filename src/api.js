export const getPokemonsFromApi = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid response");
    }
  });
};
