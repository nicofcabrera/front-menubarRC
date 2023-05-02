import React from 'react'

const CarritoBottom = ({ allProducts, setAllProducts, total, setTotal, contador, setContador }) => {
  
  const deleteProduct = (product) => {
    const result = allProducts.filter(
      item => item._id !== product._id
    );

    setTotal(total - product.precio * product.cantidad)
    setContador(contador - product.cantidad)
    setAllProducts(result)
  }

  const vaciarCarro = () => {
    setTotal(0)
    setContador(0)
    setAllProducts([])
  }

  return (
    <>
    <button className='d-block btn btn-dark w-25 mx-auto position-sticky bottom-0 start-50 translate-middle-x' data-bs-toggle="modal" data-bs-target="#exampleModal">
      {`(${contador})`} <i class="bi bi-cart-fill"></i> Ver carrito
      </button>

      {/* Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5" id="exampleModalLabel">Pedido</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {
                allProducts.length ?
                (
                    allProducts.map(product => (
                      <p key={product._id}><span> {product.cantidad}</span> {product.nombre} <span>${product.precio}</span><button className='ms-5' onClick={() => deleteProduct(product
                      )}><i class="bi bi-x-lg"></i></button></p>
                    ))
                )
                  : (<p>El carrito esta vacio</p>)
              }
              <p className='text-center'>Total: ${total}</p>
              <button className='d-block w-100 btn btn-info' onClick={vaciarCarro}>Vaciar Carrito</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarritoBottom