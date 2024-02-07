import React from "react";
import NavBar from "../navBar/NavBar";
import { Outlet } from  'react-router-dom';
import styles from './Root.module.css'

export default function Root() {
    return (
        
       <>
        <NavBar />
        <Outlet />
        <div className={styles.container}>

        </div>
        
        </>
    )
}