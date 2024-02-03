import React from 'react';
import GameOfThrone from './movies/gameOfThrone/GameOfThrone';
import './App.css';
import { data } from './utils/data';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './movies/home/Home';
import Root from './movies/root/Root';
import SideBar from './movies/sideBar/SideBar';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path ='/'  element={<Root />} >
    <Route path= 'home' element={<Home data={data} />}></Route>
    <Route path='GameOfThrone' element={<GameOfThrone data={data} />} >
      
    </Route>
      
    </Route> 
    
    </>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
