import axios from 'axios'
import React, { useState } from 'react'

const ButtonPostMenu = () => {
  
  const [update, setUpdate] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdate({
      ...update,
      [name]:value
    })
  }

  /*
  const posteo = () => {
    console.log('arrancando')
    console.log(update)
  }
  */

   const posteaMenu = async () => {
  let confirma = window.confirm('Desea postear el Menu?');
  if (confirma) {
    await axios.post('http://localhost:8000/post-menu', update);
    window.location = 'http://localhost:3000/prueba'
  }
}

  return (
    <>
      <button className='btn btn-dark rounded-circle' data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-plus fs-5"></i>
      </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className='container'>
             {/* <div className="mb-3">
                <label for="lbl-id" class="form-label">ID</label>
                <input type="text" id="lbl-id" class="form-control" value={_id} name='id' onChange={handleChange} disabled readOnly/>
              </div> */}
              <div className="mb-3">
                <label for="lbl-nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="lbl-nombre" placeholder="Ingrese nombre de la comida" name='nombre' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="lbl-estado" className="form-label">Estado</label>
                <input type="text" className="form-control" id="lbl-estado" placeholder="Ingrese descripcion" name='estado' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="lbl-precio" className="form-label">Precio</label>
                <input type="text" className="form-control" id="lbl-precio" placeholder="Ingrese precio" name='precio' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="lbl-desc" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="lbl-desc" placeholder="Ingrese precio" name='detalle' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="lbl-cat" className="form-label">Categoria</label>
                <input type="text" className="form-control" id="lbl-cat" placeholder="Ingrese precio" name='categoria' onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="lbl-img" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="lbl-img" placeholder="Ingrese solo url de la img" name='img' onChange={handleChange}/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={posteaMenu}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default ButtonPostMenu