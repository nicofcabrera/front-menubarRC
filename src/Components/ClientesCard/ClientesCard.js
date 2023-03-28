import React from 'react'
import './clientesCards.css';

const ClientesCard = ({logoCliente}) => {
  return (
    <figure className='container_logo_clientes rounded-circle mx-auto'>
      <img src={ logoCliente} alt="cambiar alt" className='img-fluid rounded-circle'/>      
    </figure>
  )
}

export default ClientesCard