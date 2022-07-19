import React from 'react';
import './App.css';
import PokemonList from './components/pokemonList/PokemonList';
import { Routes, Route } from 'react-router-dom';
import InfoPokemon from './components/infoPokemon/InfoPokemon';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<InfoPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
