import axios from 'axios';
import React from 'react'
// import ModalMenu from '../ModalMenu/ModalMenu';
import './cardsMenu.css'

const CardsMenu = ({ nombre, estado, precio, detalle, categoria, img, id }) => {

  const deleteMenu = async () => {
    let confirma = window.confirm('Desea eliminar el Menu?');
    if (confirma) {
      await axios.delete(`http://localhost:8000/delete-menu/${id}`);
      window.location = 'http://localhost:3000/prueba'
    }
  }



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
                <button className='bg-black text-white border border-black rounded-circle button-fila' data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-square"></i></button>
                <button className='bg-danger text-white border border-black rounded-circle button-fila ms-3' onClick={deleteMenu}><i class="bi bi-x-circle"></i></button>
              </div>
            </div>
          </div>
        </div>
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Editando</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='container'>
             <div class="mb-3">
                <label for="disabledTextInput" class="form-label">ID</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder={id} />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese nombre de la comida"/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese descripcion"/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput3" className="form-label">Precio</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Ingrese precio"/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput4" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingrese solo url de la img"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
      </div>
      {/* <ModalMenu title={'Editar menu'} id={id} funcion={updateMenu} /> */}
      {/* MODAL */}
     
    </>
  )
}


export default CardsMenu