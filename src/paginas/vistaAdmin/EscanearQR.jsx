import { useState, useEffect } from "react";
import { useZxing } from "react-zxing";
import NabvarAdmin from "../../componentes/NabvarAdmin";
import axios from "axios"


export const EscanerQR = () => {

const [alumnoData, setAlumnoData] = useState(null);
var valorDespuesDeMatricula = ""
const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  const texto = result

  // Buscamos la posición de "MATRICULA:"
  const posicionInicio = texto.indexOf("MATRICULA:");

  if (posicionInicio !== -1) {
    // Extraemos la subcadena que va después de "MATRICULA:"
    valorDespuesDeMatricula = texto.substring(posicionInicio + "MATRICULA:".length, posicionInicio + "MATRICULA:".length + 6).trim()
    console.log(valorDespuesDeMatricula); // Resultado: "221025"
  } else {
    console.log("No se encontró la subcadena 'MATRICULA:'");
  }


  useEffect(() => {
    // Función para realizar la petición a la API
    const buscarMatriculaEnAPI = async () => {
      try {
        const response = await axios.get(
          `https://siscredig-api.onrender.com/api/alumnos/${valorDespuesDeMatricula}`
        );
        const data = response.data;
        
        
        console.log(data);
        setAlumnoData(data)

      } catch (error) {
        console.error(error);
      }
    };

    if (valorDespuesDeMatricula) {
      buscarMatriculaEnAPI();
    }
  }, [valorDespuesDeMatricula]);

  return (
    <div className="text-center">
    <NabvarAdmin/>
      <video className="p-5" ref={ref}/>
      <p>
        <span className="datosQr">Datos:</span>
        <span className="resultadoQR">{result}, <br /> Valor despues de matricula:{valorDespuesDeMatricula}</span>
      </p>

      {alumnoData && (
        <div>
          <div className="container" style={{ marginBottom: '100px' }}>
                <div className="card mt-5">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Datos</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img className="img-fluid" src={alumnoData.fotografia} alt="Foto" />
                            </div>
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nombre completo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={`${alumnoData.nombre} ${alumnoData.apellido_paterno} ${alumnoData.apellido_materno}`} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Matrícula / numero de control:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={ alumnoData.matricula ? alumnoData.matricula : alumnoData.numero_control} readOnly />
                                    </div>
                                </div>

                                { alumnoData.cuatrimestre &&(
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Cuatrimestre:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.cuatrimestre} readOnly />
                                    </div>
                                </div>)}

                                { alumnoData.carrera &&(
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Carrera:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.carrera} readOnly />
                                    </div>
                                </div>)}

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Correo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.email} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Direccion:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.direccion} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Número de seguridad social:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.nss} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Tipo de sangre:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.tipo_sangre} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: '200px' }}>
                <div className="card mt-5">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Contacto de emergencia</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="https://via.placeholder.com/150x200" alt="Foto" />
                            </div>
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nombre completo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={`${alumnoData.nombre_contactoe} ${alumnoData.apellido_paterno_contactoe} ${alumnoData.apellido_materno_contactoe}`} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Número telefónico:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.telefono_contactoe}readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Parentesco</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={alumnoData.parentescto_contactoe} readOnly />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
    </div>
  );

};
