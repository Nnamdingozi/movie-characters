import React from "react";
import CharacterCard from "../characterCard/CharacterCard";
import SideBar from "../sideBar/SideBar";
import styles from './GameOfThrone.module.css';


export default function GameOfThrone(props) {
    return (
        <div className={styles.container}>

            <h1>Game of Thrones movie characters</h1>
            {props.loading? <p>Loading . . .</p> : <><SideBar data={props.data}/>
            <CharacterCard data={props.data} /> </> }
            

        </div>

    )
}