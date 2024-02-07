import React from "react";
import styles from './CharacterCard.module.css';


export default function CharacterCard({ data }) {
    
    const card = data?.map(character => {
        return (
            <div key={character.id}  className={styles.banner}>
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
        )

    })
    return (
        <div className={styles.wrapper}>
            {card}
        </div>

    )

}