import React from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useForm } from "react-hook-form";

const Registro = () => {

  const URL = 'http://localhost:8000/post-user'
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    let confirma = window.confirm('Desea Registrarse?');
    if (confirma) {
      await axios.post(URL, data);
      alert('Usuario registrado!')
      window.location = 'http://localhost:3000/login'
    }
  }
  return (
    <>
     <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
      <main className='min-vh-100'>
        <div className="container">
          <h1>Registro</h1>
          <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 justify-content-center align-items-center">
              <label htmlFor="lbl-name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="lbl-name"  placeholder='Ingresa tu nombre' name='nombre' {...register("nombre")} required />
            </div>
            <div className="mb-3 justify-content-center align-items-center">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu email' name='email' {...register("email")} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' {...register("password")} required/>
            </div>
            <button type="submit" className="btn btn-dark w-50 d-block mx-auto mx-md-0 ms-md-auto" >Registrarse</button>
          </form>
        </div>       
      </main>
      <Footer styles={'position-absolute bottom-0 w-100'} />
    </>
  )
}

export default Registro