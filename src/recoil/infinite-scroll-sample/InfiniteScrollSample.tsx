import PokemonList from "@/recoil/infinite-scroll-sample/components/PokemonList";
import { Suspense } from "react";

const InfiniteScrollSample = () => {
  return (
    <>
      <h1>An infinite-scrolling list of Pokemons</h1>
      <Suspense fallback={null}>
        <PokemonList />
      </Suspense>
    </>
  );
};

export default InfiniteScrollSample;
