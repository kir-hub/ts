import React, { useEffect, useState } from 'react'
import { vote } from '../http/userAPI'

import styles from './Vote.module.sass'

export default function VotePage() {

    const voteHandler = async(e)=>{
        if(e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 ||  e.key == 5  || e.key == 6|| e.key == 7 || e.key == 8 ||e.key == 9|| e.key ==0){
            const response = await vote(e.key)
            console.log(response);       
            window.location.assign('http://localhost:3000')
        }         
    }

    //почему то при переходе между страницами не происходит рендер, после обновления страницы все отрисовывается

    return (
        <div className={styles.div}>
            <h3> Vote for your favourite digit (0 - 9)</h3>
            <input onKeyDown={voteHandler} placeholder='digit' className={styles.input}/>
        </div>
    )
}
