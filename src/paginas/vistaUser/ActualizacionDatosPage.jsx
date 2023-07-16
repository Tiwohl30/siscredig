import React, { useState } from 'react';
import axios from 'axios';
//import Loading from '../../componentes/buttons/circularColor';
import Footer from "../../componentes/footer";

function ActualizacionDatos({userData}) {
  const [nombre, setNombre] = useState('');
  const [apellido_paterno, setApellidoPaterno] = useState('');
  const [apellido_materno, setApellidoMaterno] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState('');
  const [nss, setNss] = useState('');
  const [nombre_contactoe, setNombreContacto] = useState('');
  const [apellido_paterno_contactoe, setApellidoPaternoContacto] = useState('');
  const [apellido_materno_contactoe, setApellidoMaternoContacto] = useState('');
  const [telefono_contactoe, setTelefonoContacto] = useState('');
  

  console.log(userData.tipoLogin)

  const handleUpdateData = async (event) => {
    event.preventDefault();

    try {
      if (userData.tipoLogin === 'alumnos') {
        // Realiza la petición PATCH para docente
        const response = await axios.patch(`https://siscredig-api.onrender.com/api/alumnos/${userData.matricula}/`, {
          nombre,
          apellido_paterno,
          apellido_materno,
          cuatrimestre,
          nss,
          nombre_contactoe,
          apellido_paterno_contactoe,
          apellido_materno_contactoe,
          telefono_contactoe,
          
        });

        console.log(response.data);
      } else if (userData.tipoLogin === 'docentes') {
        // Realiza la petición PATCH para alumno
        const response = await axios.patch(`https://siscredig-api.onrender.com/api/docentes/${userData.numero_control}/`, {
          nombre,
          apellido_paterno,
          apellido_materno,
          nss,
          nombre_contactoe,
          apellido_paterno_contactoe,
          apellido_materno_contactoe,
          telefono_contactoe,
          
        });

        console.log(response.data);

      } else if (userData.tipoLogin === 'otros') {
        // Realiza la petición PATCH para otros
        const response = await axios.patch(`https://siscredig-api.onrender.com/api/otros/${userData.numero_control}/`, {
          nombre: nombre,
          apellido_paterno: apellido_paterno,
          apellido_materno: apellido_materno,
          nss: nss,
          nombre_contactoe: nombre_contactoe,
          apellido_paterno_contactoe: apellido_paterno_contactoe,
          apellido_materno_contactoe: apellido_materno_contactoe,
          telefono_contactoe: telefono_contactoe,
          
        });

        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Actualización de datos del estudiante</h2>
            <form onSubmit={handleUpdateData}>
              Los datos se veran reflejados una vez que vuelvas a iniciar sesion en la pagina:)
              <br />
              
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nombre">Apellido paterno:</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido_paterno"
                  value={apellido_paterno}
                  onChange={(event) => setApellidoPaterno(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nombre">Apellido materno:</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido_materno"
                  value={apellido_materno}
                  onChange={(event) => setApellidoMaterno(event.target.value)}
                />
              </div>

            { userData.cuatrimestre &&(
              <div className="form-group">
                <label htmlFor="cuatrimestre">Cuatrimestre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cuatrimestre"
                  value={cuatrimestre}
                  onChange={(event) => setCuatrimestre(event.target.value)}
                />
              </div>)}

              <div className="form-group">
                <label htmlFor="nss">Número de seguridad social:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nss"
                  value={nss}
                  onChange={(event) => setNss(event.target.value)}
                />
              </div>
              <hr />
              <h3>Datos de contacto de emergencia</h3>
              <div className="form-group">
                <label htmlFor="nombre_contacto">Nombre del contacto:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_contacto"
                  value={nombre_contactoe}
                  onChange={(event) => setNombreContacto(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombre_contacto">Apellido paterno del contacto:</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido_paterno_contacto"
                  value={apellido_paterno_contactoe}
                  onChange={(event) => setApellidoPaternoContacto(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombre_contacto">Apellido materno del contacto:</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido_materno_contacto"
                  value={apellido_materno_contactoe}
                  onChange={(event) => setApellidoMaternoContacto(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono_contacto">Número telefónico:</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono_contacto"
                  value={telefono_contactoe}
                  onChange={(event) => setTelefonoContacto(event.target.value)}
                />
              </div>
              
              
                <button type="submit" className="btn btn-primary">Actualizar datos</button>
              
            </form>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src="ruta/imagen" className="card-img-top" alt="Foto de perfil" />
              <div className="card-body">
                <h5 className="card-title">Editar foto de perfil</h5>
                <input type="file" className="form-control-file" id="imagen" accept="image/*" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ActualizacionDatos;
