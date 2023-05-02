import React, { useState } from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import axios from 'axios'

const Registro = () => {

    const [register, setRegister] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setRegister({
      ...register,
      estado: 'pendiente',
      rol: 'user',
      [name]:value
    })
  }

  const onRegister = async () => {
    console.log(register)
    let confirma = window.confirm('Desea Registrarse?');
    if (confirma) {
      await axios.post('http://localhost:8000/post-user', register);
      alert('Usuario registrado!')
      window.location = 'http://localhost:3000/login'
    }
  }

  return (
    <>
     <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
    <main>
      <div className="container">
        <h1>Registro</h1>
        <form className='w-50 mx-auto mt-5'>
          <div className="mb-3 justify-content-center align-items-center">
            <label htmlFor="lbl-name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="lbl-name"  placeholder='Ingresa tu nombre' name='nombre' onChange={handleChange} required/>
          </div>
          <div className="mb-3 justify-content-center align-items-center">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu email' name='email' onChange={handleChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChange} required/>
          </div>
          <button type="button" className="btn btn-dark w-50 d-block mx-auto mx-md-0 ms-md-auto" onClick={onRegister}>Registrarse</button>
          {/* <button type="submit" className="btn btn-dark w-50 d-block mx-auto mx-md-0 ms-md-auto" >Registrarse</button> */}
       </form>
      </div>       
      </main>
      <Footer styles={'position-absolute bottom-0 w-100'} />
    </>
  )
}

export default Registro