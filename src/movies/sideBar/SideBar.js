import React from "react";
import { Link } from "react-router-dom";
import styles from './SideBar.module.css';
import { useNavigate, useParams } from "react-router-dom";




export default function SideBar ({data}) {
   
const navigate = useNavigate()
const { id } = useParams(data.id);
    const items = data?.map (item => 
        
<li key={item.id}><button className={styles.btn} onClick={() => navigate(`/GameOfThrone/${item.id}`)}> {item.fullName} </button></li>
        
 );
    
        
        return (
            <ul>{items}</ul>
        )
    }