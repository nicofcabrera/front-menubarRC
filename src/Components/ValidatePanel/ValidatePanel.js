import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ValidatePanel = ({ usuario, redireccion = '/menu' }) => {
  
  const { data } = usuario
  
  
  console.log(data.user.rol);
  if ( data.user.rol !== 'user') {
    return <Outlet /> 
  }



  return (
    <Navigate to={redireccion} replace />
  )
}

export default ValidatePanel