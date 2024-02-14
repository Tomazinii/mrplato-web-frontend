import React from 'react'
import ButtonInputForm from '../../component/buttons/ButtonInputForm'
import { Caracteres } from '../../utils/caracters'

import styles from './InputForm.module.css'


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Backspace } from '@mui/icons-material';
import UndoIcon from '@mui/icons-material/Undo';
import SendIcon from '@mui/icons-material/Send';

interface InputFormProps {
  handleInputTextInputForm: (caracter: string)=>void;
  inputTextInputForm: string[];
  handleInputTextInputFormClear: ()=>void;
  setOpenInputForm: React.Dispatch<React.SetStateAction<boolean>>
  handleAdd: ()=>void;
}

const InputForm:React.FC<InputFormProps> = ({handleInputTextInputForm, inputTextInputForm,handleInputTextInputFormClear,setOpenInputForm, handleAdd}) =>{
    let inputValue = inputTextInputForm
  return (
    <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "95%", marginTop:"10px", marginBottom:"20px" }}
                >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
            </IconButton>
            <InputBase
                placeholder="Insert caracter"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={inputValue}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Backspace onClick={()=>{handleInputTextInputFormClear()}}  style={{color: "var(--second-color-button-light)"}} />

            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <UndoIcon onClick={()=>{setOpenInputForm(false)}} style={{color: "rgb(131, 20, 20)"}} />

            </IconButton>
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <SendIcon onClick={()=>{handleAdd()
            }} style={{color: "rgb(3, 85, 28)"}} />
            </IconButton>
            </Paper>



        <div className={styles.containerButton}>
            {Caracteres.group1.map((element)=>(
            <ButtonInputForm  color="rgb(152, 105, 214)" text={element.data} onclick={handleInputTextInputForm} />
            ))}
        </div>


        <div className={styles.containerButton}>
            {Caracteres.group2.map((element)=>(
            <ButtonInputForm color="#22819e" text={element.data} onclick={handleInputTextInputForm}/>
            ))} 
        </div>


        <div className={styles.containerButton}>
            {Caracteres.group3.map((element)=>(
            <ButtonInputForm color="#5a305f" text={element.data} onclick={handleInputTextInputForm}/>
            ))}
        </div>


        <div className={styles.containerButton}>
            {Caracteres.group4.map((element)=>(
            <ButtonInputForm color="#325f30" text={element.data} onclick={handleInputTextInputForm} />
            ))}
        </div>


        
    </div>
  )
}

export default InputForm