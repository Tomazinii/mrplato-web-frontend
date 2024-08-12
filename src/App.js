
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenericRoutes from './routes/generic/GenericRoutes'
import {ExerciseProvider} from './context/ContextExercises'
import Login from './pages/login/Login'
import {UserProvider} from './context/ContenxtUser'
import RegisterStudent from './pages/user/RegisterStudent'
import Expired from './pages/user/Expired'
import {GlobalProvider} from './context/ContextGlobal'
import LandingPage from './pages/landingpage/LandingPage'
import { AdminRoutes } from './routes/generic/AdminRoutes';
import ForgotPassword from './pages/login/ForgotPassword';
import SetPassword from './pages/login/SetPassword';

function App() {

  
  return (
    <div className="App">
      <GlobalProvider>
      <UserProvider>
      <ExerciseProvider>
        
      <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/forgot-password' element={<ForgotPassword />}/>
              <Route path='/set-password/:linkId/:userEmail' element={<SetPassword />}/>
              <Route path='/' element={<LandingPage/>}/>
              <Route path="/invite/:idInvite/:idClassroom" element={<RegisterStudent />} />
              <Route path='/mrplato-admin/*' element={<AdminRoutes/>}/>
              <Route path="/expired" element={<Expired />} />
              <Route path="/*" element={<GenericRoutes />} />
            </Routes>
          </BrowserRouter>
          </ExerciseProvider>
        </UserProvider>
        </GlobalProvider>

    </div>
  );
}

export default App;
