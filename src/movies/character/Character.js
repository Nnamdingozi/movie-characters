import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Character.module.css';

export default function Character({data}){
    // const { id } = useParams();
    // const item = data?.filter(elem =>  elem.id === id)
    //         return  (
    //         <div key={item.id} className={styles.banner}>
    //                     <h1> {item.fullName}</h1>
    //                     <div className={styles.imageContainer}>
    //                         <img src={item.imageUrl} alt={item.image} className={styles.img}></img>
    //                     </div>
        
    //                     <div>
    //                         <p>First Name: {item.firstName}</p>
    //                         <p>Last Name: {item.lastName}</p>
    //                         <p>Full Name: {item.fullName}</p>
    //                         <p>Title: {item.title}</p>
    //                         <p>Family: {item.family}</p>
    //                     </div>
    //                 </div>
            
    //         )
    const navigate = useNavigate();
        const { id } = useParams();
        const item = data[id]
        
               return item ? (

                    <div key={item.id} className={styles.banner}>
                         <button className={styles.btn} onClick={()=> {navigate(-1)}}>back</button>
                       <h1> {item.fullName}</h1>
                     <div className={styles.imageContainer}>
                          <img src={item.imageUrl} alt={item.image} className={styles.img}></img>                     </div>
        
                        <div>
                             <p>First Name: {item.firstName}</p>
                           <p>Last Name: {item.lastName}</p>
                          <p>Full Name: {item.fullName}</p>
                          <p>Title: {item.title}</p>
                            <p>Family: {item.family}</p>
                         </div>
                        
                         
                </div>
            
                ) : <p>Character not found</p>
            
    
    }







    






    