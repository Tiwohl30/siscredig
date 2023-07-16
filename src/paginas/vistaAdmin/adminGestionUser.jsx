import React from 'react';

import NabvarAdmin from '../../componentes/NabvarAdmin';
import GestionAlumnos from './Gestion/GesAlumnos';
import GestionMaestros from './Gestion/GesMaestros';
import GestionOtros from './Gestion/GesOtros';

function AdminGestionUsuarios(){


 



    
        return (
            <div>
              <NabvarAdmin/>
      <div className="container">
      <h1 className="mt-4">Resumen</h1>
            

          <GestionMaestros />
          
          <GestionAlumnos />


          <GestionOtros />


            

      
      </div>

                <footer className="bg-dark text-light py-3" style={{ marginTop: "200px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Contacto</h5>
                                <p>Contacto@uptapachula.edu.mx</p>
                                <p>(962) 689 0090 Ext. 1001-1010</p>
                                <p>Carretera Tapachula - Puerto Madero KM. 24 + 300. Tapachula, Chiapas</p>
                            </div>
                            <div className="col-md-8 text-md-right">
                                <p>&copy; 2023, UP Tapachula. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    
}

export default AdminGestionUsuarios;
