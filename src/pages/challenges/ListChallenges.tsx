import React, { useContext, useState } from "react"

import styles from './Exercises.module.css'
import { Link, useParams } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ContextUser } from "../../context/ContenxtUser";
import { copy_hash_solution, get_solved_activity } from "../../api/Statistic.api";
import { Button } from "@mui/material";

export default function ListChallenges({stateExercise}: any) {
    const {idLista} = useParams()
    const {stateUser, dispatchUser} = useContext(ContextUser) || {}
    const [solvedActivity, setSolvedActivity]: any = useState([])
    const [hashContent, setHashContent] = useState("")
    
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
        get_solved_activity(String(idLista), String(stateUser.user_id)).then((result)=>{
            if(result.success){
                setSolvedActivity(result.data.body.data.list_of_resolved_ativity)
                
            }
            
        })
      }, []);

    const data = stateExercise.activity_list && stateExercise.activity_list.find((element: any) => element.id === idLista)
    
    const [texto, setTexto] = useState('Finish Task');
    const [copiado, setCopiado] = useState(false);
  
    const copiarTexto = (text: any) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiado(true);
          setTimeout(() => {
            setCopiado(false);
          }, 5000); // Reset o estado depois de 2 segundos
        })
        .catch(err => {
          console.error('Erro ao copiar: ', err);
        });
    }

    const copyHashFunction = ()=>{
        copy_hash_solution(String(idLista), String(stateUser.user_id)).then((result)=>{
            if(result.success){
                copiarTexto(result.data.body.data)
                setHashContent(String(result.data.body.data))
                setTexto("Copy your key!")
            }
            
        })
    }

    return (
        <div className={styles.container}>
            
        <div className={styles.container}>
        <h1 className={styles.title}>List of challenges</h1>
            <h3 >Select the challenge</h3>
            <Button onClick={()=>{copyHashFunction()}} style={{color:"#63008D" , borderColor: '#63008D'   }} variant="outlined">{texto}</Button>
            {hashContent &&
            <p className={styles.texto} > {hashContent}</p>}
                <div className={styles.boxlistMaster}>
                { 
                    data && data.problem && data.problem.map((content: any, index: number) => (
                    <Link
                        onClick={()=>{localStorage.setItem('question', content)}}
                        to={`${index}`}
                        key={index}
                        className={`${styles.boxlist} ${
                        content.availability ? "" : ""
                        }`}
                    >
                        
                        {/* <CreateIcon/> */}
                        <div className={styles.index}>{index}</div>
                        <p>{content}</p>
                        {solvedActivity.includes(index) ? (
                        <CheckCircleIcon style={{color:"#15B51F"}}/>
                        ) : (
                            <CheckCircleIcon style={{color:"#fff"}}/>
                        )}
                    </Link>
                    ))}
                </div>
                </div>
        </div>
    )
}