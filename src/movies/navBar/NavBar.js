import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <ul>
        <li><NavLink to='home'> Home</NavLink></li>
        <li><NavLink to='/GameOfThrone'>Game Of Thrones</NavLink></li>
        </ul>
    )
}
