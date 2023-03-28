import React from 'react'

const FilaTabla = ({ nombre, email, estado, id, rol, pw, key1 }) => {

  const circle = (e) => {
    let estado = e.target 
    estado.classList.replace('bg-warning', 'bg-success')
  }
  
  return (
    <tr key={key1}>
      <th scope="row">{id}</th>
      <td>{nombre}</td>
      <td>{email}</td>
      <td><button className='button-circle bg-warning' onClick={circle}></button></td>
      <td>{rol}</td>
      <td>{pw}</td>
    </tr>
  )
}

export default FilaTabla