import React from "react";
import {  Link } from "react-router-dom";
import styles from './SideBar.module.css';


export default function SideBar ({data}) {

    const items = data.map (item =>
     <li key={item.id}> {item.fullName} </li>);
    
        
        return (
            <ul>{items}</ul>
        )
    }