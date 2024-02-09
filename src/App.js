import React, { useState, useEffect } from 'react';
import GameOfThrone from './movies/gameOfThrone/GameOfThrone';
import './App.css';
// import { data } from './utils/data';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './movies/home/Home';
import Root from './movies/root/Root';
import Character from './movies/character/Character';
import Wednesday from './movies/wednesday/Wednesday';
import LordOfTheRings from './movies/lordOfTheRings/LordOfTheRings';
import TheOrder from './movies/theOrder/TheOrder';
import Manifest from './movies/manifest/Manifest';
import PrisonBreak from './movies/prisonBreak/PrisonBreak';

function App() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true)
  const fetchData = async () => {
const response = await fetch('https://thronesapi.com/api/v2/Characters')
const json = await response.json()
setData(json)
setIsLoading(false)
  }
  

  useEffect(()=>{
   fetchData().catch(console.error)
   
  
  }, []);
 
  const router = createBrowserRouter(createRoutesFromElements(
    //use navbar directly instead of root
    <>
    <Route path ='/'  element={<Root />} >
    <Route path= 'movies' element={<Home data={data} />}></Route>
    <Route path='GameOfThrone' element={<GameOfThrone data={data} loading={loading}/>} ></Route>
    <Route path='/GameOfThrone/:id' element ={<Character data ={data} />}></Route>
    <Route path='wednesday' element ={<Wednesday data ={data} />}></Route>
    <Route path='prisonBreak' element ={<PrisonBreak data ={data} />}></Route>
    <Route path='lordOfTheRings' element ={<LordOfTheRings data ={data} />}></Route>
    <Route path='theOrder' element ={<TheOrder data ={data} />}></Route>
    <Route path='manifest' element ={<Manifest data ={data} />}></Route>
    
   
    </Route> 
    
    </>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
