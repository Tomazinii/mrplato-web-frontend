import React from 'react'
import styles from './ButtonOperation.module.css'

interface ButtonProps {
    text: string;
    onclick: () => void;
    disabled: boolean;
}

const ButtonOperation: React.FC<ButtonProps> = ({text, onclick, disabled }) => {
    
  return (
    <button disabled={disabled} onClick={()=>{onclick()}} className={`${styles.button} `}>{text}</button>
  )
}

export default ButtonOperation