import React from 'react'
import './home.css';
import NavbarLanding from '../../Components/NavbarLanding/NavbarLanding';
import ComoFunciona from '../../Components/ComoFunciona/ComoFunciona'
import CardsInfo from '../../Components/CardsInfo/CardsInfo'
import ClientesCard from '../../Components/ClientesCard/ClientesCard'
import SobreNosotros from '../../Components/SobreNosotros/SobreNosotros'
import Contacto from '../../Components/Contacto/Contacto'
import Footer from '../../Components/Footer/Footer'

  
const Home = () => {
  return (
    <>
      <NavbarLanding title='' linkUno={'Como Funciona'} linkDos={'Planes'} linkTres={'Nuestros Clientes'} linkCuatro={'Sobre Nosotros'} linkCinco= {'Contacto'}/>
      <section className='container_home d-flex align-items-center'>
        <div className="container">
          <div className="row justify-content-md-center">
            <figure className='col-12 mx-auto mx-md-0 col-md-6 container_mobile'>
              <img src="https://i.ibb.co/Vxv9HWg/transparent-qr-code-icon-scan-icon-e-commerce-icon-600fddc2a6c455-2612395416116525466831.png" alt="img mobile" className='img-fluid' />
            </figure>
            <article className='col-12 col-md-6'>
              <h1 className='text-center mb-4'>Estás a punto de entrar en el mundo de TuMenuDigital</h1>
              <p className='mb-5 mb-lg-5 p-2 text-justify'>Crear tu menú nunca fue tan fácil, tus productos, promociones, imágenes; todo personalizado a tu manera. La solución para que tus clientes puedan verlo en sus dispositivos de una manera mas didáctica.</p>
              <a href="/" className='btn btn-dark w-50 d-block mx-auto'>Más Info</a>
              </article>     
            </div>
          </div>
      </section>
      <ComoFunciona title='¿Como funciona?' precio='600' id='#comofunciona'/>
      <CardsInfo titleCarduno='Plan Básico' titleCardDos='Plan Intermedio' titleCardTres='Plan Premium' iconUno='https://img.freepik.com/vector-gratis/ilustracion-concepto-financiero_53876-5862.jpg?w=740&t=st=1675917732~exp=1675918332~hmac=ff2c42b8c8cab27758d90d4f42e2b441335fcb695a546e1722d9b4e097af05fc' iconDos='icono dos' iconTres='icono tres' />
      <section className='min-vh-100 bg-hero-clientes' id='nuestrosclientes'>
        <section className='min-vh-100 bg-opacidad d-flex align-items-center justify-content-center'>
        <div className="container p-4">
          <h2 className='text-center p-4 w-700'>Nuestros clientes</h2>
          <div className="row justify-content-around gap-md-0 gap-2 mb-4">
            <article className='col-12 col-md-6 col-lg-3'>
             <ClientesCard logoCliente='https://img.freepik.com/vector-gratis/fondo-letras-vintage-copa-vino-uvas_1416-1245.jpg?w=740&t=st=1675910345~exp=1675910945~hmac=20f2025a77cfe8ef5230a0445f9526224d4ee2901cf290fbc3eba84981c5520c'/>
            </article>
            <article className='col-12 col-md-6 col-lg-3'>
              <ClientesCard logoCliente='https://img.freepik.com/vector-gratis/logotipo-taza-cerveza_126523-881.jpg?w=740&t=st=1675913106~exp=1675913706~hmac=04467b8de0ab9f8f100817d03d937fb5bbc45e62c8fa1fa44f9e9dba8c900e0c'/>
            </article>
            <article className='col-12 col-md-6 col-lg-3'>
             <ClientesCard logoCliente='https://img.freepik.com/vector-gratis/fondo-letras-vintage-copa-vino-uvas_1416-1246.jpg?w=740&t=st=1675913162~exp=1675913762~hmac=fecb092f04d11437d13c94d884904e0d118a37839509fc6d3b801f7a4d5b18a1'/>
            </article>
          </div>
          <div className="row justify-content-around gap-md-0 gap-2">
            <article className='col-12 col-md-6 col-lg-3'>
             <ClientesCard logoCliente='https://img.freepik.com/vector-gratis/logotipo-restaurante-plantilla-negocio-alimentos-diseno-marca_53876-154124.jpg?w=740&t=st=1675912407~exp=1675913007~hmac=7542be29439eddff0739e830e6ae03dce732c9664cd7a0b880171d7b4a152909'/>
            </article>
            <article className='col-12 col-md-6 col-lg-3'>
              <ClientesCard logoCliente='https://img.freepik.com/vector-gratis/ilustracion-bandera-sello-restaurante_53876-6836.jpg?w=740&t=st=1675913402~exp=1675914002~hmac=0d35efc9ce7b0d98c9f0ea6eac5c9816f172363872f5bacfebc41f9e8ba792a5'/>
            </article>
            <article className='col-12 col-md-6 col-lg-3'>
             <ClientesCard logoCliente='https://uploads.turbologo.com/uploads/design/preview_image/724928/preview_image20210823-19897-16ratud.png'/>
            </article>
          </div>
        </div>
        </section>
      </section>
      <SobreNosotros image1="https://i.postimg.cc/vHWpBzWd/Whats-App-Image-2023-02-09-at-01-56-30-1.jpg" linkImage1="https://www.linkedin.com/in/nicolas-francisco-cabrera/" image2="https://i.postimg.cc/CMfyyY55/Whats-App-Image-2023-02-09-at-01-56-29.jpg" linkImage2="https://www.linkedin.com/in/andrea-narchi-37a418248/" />
      <Contacto />
      <Footer/> 
    </>
  )
}

export default Home