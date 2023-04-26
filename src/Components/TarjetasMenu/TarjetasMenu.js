import React from 'react'

const TarjetasMenu = ({categoriaProducto,nombreProducto,descripcionProducto,imgProducto, precioProducto,anchoImg}) => {
  return (
    <article className="card card_menu_front p-0  position-relative">
      <img src={imgProducto} className={"card-img-top " + anchoImg} alt={nombreProducto} />
      <div className="card-body p-0">
        <h5 className="card-title p-2">{nombreProducto}</h5>
        <p className="card-text p-1">{descripcionProducto}</p>
        <p className="card-text p-1 mb-5 text-center fw-bold">${precioProducto}</p>
        <a href="/#" className="btn btn-dark position-absolute bottom-0 w-100">add to car</a>
      </div>
    </article>
  )
}

export default TarjetasMenu