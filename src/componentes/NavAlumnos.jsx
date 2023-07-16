import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavAlumnos({ isLoggedIn, setIsLoggedIn }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

if(isLoggedIn){

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark styl">
      <Link className="navbar-brand">Credenciales</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav navbar-dark">
          {isLoggedIn && (
            <>
              <Link to="/VistaPrevia" className="nav-link">
                <li className="nav-item active">Vista Previa</li>
              </Link>

              <Link to="/ActualizacionDatos" className="nav-link">
                <li className="nav-item">Actualizacion de datos</li>
              </Link>

              <Link to="/SolicitudReposicion" className="nav-link">
                <li className="nav-item">Solicitar reposicion</li>
              </Link>
            </>
          )}

          {isLoggedIn && (
            <li className="nav-item">
              <button className="btn btn-outline-danger ml-2" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );}

  else {
    return <></>
  }

}

export default NavAlumnos;
