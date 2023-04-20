import axios from 'axios';
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import React, { useState } from 'react'

// ({ nombre, patchear, id2 })
const ModalMenu = ({_id}) => {

  const [update, setUpdate] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdate({
      ...update,
      id: _id,
      [name]:value
    })
  }

  // const result = () => {
  //   console.log(update)
  // }
  
  const actualizaMenu = async () => {
  let confirma = window.confirm('Desea actualizar el Menu?');
  if (confirma) {
    await axios.patch('http://localhost:8000/patch-menu', update);
    window.location = 'http://localhost:3000/prueba'
  }
}

  return (
    <div className="modal fade" id={_id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Titulo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='container'>
             {/* <div className="mb-3">
                <label for="lbl-id" class="form-label">ID</label>
                <input type="text" id="lbl-id" class="form-control" value={_id} name='id' onChange={handleChange} disabled readOnly/>
              </div> */}
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ingrese nombre de la comida" name='newNom' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese descripcion" name='newDesc' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput3" className="form-label">Precio</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Ingrese precio" name='newPre' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput4" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingrese solo url de la img" name='newImg' onChange={handleChange}/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={actualizaMenu} >Enviar</button>
          </div>
        </div>
      </div>
    </div>


    /*
    <div className="modal fade" id={`${id2}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Titulo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='container'>
             <div className="mb-3">
                <label for="disabledTextInput" class="form-label">ID</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder={id2} />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">{nombre}</label>
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
            <button type="button" className="btn btn-secondary" onClick={patchear}>Close</button>
          </div>
        </div>
      </div>
    </div>
    */
  )
}

export default ModalMenu