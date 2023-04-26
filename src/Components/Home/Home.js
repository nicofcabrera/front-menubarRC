import React from 'react'
import './home.css';
import NavbarLanding from '../../Components/NavbarLanding/NavbarLanding';
import Sanguches from '../Sanguches/Sanguches';
import Burgers from '../Burgers/Burgers';
import Bebidas from '../Bebidas/Bebidas';
import Footer from '../Footer/Footer';


  
const Home = () => {
  return (
    <>
      <NavbarLanding title='' linkUno={'Como Funciona'} linkDos={'Planes'} linkTres={'Nuestros Clientes'} linkCuatro={'Sobre Nosotros'} linkCinco={'Contacto'} />
      <main className='pb-5'>
        <Sanguches title={'Sanguches'} />
        <Burgers title={'Burgers'} />
        <Bebidas title={'Bebidas'} />
      </main>
      <Footer />
    </>
  )
}

export default Home