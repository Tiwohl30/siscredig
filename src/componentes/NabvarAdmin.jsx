import { Link, useNavigate } from 'react-router-dom';
import React from 'react';


function NabvarAdmin({ isAdminLoggedIn, setIsAdminLoggedIn }) {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAdminLoggedIn(false);
        navigate('/');
    };

    if(isAdminLoggedIn){
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark styl">
                <span className="navbar-brand" href="#">Administrador</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                { isAdminLoggedIn&&(<ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/GestionUsuarios">Gestión de usuarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EscanearQR">Escanear QR</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/AltaAlumnos">Alta alumnos</Link>
                        </li>
                    </ul>)}

                    {isAdminLoggedIn && (
                    <li className="nav-item">
                    <button className="btn btn-outline-danger ml-2" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                    </li>
                )}
                </div>
            </nav>

        </div>
    )
} else { }}

export default NabvarAdmin;