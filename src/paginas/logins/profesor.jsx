import '../../css/IniSes.css';
import { useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function LoginProfesor({ onLogin }){

      const navigate = useNavigate();

      const [error, setError] = useState('');
      const [numero_control, setNumero_control] = useState('');
      const [password, setPassword] = useState('');
    
      const handleMatriculaChange = (event) => {
        setNumero_control(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
        const response = await axios.post('https://siscredig-api.onrender.com/loginD/', { numero_control, password });
   
        // Obtén los datos del usuario autenticado
        const userDataResponse = await axios.get(`https://siscredig-api.onrender.com/api/docentes/${numero_control}`);
        const userData = {
          ...userDataResponse.data,
          tipoLogin: 'docentes', // Agrega el tipo de login al objeto userData
        };
        console.log(response.data);
        console.log(userData.data);
        onLogin(userData);

        navigate('/VistaPrevia');
        return userData
        } catch (error) {
        // Ocurrió un error durante la solicitud
        setError('Credenciales inválidas');
        console.error(error);
    }
      };
      

    return(
        <div>
            <body>
            <div>
            <div className="container">
                <div className="info">
                    <h1 className="titulos">Universidad Politecnica De Tapachula</h1>
                    <h1 className="sub">Maestros</h1>
                </div>
            </div>
            <div className="form">
                <div className="thumbnail">
                    <i className="fa-solid fa-user fa-4x"></i>
                </div>

                <form className="myForm" onSubmit={handleLogin}>
                    <input id="matri" type="text" placeholder="Numero de control" value={numero_control} onChange={handleMatriculaChange} required />
                    <input id="contra" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
                    <button type="submit">Iniciar sesión</button>
                    <p className="message">
                        Recuerda iniciar sesión con tu NUMERO DE CONTROL.
                    </p>
                    {error && <p>{error}</p>}
                </form>

            </div>
        </div>
            </body>
        </div>
    )
}

export default LoginProfesor;