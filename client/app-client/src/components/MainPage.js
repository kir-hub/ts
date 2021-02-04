import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Diagram from './Diagram';
import styles from './Main.module.sass'


export default function MainPage() {

   
    


    return (
        <div className={styles.main}>
            <Link to='./VotePage' className={styles.Link}> vote </Link>
            <Diagram/>
            
        </div>
    )
}
