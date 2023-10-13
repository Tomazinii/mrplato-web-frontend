import React from 'react'
import styles from './ButtonInputForm.module.css'

interface ButtonInputFormProps {
    text: string;
    onclick: (caracter: any)=>void;
    color: string;
    
}


const ButtonInputForm: React.FC<ButtonInputFormProps> = ({color, onclick, text}) => {
  return (
    <button onClick={(caracter)=>{onclick(caracter.currentTarget.innerText)}} style={{backgroundColor: color}} className={styles.button}>{text}</button>
  )
}

export default ButtonInputForm