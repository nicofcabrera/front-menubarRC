import axios from 'axios';
import React from 'react'
import ModalMenu from '../ModalMenu/ModalMenu';
// import ModalMenu from '../ModalMenu/ModalMenu';
import './cardsMenu.css'

const CardsMenu = ({ nombre, estado, precio, detalle, categoria, img, id }) => {

  const deleteMenu = async () => {
    console.log(id)
    let confirma = window.confirm('Desea eliminar el Menu?');
    if (confirma) {
      await axios.delete(`http://localhost:8000/delete-menu/${id}`);
      window.location = 'http://localhost:3000/prueba'
    }
  }

  /*
  const updateMenu = async () => {
    let confirma = window.confirm('Desea Modificar');
    if (confirma) {
      let valor = document.getElementById('formGroupExampleInput').value
      await axios.patch('http://localhost:8000/patch-menu', { id, newNom: valor });
      window.location = 'http://localhost:3000/prueba'
    }
  }
*/



  return (
    <>
       <div className="card bg-transparent card-style mb-3 mt-3 col-sm-4 col-xs-4 p-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-auto w-100 h-100" alt="..." />
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{detalle}</p>
              <p className="card-text">{id}</p>
              <p className="card-text text-underline">Precio: {precio}</p>
              <p className="card-text">Estado: {estado}</p>
              <p className="card-text">Cat: {categoria}</p>
              <div className='d-flex justify-content-end'>
                <button className='bg-black text-white border border-black rounded-circle button-fila' data-bs-toggle="modal" data-bs-target={'#'+ id}><i class="bi bi-pencil-square"></i></button>
                <button className='bg-danger text-white border border-black rounded-circle button-fila ms-3' onClick={deleteMenu}><i class="bi bi-x-circle"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card bg-transparent card-style mb-3 mt-3 col-sm-4 col-xs-4 p-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-auto w-100 h-100" alt="..." />
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{detalle}</p>
              <p className="card-text">{id}</p>
              <p className="card-text text-underline">Precio: {precio}</p>
              <p className="card-text">Estado: {estado}</p>
              <p className="card-text">Cat: {categoria}</p>
              <div className='d-flex justify-content-end'>
                <button className='bg-black text-white border border-black rounded-circle button-fila' data-bs-toggle="modal" data-bs-target={`#${id}`}><i class="bi bi-pencil-square"></i></button>
                <button className='bg-danger text-white border border-black rounded-circle button-fila ms-3' onClick={deleteMenu}><i class="bi bi-x-circle"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <ModalMenu nombre={nombre} id2={id} patchear={updateMenu} /> */}
      <ModalMenu _id={id} />
     
    </>
  )
}


export default CardsMenu