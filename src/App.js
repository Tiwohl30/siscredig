import React, { useState } from 'react';
import './index.css';
import ActualizacionDatos from './paginas/vistaUser/ActualizacionDatosPage';
import VistaPrevia from './paginas/vistaUser/vistaprevia';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Reposicion from './paginas/vistaUser/solicitudRepocision';
import LoginAlumno from './paginas/logins/alumno';
import LoginAdmin from './paginas/logins/administradores';
import Accesos from './paginas/accesos';
import { EscanerQR } from './paginas/vistaAdmin/EscanearQR';
import AdminGestionUsuarios from './paginas/vistaAdmin/adminGestionUser';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LoginProfesor from './paginas/logins/profesor';
import NavAlumnos from './componentes/NavAlumnos';
import LoginOtros from './paginas/logins/otros';
import NabvarAdmin from './componentes/NabvarAdmin';
import RegistroAlumnos from './paginas/vistaAdmin/AltaUsuarios';




  function App() {

   
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    const handleLogin = (user) => {
      setIsLoggedIn(true);
      setUserData(user);
    };

    const handleAdminLogin = (user) => {
      setIsAdminLoggedIn(true);
      setUserData(user);
      console.log(isAdminLoggedIn)
    };
    
      return (
        <>
        
       
        <BrowserRouter>
        <NavAlumnos isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
        <NabvarAdmin isAdminLoggedIn={isAdminLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn} />
          <Routes>
            <Route path="/" element={<Accesos />} />
            <Route path="/loginAlumnos" element={<LoginAlumno onLogin={handleLogin}/>}/>
            <Route path="/loginMaestro" element={<LoginProfesor onLogin={handleLogin}/>} />
            <Route path="/loginOtros" element={<LoginOtros onLogin={handleLogin}/>}/>
            <Route path="/loginAdmin" element={<LoginAdmin onAdminLogin={handleAdminLogin}/>} />
        
            <Route
              path="/VistaPrevia"
              element={isLoggedIn ? <VistaPrevia isLoggedIn={isLoggedIn} userData={userData}/> : <Navigate to="/" />}
            />

            <Route
              path="/ActualizacionDatos"
              element={isLoggedIn ? <ActualizacionDatos isLoggedIn={isLoggedIn} userData={userData}/> : <Navigate to="/" />}
            />

            <Route
              path="/SolicitudReposicion"
              element={isLoggedIn ? <Reposicion isLoggedIn={isLoggedIn} userData={userData}/> : <Navigate to="/" />}
            />

            <Route path="/GestionUsuarios" 
            element={isAdminLoggedIn ? <AdminGestionUsuarios isAdminLoggedIn={isAdminLoggedIn} userData={userData}/> : <Navigate to="/" />} />

            <Route path="/EscanearQR"
            element={<EscanerQR isAdminLoggedIn={isAdminLoggedIn}/>} />
            
             <Route path="/AltaAlumnos" 
            element={<RegistroAlumnos isAdminLoggedIn={isAdminLoggedIn}/>} /> 
          </Routes>
        </BrowserRouter>
        </>
      );
    }
    
  export default App;
