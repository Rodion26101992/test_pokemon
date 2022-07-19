import * as React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useAction } from '../../hooks/useAction';
import './PokemonListStyle.scss';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const PokemonList: React.FC = () => {
  const { pokemons, error, loading, count } = useTypedSelector((state) => state.user);
  const { fetchUsers, setUrlPokemon, getPagePokemonsFetch } = useAction();
  const [page, setPage] = React.useState(1);
  console.log('https://pokeapi.co/api/v2/ability/176/');
  console.log(pokemons);
  console.log(count);
  useEffect(() => {
    fetchUsers();
  }, []);

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
    getPagePokemonsFetch(value);
  }
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="pokemon-list-componet">
        {pokemons &&
          pokemons.map((item) => (
            <Link
              key={item.name}
              to={`/pokemon/${item.url.split('pokemon/').pop().split('/').shift()}`}
              onClick={() => setUrlPokemon(item.url)}
            >
              <div className="item-list">
                <label>{item.name}</label>
              </div>
            </Link>
          ))}
      </div>
      {count && <Pagination count={count % 20} page={page} onChange={handleChange} />}
    </>
  );
};

export default PokemonList;
