import React from 'react'
import './comoFunciona.css'

const ComoFunciona = ({title,precio}) => {
  return (
    <section className='bg_seccion_dos min-vh-100' id='comofunciona'>
      <section className='bg-opacidad min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <article className='col-12 col-lg-6 offset-lg-6'>
          <h2 className='mb-4 w-700'>{title}</h2>
          <a href="/" className='text-white btn btn-success'>
            <b>Desde ${precio}</b><small> AR/mes</small>
          </a>
          <p className='text-start mt-4'>Te brindamos la posibilidad de elegir entre varios planes que se adaptan a las necesidades de tu empresa. Nuestros servicios incluyen:</p>
          <div className="row text-start mt-5">
            <div className="col-12 col-md-6">
              <p><i className="bi bi-check"></i>Código QR único.</p>
              <p><i className="bi bi-check"></i>Menú en línea.</p>
              <p><i className="bi bi-check"></i>Actualizaciones dinámicas y fáciles.</p>
              <p><i className="bi bi-check"></i>Posibilidad de comprar tu dominio.</p>
            </div>
            <div className="col-12 col-md-6">
              <p><i className="bi bi-check"></i>Prueba gratis por 15 días.</p>
              <p><i className="bi bi-check"></i>Gestión de pagos online.</p>
              <p><i className="bi bi-check"></i>Gestión de servicios en mesa, y delivery.</p>
              <p><i className="bi bi-check"></i>Ayuda digital 24hs.</p>
            </div>
          </div>
        </article>
      </div>
      </section>
    </section>
  )
}

export default ComoFunciona