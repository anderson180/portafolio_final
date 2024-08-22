import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Portafolio from './pages/Portafolio';
import AcercaDeMi from './pages/AcercaDeMi';
import MisProyectos from './pages/MisProyectos';
import Contacto from './pages/Contacto';
import NavBar from './components/share/NavBar';

// Usamos location para localizar el primer linck que deseo mostra que es este caso es Pagina de inicio
//En este código, NavBar se renderiza solo si la ruta actual no es '/'. De esta manera, cuando el usuario está en la página de inicio (PaginaInicio), el NavBar no se muestra. Cuando navega a cualquier otra ruta, el NavBar aparece.

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
      <Route path='/' element={<NavBar />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/acercademi' element={<AcercaDeMi />} />
        <Route path='/misproyectos' element={<MisProyectos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;



