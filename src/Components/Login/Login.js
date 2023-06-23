import React, { useState } from 'react'
import NavbarLanding from '../NavbarLanding/NavbarLanding'
import Footer from '../Footer/Footer'
import axios from 'axios'

const Login = () => {

  const [login, setLogin] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setLogin({
      ...login,
      [name]:value
    })
  }

  const onLogin = async (e) => {
    e.preventDefault();
    // console.log(login);
    const {data} = await axios.post('http://localhost:8000/userlogin', login); 

    if (await data.result.email === login.email) {
      console.log('OK');
    } else {
      console.log('NA');
    }

  }


  return (
    <>
     <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
    <main>
      <div className="container">
        <h1>Ingresar</h1>
        <form onSubmit={onLogin} className='w-50 mx-auto mt-5'>
          <div className="mb-3 justify-content-center align-items-center">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingresa tu email' name='email' onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChange}/>
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