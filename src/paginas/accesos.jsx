import React from 'react';
import '../css/opcion.css';
import '../img/fondo.jpeg';
import Button from '@mui/material/Button';
import Footer from '../componentes/footer'
import BarraAcceso from '../componentes/bar';
import { Link } from "react-router-dom"


function Accesos() {


    

    return (
        <div className='fondo-componente'>
            <BarraAcceso/>
            <div className="separador" />
            
            <div className="container">
                <div className="info">
                    <h1>Universidad Politécnica De Tapachula</h1>
                    <span>
                        <a href="/">Bienvenido a Credencialización Digital</a>
                    </span>
                </div>
                <div className="menu">
                    <div className="menu-item alumno">
                        <i className="fa-solid fa-user" />
                        <h2>Alumno</h2>
                        <Link to="LoginAlumnos">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Docente</h2>
                        <Link to="/loginMaestro">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Otros</h2>
                        <Link to="loginOtros">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>
                    <div className="menu-item administrativos">
                        <i className="fa-solid fa-shield-halved" />
                        <h2>Administrativos</h2>
                        <Link to="/loginAdmin">
                            <Button variant="outlined" color='secondary'>IR</Button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className='separator'></div>
            <Footer/>
        </div>
    );
}

export default Accesos;
