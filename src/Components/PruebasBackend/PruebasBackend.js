// import axios from 'axios'
import React from 'react'
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
      </div>

    </>
  )
}

export default PruebasBackend