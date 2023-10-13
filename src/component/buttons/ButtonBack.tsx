import React from 'react'
import styles from './ButtonBack.module.css'

import { Link } from 'react-router-dom';

interface ButtonProps{
    text: string;
    path: string;
}

const ButtonBack: React.FC<ButtonProps> = ({text, path}) =>{
  return (
    
    <Link to={path}>
        <div className={styles.Button} >
            {text}
        </div>
    </Link>
  )
}

export default ButtonBack