import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import PruebasBackend from './Components/PruebasBackend/PruebasBackend';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';
import Validate from './Components/Validate/Validate';
import Inicio from './Components/Inicio/Inicio';
import { useState } from 'react';
import ValidatePanel from './Components/ValidatePanel/ValidatePanel';


function App() {

  const [user1, setUser1] = useState()
  console.log(user1);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='login' element={<Login user1={user1} setUser1={setUser1} />} />
          <Route path='registro' element={<Registro />} />
          <Route path='*' element={<ErrorPage />} />
          <Route element={<Validate permiso={user1} />}>
            <Route path='menu' element={<Home />} />           
          </Route>
          <Route element={<ValidatePanel usuario={user1} />}>
            <Route path='panel' element={<PruebasBackend/>} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
