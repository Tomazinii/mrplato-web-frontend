import React from 'react'
import styles from './ButtonSelect.module.css'


interface ButtonSelectProps {
    text: string;
    onclick: ()=>void;

}

const ButtonSelect: React.FC<ButtonSelectProps> = ({text, onclick}) => {
  return (
    <button className={styles.button} onClick={onclick}>{text}</button >
  )
}

export default ButtonSelect