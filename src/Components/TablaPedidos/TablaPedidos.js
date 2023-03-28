import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TablaPedidos = () => {
  const [pedido, setPedido] = useState([]);


  const getPedidos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-pedido')
    setPedido(data);
  }

  useEffect(() => {
    getPedidos()
  },[])


  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Usuario</th>
            <th scope="col">Fecha</th>
            <th scope="col">Menú</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
        {
          pedido.map(result => (
            <tr>
              <td>{result._id}</td>
              <td>{result.email}</td>
              <td>27/03/2023</td>
              <td></td>
              <td>Pendiente</td>
            </tr>
          ))  
        }
        </tbody>
    </table>
  )
}

export default TablaPedidos