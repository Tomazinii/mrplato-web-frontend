import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Content from "../../pages/content/Content";
import Interface from "../../pages/interface/Interface";
import { MrplatoProvider } from "../../context/ContextMrplato";
import { ContextExercises } from "../../context/ContextExercises";
import { get_exercise } from "../../api/Exercise.api";
import { GET_EXERCISE } from "../../api/types";
import Exercise from "../../pages/exercises/Exercise";
import ListExercise from "../../pages/exercises/ListExercise";
import Settings from "../../pages/settings/Settings";
import Classroom from "../../pages/admin/Classroom";
import ClassroomElement from "../../pages/admin/ClassroomElement";
import Invite from "../../pages/admin/Invite";
import { ContextUser } from "../../context/ContenxtUser";
import ClassroomCreate from "../../pages/admin/ClassroomCreate";


export function ContainerRoutes() {
  const {stateExercise, dispatchExercise} = useContext(ContextExercises) || {} 
  const { stateUser, dispatchUser } = useContext(ContextUser) || {} ;

  

  React.useEffect(()=>{
    get_exercise().then((data)=>{
        dispatchExercise({type: GET_EXERCISE, payload: data})
    })
  },[])

  

  return (
    <MrplatoProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/exercises/" element={<Exercise stateExercise={stateExercise}/>} />
        <Route path="/exercises/:idLista/" element={<ListExercise stateExercise={stateExercise}/>} />

        {stateExercise.question && 
        <Route path="/exercises/:idLista/:idQuestion/" element={<Interface stateExercise={stateExercise} />} />
      }
        <Route path="content" element={<Content />} />
        <Route path="*" element={<NotFound/>} />


        
        
      {stateUser && stateUser.is_admin &&
              <Route path="/mrplato-admin/classrooms" element={< Classroom/>} />
      }
      {stateUser && stateUser.is_admin &&
              <Route path="/mrplato-admin/classrooms/:idTurma" element={< ClassroomElement/>} />
            }
      {stateUser && stateUser.is_admin &&
              <Route path="/mrplato-admin/classrooms/:idTurma/invite" element={< Invite/>} />
            }
      {stateUser && stateUser.is_admin &&
              <Route path="/mrplato-admin/classrooms/:idTurma/invite" element={< Invite/>} />
      }
      {stateUser && stateUser.is_admin &&
              <Route path="/mrplato-admin/classrooms/create" element={< ClassroomCreate/>} />
      }

      
      </Routes>
    </MrplatoProvider>
  );
}
