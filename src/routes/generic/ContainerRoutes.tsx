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

export function ContainerRoutes() {
  const {stateExercise, dispatchExercise} = useContext(ContextExercises) || {} 

  

  React.useEffect(()=>{
    get_exercise().then((data)=>{
        dispatchExercise({type: GET_EXERCISE, payload: data})
    })
  },[])

  

  return (
    <MrplatoProvider>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/exercises/" element={<Exercise stateExercise={stateExercise}/>} />
        <Route path="/exercises/:idLista/" element={<ListExercise stateExercise={stateExercise}/>} />
        

        {stateExercise.question && 
        <Route path="/exercises/:idLista/:idQuestion/" element={<Interface stateExercise={stateExercise} />} />
      }
        <Route path="content" element={<Content />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </MrplatoProvider>
  );
}
