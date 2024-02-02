import React from "react";
import CharacterCard from "../characterCard/CharacterCard";
import SideBar from "../sideBar/SideBar";
import styles from './GameOfThrone.module.css'

export default function GameOfThrone({ data }) {
    return (
        <div className={styles.container}>

            <h1>Game of Thrones movie characters</h1>
            <SideBar data ={data}/>
            <CharacterCard data={data} />
        </div>

    )
}