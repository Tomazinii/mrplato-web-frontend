import React from 'react'
import styles from './ButtonProposition.module.css'


interface ButtonPropositionProps {
    index: string;
    name: string;
    method: string;
    type: string;
    typeActive: boolean;
    onClick: (index: any) => void;
    id: number;
    select: any;
    listSelect: Array<number>;
    setListSelect: (index: number) => void;
    color:string;
    questionPropostionDiv: boolean;
    is_selected_form?: boolean 
    handleFuntionSelectRuleIndex: (index: number)=>void;
}

const ButtonProposition: React.FC<ButtonPropositionProps> = ({index, name, method, type, typeActive, onClick, id, select, listSelect, setListSelect, color,questionPropostionDiv,is_selected_form,handleFuntionSelectRuleIndex}) => {
  return (
    <>


{type === "default" && 
    <li onClick={
      is_selected_form ?()=>{
        setListSelect(Number(index))
        onClick(Number(index)) 
      } : ()=>{
      setListSelect(Number(index))
      onClick(Number(id)) 
      handleFuntionSelectRuleIndex(Number(index))
      }} className={`${styles.button}  ${select === id && styles.buttonActive || listSelect.includes(id) && styles.buttonActive}`}>
        
        
        <span style={{backgroundColor:color}} >{index}</span>
        <p>{name}</p>

        {questionPropostionDiv ? "" :
        <p>{method}</p> 
        }
        <span style={{backgroundColor:color}}  className={typeActive ? `${styles.typePerso}` : `${styles.typedefault}`}>p</span>
    </li>
    }

{type === "add" && 
    <li onClick={
      is_selected_form ?()=>{
        setListSelect(Number(index))
        onClick(Number(index)) 
      } : ()=>{
      setListSelect(Number(index))
      onClick(Number(id)) 
      }} className={`${styles.button}  ${select === id && styles.buttonActive || listSelect.includes(id) && styles.buttonActive}`}>
        
        
        <span style={{backgroundColor:"#6D0000"}} >{index}</span>
        <p>{name}</p>

        {questionPropostionDiv ? "" :
        <p>{method}</p> 
        }
        <span style={{backgroundColor:"#6D0000"}}  className={typeActive ? `${styles.typePerso}` : `${styles.typedefault}`}>p</span>
    </li>
    }

{type=== "red" && 
    <li style={{opacity: .4}} className={`${styles.button}  ${select === id && styles.buttonActive || listSelect.includes(id) && styles.buttonActive}`}>
        
        
        <span style={{backgroundColor:"#6D0000"}} >{index}</span>
        <p>{name}</p>

        {questionPropostionDiv ? "" :
        <p>{method}</p> 
        }
        <span style={{backgroundColor:"#6D0000"}}  className={typeActive ? `${styles.typePerso}` : `${styles.typedefault}`}>p</span>
    </li>
    }

{type === "rem" &&
    <li style={{opacity: .4}} className={`${styles.button}  ${select === id && styles.buttonActive || listSelect.includes(id) && styles.buttonActive}`}>
        
        
        <span style={{backgroundColor:"#6D0000"}} >{index}</span>
        <p>{name}</p>

        {questionPropostionDiv ? "" :
        <p>{method}</p> 
        }
        <span style={{backgroundColor:"#6D0000"}}  className={typeActive ? `${styles.typePerso}` : `${styles.typedefault}`}>p</span>
    </li>
    }

    </>
  )
}

export default ButtonProposition