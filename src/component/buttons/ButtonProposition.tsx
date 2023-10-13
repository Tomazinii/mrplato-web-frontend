import React from 'react'
import styles from './ButtonProposition.module.css'


interface ButtonPropositionProps {
    index: string;
    name: string;
    method: string;
    type: string;
    typeActive: boolean;
    onClick: (index: string) => void;
    id:string;
    select: string;
    listSelect: Array<string>;
    setListSelect: (index: string) => void;
    color:string;
    questionPropostionDiv: boolean;
}

const ButtonProposition: React.FC<ButtonPropositionProps> = ({index, name, method, type, typeActive, onClick, id, select, listSelect, setListSelect, color,questionPropostionDiv}) => {
  return (
    <li onClick={()=>{
      setListSelect(index)
      onClick(id) 
      }} className={`${styles.button}  ${select == id && styles.buttonActive || listSelect.includes(id) && styles.buttonActive}`}>
        
        
        <span style={{backgroundColor:color}} >{index}</span>
        <p>{name}</p>

        {questionPropostionDiv ? "" :
        <p>{method}</p> 
        }
        <span style={{backgroundColor:color}}  className={typeActive ? `${styles.typePerso}` : `${styles.typedefault}`}>{type}</span>
    </li>
  )
}

export default ButtonProposition