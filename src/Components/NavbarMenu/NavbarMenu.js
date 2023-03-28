import React from 'react'
import './navbarMenu.css'

const NavbarMenu = ({title}) => {
  return (
    <>
      <div className="navbar-menu container-xl p-0 mb-3">
      <div className="navbar-portada">
        <div className="bg-secondary">
          <img className='navbar-logo' src='https://i.postimg.cc/qBZ5vFtY/Whats-App-Image-2023-02-09-at-02-15-12.jpg' alt=''></img>
        </div>
        <div className="navbar-horarios">
          <button className="button-horarios btn rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <p>Horarios <i className="bi bi-clock"></i></p>
          </button>         
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-logo bg-secondary">
                    <img className='modal-logo' src='https://i.postimg.cc/qBZ5vFtY/Whats-App-Image-2023-02-09-at-02-15-12.jpg' alt=''></img>
                  </div>
                  <div className="modal-titulo">
                      <p>{title}</p>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="modal-horarios">
                    <b>Horarios de atención</b>                 
                  </div>                
                  <div className="horarios-dias">
                    <p>Lunes</p>
                    <p>Cerrado</p>
                  </div>
                  <div className="horarios-dias">
                    <p>Martes</p>
                    <p>17:00 - Medianoche</p>
                  </div>
                  <div className="horarios-dias">
                    <p>Miercoles</p>
                    <p>17:00 - Medianoche</p>
                  </div>
                  <div className="horarios-dias">
                    <p>Jueves</p>
                    <p>17:00 - Medianoche</p>
                  </div>
                  <div className="horarios-dias">
                    <p>Viernes</p>
                    <p>17:00 - Medianoche</p>
                  </div>
                  <div className="horarios-dias">
                    <p>Sábado</p>
                    <p>17:00 - Medianoche</p>
                  </div>
                  <div className="horarios-dias mb-4">
                    <p>Domingo</p>
                    <p>Cerrado</p>
                  </div>
                  <div className="modal-direccion">
                    <b>Dirección</b>
                  </div>
                  <div className="direccion mb-4">
                    <p><i className="bi bi-geo-alt"></i> Av. Aconquija 2000, Yerba Buena, Tucuman.</p>
                  </div>
                  <div className="modal-servicio">
                    <b>Tipo de servicio</b>
                  </div>
                  <div className="servicio mb-4">
                    <p><i className="bi bi-check-lg"></i> On site</p>
                    <p><i className="bi bi-check-lg"></i> Take away</p>
                    <p><i className="bi bi-check-lg"></i> Delivery</p>
                  </div>               
                </div>
                <div className="modal-footer">                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-titulo-wp bg-black">
        <div className="navbar-titulo text-light">
            <p>{ title}</p>
        </div>
        <div className="navbar-wp">
          <button className="button-wp btn btn-black text-light rounded-0">
            <p><i className="bi bi-whatsapp"></i></p>
          </button>
        </div>
      </div>
      <div className="navbar-navegacion bg-dark">
        <div className="left-navegation">
          <button className="button-home btn btn-dark rounded-0">
          <p><i className="bi bi-house-door"></i></p>
          </button>
        </div>
        <div className="right-navegation">
          <button className="button-reservas btn btn-dark rounded-0">
            <p>Reservas</p>
          </button>
        </div>        
      </div>
    </div>
    </>
  )
}

export default NavbarMenu