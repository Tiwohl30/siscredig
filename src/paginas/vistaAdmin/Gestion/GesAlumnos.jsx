import React, { useState, useEffect} from 'react';
import axios from 'axios';


function GestionAlumnos(){


  const [estudiantes, setEstudiantes] = useState([]);
  const [filtroMatricula, setFiltroMatricula] = useState('');
  const [estudiantesFiltrados, setEstudiantesFiltrados] = useState([]);



  useEffect(() => {
    // Hacer la solicitud HTTP a la API utilizando Axios
    axios.get('https://siscredig-api.onrender.com/api/alumnos')
      .then(response => {
        // Actualizar el estado con los datos recibidos de la API
        setEstudiantes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const handleDelete = (matricula) => {
    axios
      .delete(`https://siscredig-api.onrender.com/api/alumnos/${matricula}`)
      .then((response) => {
        // Verificar la respuesta de la API y actualizar la lista de estudiantes
        if (response.status === 200) {
          const updatedEstudiantes = estudiantesFiltrados.filter(
            (estudiante) => estudiante.matricula !== matricula
          );
          setEstudiantesFiltrados(updatedEstudiantes);
        } else {
          console.error('Error al eliminar estudiante');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };




  const toggleCredencialActiva = (matricula, estadoActual) => {
    const nuevoEstado = !estadoActual;
  
    axios
      .patch(`https://siscredig-api.onrender.com/api/alumnos/${matricula}/`, {
        credencial_activa: nuevoEstado,
      })
      .then((response) => {
        // Verificar la respuesta de la API y actualizar el estado del estudiante
        if (response.status === 200) {
          const updatedEstudiantes = estudiantesFiltrados.map((estudiante) => {
            if (estudiante.matricula === matricula) {
              return { ...estudiante, credencial_activa: nuevoEstado };
            }
            return estudiante;
          });
          setEstudiantesFiltrados(updatedEstudiantes);
        } else {
          console.error('Error al cambiar el estado de la credencial');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const estudiantesFiltrados = estudiantes.filter(estudiante =>
      estudiante.matricula.toString().includes(filtroMatricula)
    );
    setEstudiantesFiltrados(estudiantesFiltrados);
  }, [estudiantes, filtroMatricula]);


    
        return (
            <div>
              
      <div className="container">
      
            

            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Estudiantes</h5>
                    <p className="card-text">Número total de estudiantes: X</p>
                      <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo2">Simple collapsible</button>
                      <div id="demo2" className="collapse">

                      <br />
                      <input
                        type="text"
                        value={filtroMatricula}
                        onChange={(e) => setFiltroMatricula(e.target.value)}
                        placeholder="Filtrar por matrícula"
                        className="form-control mb-2 col-3"
                      />
                      <br />

                      <table className="table">
                        <thead>
                          <tr>
                            <th>Matrícula</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Carrera</th>
                            <th>Cuatrimestre</th>
                            <th>Telefono</th>
                            <th>Cred. Activa</th>
                          </tr>
                        </thead>
                        <tbody>
                      {estudiantesFiltrados.map(estudiante => (
                        <tr key={estudiante.matricula}>
                          <td>{estudiante.matricula}</td>
                          <td>{estudiante.nombre}</td>
                          <td>{estudiante.apellido_paterno}</td>
                          <td>{estudiante.apellido_materno}</td>
                          <td>{estudiante.carrera}</td>
                          <td>{estudiante.cuatrimestre}</td>
                          <td>{estudiante.telefono}</td>
                          <td>{estudiante.credencial_activa ? 'Sí' : 'No'}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDelete(estudiante.matricula)}
                            >
                              Eliminar
                            </button>
                            
                            <button
                                onClick={() => toggleCredencialActiva(estudiante.matricula, estudiante.credencial_activa)}
                                className="btn btn-primary"
                              >
                                {estudiante.credencial_activa ? 'Desactivar' : 'Activar'}
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

export default GestionAlumnos;
