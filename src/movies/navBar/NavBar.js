import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import { useParams } from "react-router-dom";

export default function NavBar() {
    const {id} = useParams();
    return (
        <ul>
            <li className={styles.movie}> <h3>MOVIE CHARACTERS INFORMATION</h3></li>
             <li><NavLink to='/'>  Home </NavLink></li>
            
        
        </ul>
    )
}
