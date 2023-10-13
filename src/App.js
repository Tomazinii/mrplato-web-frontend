
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenericRoutes from './routes/generic/GenericRoutes'

function App() {
  document.oncopy = function() {
    return false;
  };
  
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/*" element={<GenericRoutes />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
