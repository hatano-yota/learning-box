import { selectorFamily } from "recoil";
import { QueryInput, QueryResult, pokemonListQuery } from "./pokemonListQuery";

export type Pokemon = {
  id: number;
  en: string;
  ja: string;
};

export const formattedPokemonListQuery = selectorFamily<readonly Pokemon[], QueryInput>({
  key: "infinite-scroll-sample/dataflow/formattedPokemonListQuery",
  get:
    (query) =>
    ({ get }) => {
      return convertRawResultToPokemon(get(pokemonListQuery(query)));
    },
});

const convertRawResultToPokemon = (response: QueryResult): Pokemon[] => {
  return response.species.map((species) => {
    const en = species.pokemon_v2_pokemonspeciesnames.find((n) => n.language_id === 9)?.name ?? "";
    const ja = species.pokemon_v2_pokemonspeciesnames.find((n) => n.language_id === 11)?.name ?? "";
    return {
      id: species.id,
      en,
      ja,
    };
  });
};
