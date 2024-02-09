import React from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

export default function Home() {
    return(
        <div className={styles.container}>
        <h1>Movies and  Characters in them</h1>
        <h2>Learn more about your favorite movie characters</h2>

        <h3>Select a movie to view the movie characters</h3>
        <div className={styles.movieNames}>
        <Link to= "/GameOfThrone"><h3>Game of Throne</h3></Link>
        <Link to= "/prisonBreak"><h3>Prison Break</h3></Link>
        <Link to= "/wednesday"><h3>Wednesday</h3></Link>
        <Link to= "/lordOfTheRings"><h3>Lord Of The Rings</h3></Link>
        <Link to= "/theOrder"><h3>The Order</h3></Link>
        <Link to= "/manifest"><h3>Manifest</h3></Link>
         
         </div>
        </div>
    )
}