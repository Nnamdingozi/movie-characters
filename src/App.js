import React from 'react';
import GameOfThrone from './movies/gameOfThrone/GameOfThrone';
import './App.css';
import { data } from './utils/data'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './movies/home/home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<GameOfThrone />} ></Route>
    </>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
