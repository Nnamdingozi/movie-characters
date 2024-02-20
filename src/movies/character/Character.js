import React from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../navBar/NavBar";

export default function Character({ data }) {

  const { id } = useParams();
  const item = data[id];

  return item ? (
    <div className="container">
      <NavBar />
      <h1 className="text-primary text-center fst-italic my-5">Game Of Thrones Movie Character</h1>
      <div key={item.id} className="container-fluid mt-15 justify-content-center row text-center">

        <h1> {item.fullName}</h1>
        <div className="h-75 min-vh-75 w-50 border border-dark thumbnail p-5" >
          <img className="img-fluid" src={item.imageUrl} alt={item.image} ></img>                     </div>

        <div>
          <p>First Name: {item.firstName}</p>
          <p>Last Name: {item.lastName}</p>
          <p>Full Name: {item.fullName}</p>
          <p>Title: {item.title}</p>
          <p>Family: {item.family}</p>
        </div>


      </div>
    </div>

  ) : <p>Character not found</p>


}














