import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NombreBar from './NombreBar/NombreBar';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import PruebasBackend from './Components/PruebasBackend/PruebasBackend';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='menubar' element={<NombreBar/>} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/prueba' element={<PruebasBackend/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
