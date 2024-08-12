
import React from 'react'
import styles from './MenuButtonHome.module.css'

import { Link } from 'react-router-dom';
interface ButtonProps{
    text: string;
    path: string;
    color: string;
    colorLoadtotal: string
    load: boolean
    image: any
}

const MenuButtonHome: React.FC<ButtonProps> = ({text, path, color, colorLoadtotal,load, image}) =>{

  return (
    
    <Link to={path}>
        <div className={styles.box} >
            <div className={styles.style} style={{backgroundColor: color}}></div>
            <div className={styles.struct}>
            <div style={{ height:"120px", width:"120px", borderRadius:"100%",backgroundSize:"cover", backgroundPosition:"center", backgroundImage: `url(${image})` }}></div>
            </div>
            <h4 className={styles.text}>
            {text}
            </h4>
            <p className={styles.describe}>
            Play and use your skills 
                to earn points
            </p>
            {load &&
            <div style={{backgroundColor: colorLoadtotal, width: "100%"}} className={styles.loadTotal}>
                <div style={{backgroundColor: color, width: "100%"}} className={styles.load}></div>
            </div>
            }

        </div>
    </Link>
  )
}

export default MenuButtonHome