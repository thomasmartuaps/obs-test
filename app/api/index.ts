import axios from "axios";

export async function fetchPokemon(name: string) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.data;
}

export async function fetchUsers() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
}
