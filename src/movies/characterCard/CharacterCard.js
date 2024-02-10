import React from "react";
import styles from './CharacterCard.module.css';
import { useNavigate } from "react-router";
import NavBar from "../navBar/NavBar";
import FullName from "../fullName/FullName";
import { useState } from "react";

export default function CharacterCard({ data }) {

    const navigate = useNavigate();
    
    const card = data?.map(character => {
        return (
            <>
           
            <div key={character.id}  className={styles.banner} onClick={() => navigate(`/character/${character.id}`)}>
                <h1> {character.fullName}</h1>
                <div className={styles.imageContainer}>
                    <img src={character.imageUrl} alt={character.image} className={styles.img}></img>
                </div>

                <div>
                    <p>First Name: {character.firstName}</p>
                    <p>Last Name: {character.lastName}</p>
                    <p>Full Name: {character.fullName}</p>
                    <p>Title: {character.title}</p>
                    <p>Family: {character.family}</p>
                </div>
            </div>
            </>
        )

    })
    return (
        <>
        <NavBar />
        <h1>Game of Throne Movie Characters</h1>
        <FullName data={data} />
        <div className={styles.wrapper}>
            
            {card}
        </div>
        </>

    )

}