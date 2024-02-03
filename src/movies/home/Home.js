import React from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

export default function Home() {
    return(
        <div className={styles.container}>
        <h1>Movie Characters</h1>
        <h2>Learn more about your favorite movie characters</h2>

        <h3>Select a movie to view the movie characters</h3>
        <div className={styles.movieNames}>
        <Link to= "/GameOfThrone"><h3>Game of Throne</h3></Link>
         <h3>Prison Break</h3>
         <h3>Wednesday</h3>
         <h3>Lord Of The Rings</h3>
         <h3>Transporter</h3>
         <h3>The Order</h3>
         <h3>Manifest</h3>
         </div>
        </div>
    )
}