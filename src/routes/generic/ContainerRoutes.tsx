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
        {/* <Route path="" element={<Home />} /> */}
        {stateExercise.question && 
        <Route path="" element={<Interface dataQuestion={{ text: stateExercise.question, id: "0" }} />} />
      }
        <Route path="content" element={<Content />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </MrplatoProvider>
  );
}
