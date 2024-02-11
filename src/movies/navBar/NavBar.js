import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    return (
        <ul>
            <li className={styles.movie}> <h1>Game Of Thrones Movie Characters</h1></li>
             <li><NavLink to='/'>  Home </NavLink></li>
            <li><button className={styles.navbarBtn} onClick={goBack}>Back</button></li>
        
        </ul>
    )
}
