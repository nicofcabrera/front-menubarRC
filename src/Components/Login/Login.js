import React from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Login = () => {

  const URL = 'http://localhost:8000/userlogin'
  const { register, handleSubmit } = useForm();

  const onLogin = async (data) => {
    const respuesta = await axios.post(URL, data);
    console.log(respuesta.data);

  }


  return (
    <>
     <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
    <main className='min-vh-100'>
      <div className="container">
        <h1>Ingresar</h1>
        <form onSubmit={handleSubmit(onLogin)} className='w-50 mx-auto mt-5'>
          <div className="mb-3 justify-content-center align-items-center">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu email' name='email' {...register("email")}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' {...register("password")}/>
          </div>
          <button type="submit" className="btn btn-dark w-50 d-block mx-auto mx-md-0 ms-md-auto">Ingresar</button>
       </form>
      </div>       
      </main>
      <Footer styles={'position-absolute bottom-0 w-100'} />
    </>
  )
}

export default Login