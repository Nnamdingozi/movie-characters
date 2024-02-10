import React from "react";
import styles from './FullName.css';
import { useNavigate, useParams } from "react-router-dom";




export default function FullName ({data}) {
   
const navigate = useNavigate()
const { id } = useParams(data.id);
    const items = data?.map (item => 
        
<button className={styles.fullNameBtn} onClick={() => navigate(`/character/${item.id}`)}> {item.fullName} </button>
        
 );
    
        
        return (
            <div className={styles.fullNameDiv}>{items}</div>
        )
    }