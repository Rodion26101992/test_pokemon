import React from 'react';
import './App.css';
import PokemonList from './components/pokemonList/PokemonList';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </div>
  );
}

export default App;
