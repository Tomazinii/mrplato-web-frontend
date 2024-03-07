import React from 'react'
import styles from './ButtonClassroom.module.css'

import { Link } from 'react-router-dom';

interface ButtonProps{
    text: string;
    path: string;
    title: string;
}

const ButtonClassroom: React.FC<ButtonProps> = ({title, text, path}) =>{
  return (
    
    <Link style={{height:"0px"}} to={path}>
        <div className={styles.Button} >
          <div className={styles.estilo}></div>
          <div className={styles.title}>
          <h2 >{title}</h2>
          </div>
          <p>{text}</p>

            
        </div>
    </Link>
  )
}

export default ButtonClassroom