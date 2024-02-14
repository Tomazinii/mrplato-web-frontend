import React from "react"

import styles from './Exercises.module.css'
import { Link, useParams } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotFound from "../NotFound/NotFound";

export default function ListExercise({stateExercise}: any) {
    const {idLista} = useParams()

 
    
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    
      }, []);

      

      if(isNaN(Number(idLista)) || stateExercise.question[Number(idLista)] === undefined) {
        
        return <NotFound/>
        
    }   

    const params = Number(idLista)
    

    return (
        <div className={styles.container}>
            
        <div className={styles.container}>
            <h1 className={styles.title}>Lista</h1>
                <div className={styles.boxlistMaster}>
                { 
                    stateExercise.question && stateExercise.question[params].data.map((content: any, index: number) => (
                    <Link
                        to={`${index}`}
                        key={index}
                        className={`${styles.boxlist} ${
                        content.availability ? "" : ""
                        }`}
                    >
                        
                        <CreateIcon/>
                        <p>{content}</p>
                        {true ? (
                        <CheckCircleIcon style={{color:"#FFF"}}/>
                        ) : (
                            <LockIcon />
                        )}
                    </Link>
                    ))}
                </div>
                </div>
        </div>
    )
}