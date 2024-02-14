import React from "react"

import styles from './Exercises.module.css'
import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import CreateIcon from '@mui/icons-material/Create';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Exercise({stateExercise}:any) {

    let new_list_exercise = [{content:{availability: true, slug: "teste"}}]
    React.useEffect(() => {
        window.scrollTo(0, 0);
    
      }, []);
    

    return (
        <div className={styles.container}>
            
        <div className={styles.container}>
            <h1 className={styles.title}>Exercises</h1>
                <div className={styles.boxlistMaster}>
                {
                    stateExercise.question && stateExercise.question.map((content: any, index: number) => (
                    <Link
                        onClick={() => {
                        localStorage.setItem("LISTID", content.id);
                        }}
                        to={stateExercise.question ? `${index}` : ""}
                        key={index}
                        className={`${styles.boxlist} ${
                        content.availability ? "" : ""
                        }`}
                    >
                        
                        <CreateIcon/>
                        <p>{content.name}</p>
                        {true ? (
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