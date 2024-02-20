import React, { useState, useEffect } from 'react';
import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Character from './movies/character/Character';
import CharacterCard from './movies/characterCard/CharacterCard';


function App() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true)
  const fetchData = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters')
    const json = await response.json()
    setData(json)
    setIsLoading(false)
  }


  useEffect(() => {
    fetchData().catch(console.error)


  }, []);

  const router = createBrowserRouter(createRoutesFromElements(

    <>
      <Route path='/' element={<CharacterCard data={data} />}></Route>

      <Route path='/character/:id' element={<Character data={data} />}></Route>


    </>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
