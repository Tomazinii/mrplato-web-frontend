import React from 'react'
import styles from './ButtonTypeRule.module.css'

interface ButtonProps {
    text: string;
    onClick: (id: string) => void;
    active: string;
    id: string;
}

const ButtonTypeRule: React.FC<ButtonProps> = ({text, onClick, active, id }) => {
    
  return (
    <button onClick={()=>{onClick(id)}} id={"2"} className={`${styles.button} ${active == id  && styles.active}`}>{text}</button>
  )
}

export default ButtonTypeRule