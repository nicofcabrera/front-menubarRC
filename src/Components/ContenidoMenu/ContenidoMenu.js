import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardsMenu from '../CardsMenu/CardsMenu';

const ContenidoMenu = () => {

   const [datos, setData] = useState([]);

  const getDatos = async () => {
    const { data } = await axios.get('http://localhost:8000/get-menu')
    setData(data);
  }
  // console.log(datos)
  

  useEffect(() => {
    getDatos()
  },[])


  return (
    <section className='container'>
      <div class="row justify-content-around">
          {
            datos.map(res => <CardsMenu nombre={res.nombre} estado={res.estado} precio={res.precio} detalle={res.detalle} categoria={res.categoria} img={res.img} id={res._id} /> )
          }  
      </div>  
    </section>
  )
}

export default ContenidoMenu