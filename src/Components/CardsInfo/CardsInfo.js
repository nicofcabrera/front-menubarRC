import React from 'react'
import './cardsInfo.css';

const CardsInfo = ({titleCarduno, titleCardDos, titleCardTres, iconUno, iconDos, iconTres}) => {
  return (
    <section className='min-vh-100 d-flex align-items-center' id='planes'>
      <div className="container p-5">
        <div className='row justify-content-center gap-5 gap-md-0'>
          <article className='col-12 col-md-6 col-lg-4 mb-md-4 mb-lg-0'>
            <div className="container_card_info mx-auto border rounded p-3">
              <figure className='text-center container_icono_card d-flex align-items-center justify-content-center mx-auto mb-4'>
                <img src={iconUno} alt="" className='icono_card'/>
              </figure>
              <h3 className='text-center mb-4'>{ titleCarduno}</h3>
              <p className='text-center'>Nuestro plan básico está equipado para empezar con tu empresa, destinado a todos los que deseen dar sus primeros pasos.</p>
            </div>
          </article>
          <article className='col-12 col-md-6 col-lg-4'>
            <div className="container_card_info mx-auto border rounded p-3">
              <figure className='text-center container_icono_card d-flex align-items-center justify-content-center mx-auto mb-4'>
                <img src={iconUno} alt="" className='icono_card'/>
              </figure>
              <h3 className='text-center mb-4'>{titleCardDos}</h3>
              <p className='text-center'>Nuestro plan intermedio te da las herramientas necesarias para potenciar tus ventas y estimular tu negocio con ventas online.</p>
            </div>
          </article>
          <article className='col-12 col-md-6 col-lg-4'>
            <div className="container_card_info mx-auto border rounded p-3">
              <figure className='text-center container_icono_card d-flex align-items-center justify-content-center mx-auto mb-4'>
                <img src={iconUno} alt="" className='icono_card'/>
              </figure>
              <h3 className='text-center mb-4'>{ titleCardTres}</h3>
              <p className='text-center'>Nuestro plan premium te da la posibilidad de activarlo en mas de una sucursal, y contar con nuestro servicio de ayuda y respaldo 24hs.</p>
            </div>
          </article>
        </div>
      </div>      
    </section>
  )
}

export default CardsInfo