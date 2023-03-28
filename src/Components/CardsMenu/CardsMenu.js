import React from 'react'
import './cardsMenu.css'

const CardsMenu = ({ name, description, image, price }) => {
  
  return (
    <>
      <div className="card bg-transparent card-style mb-3 mt-3 col-sm-4 col-xs-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="image w-100 h-100" alt="..."/>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">{price}</p>
            </div>
          </div>     
          <button className='button'><i className="bi bi-cart-plus"></i></button>
        </div>
        </div>
    </>
  )
}

export default CardsMenu