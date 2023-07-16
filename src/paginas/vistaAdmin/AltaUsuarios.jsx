import React, { useState } from 'react';

const RegistroAlumnos = () => {
  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [nss, setNss] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState(1);
  const [telefono, setTelefono] = useState('');
  const [carrera, setCarrera] = useState('Ingenieria de software');
  const [nombreContacto, setNombreContacto] = useState('');
  const [apellidoPaternoContacto, setApellidoPaternoContacto] = useState('');
  const [apellidoMaternoContacto, setApellidoMaternoContacto] = useState('');
  const [parentescoContacto, setParentescoContacto] = useState('Padre');
  const [telefonoContacto, setTelefonoContacto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://siscredig-api.onrender.com/api/alumnos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matricula,
          nombre,
          apellido_paterno: apellidoPaterno,
          apellido_materno: apellidoMaterno,
          nss,
          direccion,
          tipo_sangre: tipoSangre,
          cuatrimestre,
          telefono,
          carrera,
          nombre_contactoe: nombreContacto,
          apellido_paterno_contactoe: apellidoPaternoContacto,
          apellido_materno_contactoe: apellidoMaternoContacto,
          parentescto_contactoe: parentescoContacto,
          telefono_contactoe: telefonoContacto,
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log('Usuario registrado exitosamente');
        // Aquí puedes redirigir a otra página o realizar alguna acción adicional después de registrar al usuario
      } else {
        console.error('Error al registrar al usuario');
      }
    } catch (error) {
      console.error('Error al conectar con la API', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Matricula:
        <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
      </label>
      <br />
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido Paterno:
        <input type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido Materno:
        <input type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
      </label>
      <br />
      <label>
        NSS:
        <input type="text" value={nss} onChange={(e) => setNss(e.target.value)} />
      </label>
      <br />
      <label>
        Dirección:
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </label>
      <br />
      <label>
        Tipo de Sangre:
        <input type="text" value={tipoSangre} onChange={(e) => setTipoSangre(e.target.value)} />
      </label>
      <br />
      <label>
        Cuatrimestre:
        <select value={cuatrimestre} onChange={(e) => setCuatrimestre(e.target.value)}>
          <option value={1}>Primer cuatrimestre</option>
          <option value={2}>Segundo cuatrimestre</option>
          <option value={3}>Tercer cuatrimestre</option>
          <option value={4}>Cuarto cuatrimestre</option>
          <option value={5}>Quinto cuatrimestre</option>
          <option value={6}>Sexto cuatrimestre</option>
          <option value={7}>Septimo cuatrimestre</option>
          <option value={8}>Octavo cuatrimestre</option>
          <option value={9}>Noveno cuatrimestre</option>
          <option value={10}>Decimo cuatrimestre</option>
        </select>
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <br />
      <label>
        Carrera:
        <select value={carrera} onChange={(e) => setCarrera(e.target.value)}>
          <option value="Ingenieria de software">Ingenieria de software</option>
          <option value="Ingenieria mecatronica">Ingenieria mecatronica</option>
          <option value="Ingenieria en animacion y efectos visuales">Ingenieria en animacion y efectos visuales</option>
        </select>
      </label>
      <br />
      <label>
        Nombre de Contacto de Emergencia:
        <input type="text" value={nombreContacto} onChange={(e) => setNombreContacto(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido Paterno de Contacto de Emergencia:
        <input type="text" value={apellidoPaternoContacto} onChange={(e) => setApellidoPaternoContacto(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido Materno de Contacto de Emergencia:
        <input type="text" value={apellidoMaternoContacto} onChange={(e) => setApellidoMaternoContacto(e.target.value)} />
      </label>
      <br />
      <label>
        Parentesco de Contacto de Emergencia:
        <select value={parentescoContacto} onChange={(e) => setParentescoContacto(e.target.value)}>
          <option value="Padre">Padre</option>
          <option value="Madre">Madre</option>
          <option value="Tio">Tio</option>
          <option value="Tia">Tia</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <br />
      <label>
        Teléfono de Contacto de Emergencia:
        <input type="text" value={telefonoContacto} onChange={(e) => setTelefonoContacto(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroAlumnos;
