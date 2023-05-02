import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import PruebasBackend from './Components/PruebasBackend/PruebasBackend';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/prueba' element={<PruebasBackend/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
