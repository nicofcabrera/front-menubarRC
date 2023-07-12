import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ValidatePanel = ({ usuario, redireccion = '/' }) => {
  
  const { data } = usuario
  
  if (usuario) {
    // Se debe cambia la igualdad por !=
    if (data.user.rol === 'user') {      
      return <Outlet /> 
    }
  } 
  
  return (
    <Navigate to={redireccion} replace />
  )
}

export default ValidatePanel