import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Character.module.css';
import NavBar from "../navBar/NavBar";

export default function Character({ data }) {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const item = data[id];
  const goBack = () => {
    navigate(-1);
  }
  return item ? (
    <>
      <NavBar />
      <button className={ styles.characterBtn}  onClick={goBack}>Back</button>
      <div key={item.id} className={styles.banner}>
       
        <h1> {item.fullName}</h1>
        <div className={styles.imageContainer}>
          <img src={item.imageUrl} alt={item.image} className={styles.img}></img>                     </div>

        <div>
          <p>First Name: {item.firstName}</p>
          <p>Last Name: {item.lastName}</p>
          <p>Full Name: {item.fullName}</p>
          <p>Title: {item.title}</p>
          <p>Family: {item.family}</p>
        </div>


      </div>
    </>

  ) : <p>Character not found</p>


}














