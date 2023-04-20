// import axios from 'axios'
import React from 'react'
import ContenidoMenu from '../ContenidoMenu/ContenidoMenu'
import TablaUsers from '../TablaUsers/TablaUsers'

const PruebasBackend = () => {
  

  return (
    <>  
      <h1 className='text-center'>Panel de control</h1>
      <div className='container'>
        <h2>Usuarios</h2>
        <TablaUsers />
        <h2>Pedidos</h2>
        <h2>Menu</h2>
        {/* ver en armar un componente para el poste */}
        <button className='btn btn-info rounded-circle'><i class="bi bi-plus-circle"></i></button>
        <ContenidoMenu />
      </div>

    </>
  )
}

export default PruebasBackend