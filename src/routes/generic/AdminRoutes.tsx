import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { MrplatoProvider } from "../../context/ContextMrplato";
import Classroom from "../../pages/admin/Classroom";
import ClassroomElement from "../../pages/admin/ClassroomElement";
import Invite from "../../pages/admin/Invite";
import { ContextUser } from "../../context/ContenxtUser";
import ClassroomCreate from "../../pages/admin/ClassroomCreate";
import Activity from "../../pages/admin/Activity";
import { ClassroomProvider, ContextClassroom } from "../../context/ContextClassroom";
import { CheckAuthentication } from "../../middleware/checkAuthentication";
import UpdateActivity from "../../pages/admin/UpdateActivity";
import Students from "../../pages/admin/Students";
import Statistic from "../../pages/admin/Statistic";
export function AdminRoutes() {
  const { stateUser, dispatchUser } = useContext(ContextUser) || {} ;
    
  
  return (
    <ClassroomProvider>
    <CheckAuthentication>
        <MrplatoProvider>
      <Routes>
        
      {stateUser && stateUser.is_admin &&
              <Route path="/classrooms" element={< Classroom/>} />
      }
      {stateUser && stateUser.is_admin &&
              <Route path="/classrooms/:idTurma" element={< ClassroomElement/>} />
            }

      {stateUser && stateUser.is_admin &&
        <Route path="/classrooms/:idTurma/students" element={< Students/>} />
        }

        {stateUser && stateUser.is_admin &&
        <Route path="/classrooms/:idTurma/statistic" element={< Statistic/>} />
        }
      {stateUser && stateUser.is_admin &&
              <Route path="/classrooms/:idTurma/invite" element={< Invite/>} />
            }
      {stateUser && stateUser.is_admin &&
              <Route path="/classrooms/:idTurma/activity" element={< Activity/>} />
      }
      {stateUser && stateUser.is_admin &&
              <Route path="/classrooms/:idTurma/activity/update/:idActivity" element={< UpdateActivity/>} />
      }
      {stateUser && stateUser.is_admin &&
              <Route path="/classrooms/create" element={< ClassroomCreate/>} />
      }

      
      </Routes>
    </MrplatoProvider>

    </CheckAuthentication>
    </ClassroomProvider>
  );
}
