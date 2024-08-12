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
import Activity from "../../pages/admin/Activity";
import { getActivityFunctions, inputgetActivityFunctionsProps } from "../../utils/classroom/getActivitiesFunctions";
import { ContextClassroom } from "../../context/ContextClassroom";
import { MiniDrawer } from "../../component/sidebar/MiniDrawer";
import Challenge from "../../pages/challenges/Challenges";
import ListChallenges from "../../pages/challenges/ListChallenges";


export function ContainerRoutes() {
  const {stateExercise, dispatchExercise} = useContext(ContextExercises) || {} 
  const {stateClassroom, dispatchClassroom} = useContext(ContextClassroom) || {}
  const { stateUser, dispatchUser } = useContext(ContextUser) || {} ;

    
  
  return (
    <MrplatoProvider>


      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/exercises/" element={<Exercise stateExercise={stateClassroom}/>} />

        <Route path="/exercises/:idLista/" element={<ListExercise stateExercise={stateClassroom}/>} />

        {stateExercise && 
        <Route path="/exercises/:idLista/:idQuestion/" element={<Interface stateExercise={stateClassroom} />} />
      }

        <Route path="/challenges/" element={<Challenge stateExercise={stateClassroom}/>} />
        <Route path="/challenges/:idLista/" element={<ListChallenges stateExercise={stateClassroom}/>} />
        {stateExercise && 
        <Route path="/challenges/:idLista/:idQuestion/" element={<Interface stateExercise={stateClassroom} />} />
      }

        <Route path="content" element={<Content />} />
        <Route path="*" element={<NotFound/>} />
        
      
      
      </Routes>

    </MrplatoProvider>
  );
}
