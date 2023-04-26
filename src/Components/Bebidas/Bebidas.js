import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TarjetasMenu from '../TarjetasMenu/TarjetasMenu';

const Bebidas = ({title}) => {
  const [datos, setData] = useState([]);

  const getDatos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-menu')
    let result = data.filter(res => res.categoria === 'bebidas')

    setData(result);
  }

  useEffect(() => {
    getDatos()
  },[])


  return (
    <section className='container'>
      <h2>{title}</h2>
      <div className="row justify-content-center justify-content-md-evenly gap-5 gap-md-4">
      {
          datos.map(res => <TarjetasMenu categoriaProducto={res.categoria} nombreProducto={res.nombre} descripcionProducto={res.detalle} imgProducto={res.img} precioProducto={res.precio} anchoImg={'bebidas'} />)    
      }
      </div>
    </section>
  )
}

export default Bebidas