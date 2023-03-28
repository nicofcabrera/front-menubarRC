import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-menu py-3 bg-dark'>
      <div className='footer-titulo-logo'>
        <div className='footer-titulo text-light'>
          <p>TUMENU DIGITAL</p>
        </div>
        <div>    
          <img className='footer-logo' src='https://i.postimg.cc/brMCVGc8/Whats-App-Image-2023-02-09-at-02-15-12-1.jpg' alt=''></img>     
        </div>
      </div>
        <div className='footer-redes text-light my-2'>
          <a href="/" className='text-white'>
            <i className="bi bi-facebook me-3"></i>
          </a>
          <a href="/" className='text-white'>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="/" className='text-white'>
            <i className="bi bi-twitter ms-3"></i>
          </a>  
      </div>
      <div className='footer-contacto text-light'>
        <div className='contacto'>
        <p>Contáctanos</p>
        </div>
        <div className='descripcion'>
          <p>Tel: +156-3815553413. Lunes a Viernes de 8:00 a 19:00 hs.</p>        
        </div>
      </div>
      <div className='footer-derechos text-light'>
        <p>2023 TUMENU DIGITAL. Todos los derechos reservados. <i className="bi bi-c-circle"></i></p>
      </div>
      
    </div>
    </footer>
  )
}

export default Footer