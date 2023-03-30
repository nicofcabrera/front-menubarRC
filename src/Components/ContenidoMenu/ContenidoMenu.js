import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardsMenu from '../CardsMenu/CardsMenu';
import ModalMenu from '../ModalMenu/ModalMenu';

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
      {
        datos.map(res => <ModalMenu nombre={res.nombre} />)
      }
     
    </section>
  )
}

export default ContenidoMenu