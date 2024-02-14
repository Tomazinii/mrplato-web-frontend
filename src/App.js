
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenericRoutes from './routes/generic/GenericRoutes'
import {ExerciseProvider} from './context/ContextExercises'
import Login from './pages/login/Login'
function App() {
  document.oncopy = function() {
    return false;
  };
  
  return (
    <div className="App">
      <ExerciseProvider>
      <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path="/*" element={<GenericRoutes />} />
            </Routes>
          </BrowserRouter>
          </ExerciseProvider>
    </div>
  );
}

export default App;
