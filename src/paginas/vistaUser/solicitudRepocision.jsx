import React, { useRef } from 'react';
import Footer from "../../componentes/footer";
import emailjs from '@emailjs/browser';





function Reposicion({ isLoggedIn, userData }) {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    form.current.elements.message.value += `\n \n \n Matricula / no. control: ${userData.matricula?userData.matricula:userData.numero_control} \nCarrera: ${userData.carrera}\nCuatrimestre : ${userData.cuatrimestre}`;
        
    emailjs.sendForm('service_7jgr6ik', 'template_zsfp2y7', form.current, 'WfcDUPKDYx17s-XYz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4">Solicitar reposición de credencial</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">


          <form ref={form} onSubmit={sendEmail} className="needs-validation" noValidate>
                <div className="form-group">
                  <label htmlFor="user_name">Nombre</label>
                  <input type="text" name="user_name" className="form-control" required value={`${userData.nombre} ${userData.apellido_paterno} ${userData.apellido_materno}`} />
                  <div className="invalid-feedback"> </div>
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Correo</label>
                  <input type="email" name="user_email" className="form-control" value={`${userData.email}`}required />
                  <div className="invalid-feedback"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Motivo de la solicitud: </label>
                  <textarea name="message" className="form-control" required></textarea>
                  <div className="invalid-feedback"> </div>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reposicion;
