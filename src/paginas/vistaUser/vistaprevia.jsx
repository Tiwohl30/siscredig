import React from 'react';
import Footer from "../../componentes/footer";

function VistaPrevia({ userData }) {


    console.log(userData.tipoLogin)
    
    return (
        <>
        
            <div className="container" style={{ marginBottom: '100px' }}>
                <div className="card mt-5">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Vista previa de credencial</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img className="img-fluid" src={userData.fotografia} alt="Foto" />
                            </div>
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nombre completo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={`${userData.nombre} ${userData.apellido_paterno} ${userData.apellido_materno}`} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Matrícula / numero de control:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={ userData.matricula ? userData.matricula : userData.numero_control} readOnly />
                                    </div>
                                </div>

                                { userData.cuatrimestre &&(
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Cuatrimestre:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.cuatrimestre} readOnly />
                                    </div>
                                </div>)}

                                { userData.carrera &&(
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Carrera:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.carrera} readOnly />
                                    </div>
                                </div>)}

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Correo:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.email} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Direccion:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.direccion} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Número de seguridad social:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.nss} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Tipo de sangre:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.tipo_sangre} readOnly />
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
                                        <input type="text" className="form-control" value={`${userData.nombre_contactoe} ${userData.apellido_paterno_contactoe} ${userData.apellido_materno_contactoe}`} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Número telefónico:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.telefono_contactoe}readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Parentesco</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={userData.parentescto_contactoe} readOnly />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default VistaPrevia;
