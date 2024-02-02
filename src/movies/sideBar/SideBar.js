import React from "react";
// import { HashLink as Link } from "react-router-dom";
import styles from './SideBar.module.css'
export default function SideBar ({data}) {
    const items = data.map(item =>
        <li key={item.id}><a href={item.id} >{item.fullName}</a></li>);
        return (
            <ul>{items}</ul>
        )
    }