import React from "react"

import styles from './Exercises.module.css'
import { Link, useParams } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ListExercise({stateExercise}: any) {
    const {idLista} = useParams()
    
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    
      }, []);

    const data = stateExercise.activity_list && stateExercise.activity_list.find((element: any) => element.id === idLista)
    
    return (
        <div className={styles.container}>
            
        <div className={styles.container}>
            <h1 className={styles.title}>Lista</h1>
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