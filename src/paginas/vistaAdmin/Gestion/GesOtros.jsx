import React, { useState, useEffect} from 'react';
import axios from 'axios';


function GestionOtros(){


  const [Otros, setOtros] = useState([]);
  const [filtroNumero_control, setFiltroNumero_control] = useState('');
  const [OtrosFiltrados, setOtrosFiltrados] = useState([]);



  useEffect(() => {
    // Hacer la solicitud HTTP a la API utilizando Axios
    axios.get('https://siscredig-api.onrender.com/api/otros')
      .then(response => {
        // Actualizar el estado con los datos recibidos de la API
        setOtros(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const handleDelete = (numero_control) => {
    axios
      .delete(`https://siscredig-api.onrender.com/api/otros/${numero_control}`)
      .then((response) => {
        // Verificar la respuesta de la API y actualizar la lista de Otros
        if (response.status === 200) {
          const updatedOtros = OtrosFiltrados.filter(
            (otro) => otro.numero_control !== numero_control
          );
          setOtrosFiltrados(updatedOtros);
        } else {
          console.error('Error al eliminar otro');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };




  const toggleCredencialActiva = (numero_control, estadoActual) => {
    const nuevoEstado = !estadoActual;
  
    axios
      .patch(`https://siscredig-api.onrender.com/api/otros/${numero_control}/`, {
        credencial_activa: nuevoEstado,
      })
      .then((response) => {
        // Verificar la respuesta de la API y actualizar el estado del otro
        if (response.status === 200) {
          const updatedOtros = OtrosFiltrados.map((otro) => {
            if (otro.numero_control === numero_control) {
              return { ...otro, credencial_activa: nuevoEstado };
            }
            return otro;
          });
          setOtrosFiltrados(updatedOtros);
        } else {
          console.error('Error al cambiar el estado de la credencial');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const OtrosFiltrados = Otros.filter(otro =>
      otro.numero_control.toString().includes(filtroNumero_control)
    );
    setOtrosFiltrados(OtrosFiltrados);
  }, [Otros, filtroNumero_control]);


    
        return (
            <div>
              
      <div className="container">
      
            

            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Otros</h5>
                    <p className="card-text">Número total de Otros: X</p>
                      <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo3">Simple collapsible</button>
                      <div id="demo3" className="collapse">

                      <br />
                      <input
                        type="text"
                        value={filtroNumero_control}
                        onChange={(e) => setFiltroNumero_control(e.target.value)}
                        placeholder="Filtrar por matrícula"
                        className="form-control mb-2 col-3"
                      />
                      <br />

                      <table className="table">
                        <thead>
                          <tr>
                            <th>NumControl</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                            <th>Cred. Activa</th>
                          </tr>
                        </thead>
                        <tbody>
                      {OtrosFiltrados.map(otro => (
                        <tr key={otro.numero_control}>
                          <td>{otro.numero_control}</td>
                          <td>{otro.nombre}</td>
                          <td>{otro.apellido_paterno}</td>
                          <td>{otro.apellido_materno}</td>
                          <td>{otro.email}</td>
                          
                          <td>{otro.telefono}</td>
                          <td>{otro.credencial_activa ? 'Sí' : 'No'}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDelete(otro.numero_control)}
                            >
                              Eliminar
                            </button>
                            
                            <button
                                onClick={() => toggleCredencialActiva(otro.numero_control, otro.credencial_activa)}
                                className="btn btn-primary"
                              >
                                {otro.credencial_activa ? 'Desactivar' : 'Activar'}
                              </button>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>

      
      </div>

            </div>
        );
    
}

export default GestionOtros;
