import Loading from "@/recoil/infinite-scroll-sample/components/Loading";
import { usePokemonList } from "@/recoil/infinite-scroll-sample/dataflow/pokemonList";

const PokemonList = () => {
  const { pokemons, mightHaveMore } = usePokemonList();

  return (
    <>
      <dl>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <dt lang="ja">{pokemon.ja}</dt>
            <dd>
              {pokemon.en} <span>#{pokemon.id}</span>
            </dd>
          </div>
        ))}
      </dl>
      {mightHaveMore && <Loading />}
    </>
  );
};

export default PokemonList;
