import axios from 'axios';
import React from 'react'

const FilaPedidos = ({ id, usuario1, fecha1, menu1, estado1 }) => {
  
  const cambiarEstado = async () => {
    let confirma = window.confirm('Desea cambiar el estado?');
    let etiqueta = document.querySelector('.btn-pedido')
    if (confirma && estado1 === 'pendiente') {
      etiqueta.classList.add('bg-opacity-50')
      etiqueta.setAttribute('disabled',true)
      await axios.patch('http://localhost:8000/patch-pedido', { id, newEstado: 'Entregado' });
      window.location = 'http://localhost:3000/prueba'
      
    }
    console.log(etiqueta)
  }


  return (
    <tr className='fila_pedidos'>
      <td>{id}</td>
      <td>{usuario1}</td>
      <td>{fecha1}</td>
      <td>{menu1}</td>
      <td>{estado1}</td>
      {/* <td>
        <button className='bg-warning text-white border border-black rounded-circle button-fila' >
          <i class="bi bi-slash-circle"></i>
        </button>
      </td> */}
      <td>
        <button className='btn-pedido bg-success text-white border border-black rounded-circle button-fila' onClick={cambiarEstado}>
          <i class="bi bi-check"></i>
        </button>
      </td>
    </tr>
  )
}

export default FilaPedidos