import React, { useContext } from "react"

import styles from './Exercises.module.css'
import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import CreateIcon from '@mui/icons-material/Create';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Exercise({stateExercise}:any) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const typeActivity = "exercises"
      const exercises_list = stateExercise.activity_list && stateExercise.activity_list.filter((obj: any )=> obj.category === typeActivity)
      
    return (
        <div className={styles.container}>
            
        <div className={styles.container}>
            <h1 className={styles.title}>Exercises</h1>
                <div className={styles.boxlistMaster}>
                    
                {
                    exercises_list && exercises_list.map((content: any, index: number) => (
                        
                    <Link
                        onClick={() => {
                        localStorage.setItem("LISTID", stateExercise.activity_list && content.id);
                        }}
                        to={stateExercise.activity_list && content.availability ? `${stateExercise.activity_list && content.id}` : ""}
                        key={index}
                        className={`${styles.boxlist} ${
                        content.availability ? "":  `${styles.block}`
                        }`}
                    >
                        <CreateIcon/>
                        <p>{stateExercise.activity_list && content.problem_name}</p>
                        <p>expires in {stateExercise.activity_list && new Date(content.time).toLocaleString('pt-BR')}</p>
                        {stateExercise.activity_list && content.availability ? (
                        <KeyboardArrowRightIcon/>
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