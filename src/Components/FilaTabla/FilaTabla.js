import axios from 'axios'
import React from 'react'

const FilaTabla = ({ nombre, email, estado2, id2, rol, pw, key1}) => {

  const activeUsers = async () => {
    let confirma = window.confirm('Desea Activar al Usuario?');
    if (confirma) {
      await axios.patch('http://localhost:8000/patch-users', { id: id2, newEstado: 'Activar' });
      window.location = 'http://localhost:3000/prueba'
    }
  }

    const inactiveUsers = async () => {
    let confirma = window.confirm('Desea desactivar al Usuario?');
    if (confirma) {
      await axios.patch('http://localhost:8000/patch-users', { id: id2, newEstado: 'Pendiente' });
      window.location = 'http://localhost:3000/prueba'
    }
  }

    const deleteUsers = async () => {
    let confirma = window.confirm('Desea eliminar al Usuario?');
    if (confirma) {
      await axios.delete(`http://localhost:8000/${id2}`);
      window.location = 'http://localhost:3000/prueba'
    }
  }

  return (
    <tr key={key1}>
      <th scope="row">{id2}</th>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{estado2}</td>
      <td>{rol}</td>
      <td>{pw}</td>
      <td><button className='bg-success text-white border border-black rounded-circle button-fila' onClick={activeUsers}><i class="bi bi-check"></i></button></td>
      <td><button className='bg-warning text-white border border-black rounded-circle button-fila' onClick={inactiveUsers}><i class="bi bi-slash-circle"></i></button></td>
      <td><button className='bg-danger text-white border border-black rounded-circle button-fila' onClick={deleteUsers}><i class="bi bi-x-circle"></i></button></td>
    </tr>
  )
}

export default FilaTabla