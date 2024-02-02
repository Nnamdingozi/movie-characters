import React from 'react';
import GameOfThrone from './movies/gameOfThrone/GameOfThrone';
import './App.css';
import { data } from './utils/data'

function App() {

  return (
    <div>
      <GameOfThrone data ={data}/>
    </div>
  );
}

export default App;
