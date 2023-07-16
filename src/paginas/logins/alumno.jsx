import '../../css/IniSes.css';
import { useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../../css/background.css';

function LoginAlumno({ onLogin }){

      const navigate = useNavigate();

      const [error, setError] = useState('');
      const [matricula, setMatricula] = useState('');
      const [password, setPassword] = useState('');
    
      const handleMatriculaChange = (event) => {
        setMatricula(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
        const response = await axios.post('https://siscredig-api.onrender.com/login/', { matricula, password });
  
  
        const userDataResponse = await axios.get(`https://siscredig-api.onrender.com/api/alumnos/${matricula}`);
        const userData = {
            ...userDataResponse.data,
            tipoLogin: 'alumnos', // Agrega el tipo de login al objeto userData
          };
    
          console.log(response.data);
          console.log(userData);
          onLogin(userData);
    
          navigate('/VistaPrevia');
          return userData;
        } catch (error) {
        // Ocurrió un error durante la solicitud, puedes manejarlo aquí.
        setError('Credenciales inválidas');
        console.error(error);
    }
      };
      

    return(
        <div className='fondo-componente'>
            <body>
            <div>
            <div className="container">
                <div className="info">
                    <h1 className="titulos">Universidad Politecnica De Tapachula</h1>
                    <h1 className="sub">Alumnos</h1>
                </div>
            </div>
            <div className="form">
                <div className="thumbnail">
                    <i className="fa-solid fa-user fa-4x"></i>
                </div>

                <form className="myForm" onSubmit={handleLogin}>
                    <input id="matri" type="text" placeholder="Matricula" value={matricula} onChange={handleMatriculaChange} required />
                    <input id="contra" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
                    <button type="submit">Iniciar sesión</button>
                    <p className="message">
                        Recuerda iniciar sesión con tu MATRICULA.
                    </p>
                    {error && <p>{error}</p>}
                </form>

            </div>
        </div>
            </body>
        </div>
    )
}

export default LoginAlumno;