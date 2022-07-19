import React, { useEffect, useState } from 'react';
import { getPokemon } from '../../api/pokemons';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const InfoPokemon = () => {
  const { url } = useTypedSelector((state) => state.user);
  const [pokemonInfo, setPokemonInfo] = useState();
  console.log(pokemonInfo);
  console.log(url);
  useEffect(() => {
    url && getPokemon(url).then((data) => setPokemonInfo(data?.data));
  }, []);
  return (
    <>
      <h1>Info Pokemon</h1>
    </>
  );
};

export default InfoPokemon;
