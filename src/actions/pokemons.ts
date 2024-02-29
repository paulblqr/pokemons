import { PokemonClient } from "pokenode-ts";
const api = new PokemonClient();

export const fetchPokemon = async (id: string) => {
  try {
    const pokemonData = await api.getPokemonById(Number(id));
    return pokemonData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTypeInfos = async (name: string) => {
  try {
    const pokemonData = await api.getTypeByName(name);
    return pokemonData;
  } catch (error) {
    console.error(error);
  }
};

export {};
