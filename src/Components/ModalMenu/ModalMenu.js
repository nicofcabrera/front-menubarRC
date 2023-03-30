// import axios from 'axios';
import React from 'react'

const ModalMenu = ({ title, funcion,id }) => {
  
// No logro obtener los id de cada card.

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
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
            <button type="button" className="btn btn-secondary" onClick={funcion}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMenu