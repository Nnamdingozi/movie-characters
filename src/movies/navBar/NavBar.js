import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <ul>
            <li className={styles.movie}>MOVIE CHARACTERS INFORMATION</li>
        <li><NavLink to='home'> MOVIES</NavLink></li>
        <li><NavLink to='/GameOfThrone'>Game Of Thrones</NavLink></li>
        </ul>
    )
}
