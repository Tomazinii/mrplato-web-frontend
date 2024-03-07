import React from 'react'
import styles from './ButtonClassroom.module.css'

import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
interface ButtonProps{
    text: string;
    path: string;
}

const ButtonClassroomAdd: React.FC<ButtonProps> = ({text, path}) =>{
  return (
    
    <Link to={path}>
        <div className={styles.Button} >
          <div className={styles.title}>
          <h2 ><AddIcon style={{fontSize:"80px", color:"#333"}}/></h2>
          </div>
        </div>
    </Link>
  )
}

export default ButtonClassroomAdd