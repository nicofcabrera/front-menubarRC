import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TarjetasMenu from '../TarjetasMenu/TarjetasMenu';

const Burgers = ({title}) => {
  const [datos, setData] = useState([]);

  const getDatos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-menu')
    let result = data.filter(res => res.categoria === 'burger')

    setData(result);
  }

  useEffect(() => {
    getDatos()
  },[])


  return (
    <section className='container mb-5'>
      <h2>{title}</h2>
      <div className="row justify-content-center justify-content-md-evenly gap-5 gap-md-4">
      {
          datos.map(res => <TarjetasMenu categoriaProducto={res.categoria} nombreProducto={res.nombre} descripcionProducto={res.detalle} imgProducto={res.img} precioProducto={res.precio} />)    
      }
      </div>
    </section>
  )
}

export default Burgers