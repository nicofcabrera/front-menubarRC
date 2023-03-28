import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarMenu from '../Components/NavbarMenu/NavbarMenu'
import CardsMenu from '../Components/CardsMenu/CardsMenu'

const NombreBar = () => {
   const arrayInformation = [
      {
        name: 'Milanesa de ternera con papas',
        description: 'Milanesa de ternera rebozada con papas fritas',
        image: 'https://images.deliveryhero.io/image/pedidosya/products/cf8043e1-c2b6-4b3d-999f-495e9742ffdb.jpg?quality=90&height=96&width=96&webp=1',
        price: '$2100',
        categoria: 'milanesas',
      },

      {
        name: 'Milanesa napolitana con papas',
        description: 'Milanesa de ternera rebozada, con papas fritas',
        image: 'https://images.deliveryhero.io/image/pedidosya/products/b1cdb2a1-da84-440d-a946-3ecf14fe3f60.jpg?quality=90&width=864&webp=1',
        price: '$2300',
        categoria: 'milanesas',
      },

      {
        name: 'Milanesa napolitana a caballo',
        description: 'Milanesa rebozada, con queso y salsa de tomate, con papas fritas',
        image: 'https://images.deliveryhero.io/image/pedidosya/products/18d457b4-adf2-4eb8-8fdc-4cbf36e5e030.jpg?quality=90&width=864&webp=1',
        price: '$2500',
        categoria: 'milanesas',
      },

      {
        name: 'Milanesa americana con papas',
        description: 'Milanesa rebozada, con jamón, queso y  huevos, con papas fritas',
        image: 'https://images.deliveryhero.io/image/pedidosya/products/28ce5e1f-af26-4387-b6f3-aea0d2c5dd8c.jpg?quality=90&height=96&width=96&webp=1',
        price: '$2500',
        categoria:'milanesas',
      },

      {
        name: 'Sandwich de milanesa de pollo',
        description: 'Milanesa de pollo, con cebolla lechuga y tomate',
        image: 'https://images.deliveryhero.io/image/pedidosya/products/9213b82c-1d86-4d5f-8227-ce4fc97bba6a.jpg?quality=90&width=864&webp=1',
        price: '$1500',
        categoria: 'sandwich'
      },

      {
        name: "Sandwich de milanesa de pollo",
        description: 'Milanesa de pollo rebozada, con jamon queso y huevo',
        image: 'https://images.deliveryhero.io/image/pedidosya/products/f8ed3aaf-f753-4e25-bd11-3b16fbd06f61.jpg?quality=90&width=864&webp=1',
        price: '$1500',
        categoria: 'sandwich',
      },

      {
        name: 'Sandwich Tucumano el clásico', 
        description: 'Milanesa con lechuga, tomate, mayonesa',
        image:'https://images.deliveryhero.io/image/pedidosya/products/d0be1e00-3713-4bbf-9c75-4b7d1178ee77.jpg?quality=90&height=96&width=96&webp=1',
        price:'$1500',
        categoria:'sandwich'
      },

      {
        name: 'Sandwich Tucumano especial',
        description: 'Milanesa con tomate, lechuga, jamon queso y huevo',
        image:'https://images.deliveryhero.io/image/pedidosya/products/87ecdf3d-a7a7-4abb-9cac-4f3e4827df35.jpg?quality=90&height=96&width=96&webp=1',
        price: '$1500',
        categoria: 'sandwich'
      },

      {
        name: 'Papas fritas',
        description:'Papas fritas baston por porción',
        image:'https://images.deliveryhero.io/image/pedidosya/products/370bcad1-a375-40bf-b863-07a46dd1547b.jpg?quality=90&height=96&width=96&webp=1',
        price:'$1000',
        categoria:'guarnicion',
      },

      {
        name: 'Aros de cebolla',
        description:'Aros de cebolla rebozados fritos ',
        image:'https://images.deliveryhero.io/image/pedidosya/products/656a3e70-73f4-4b85-ba0d-7cbb826091af.jpg?quality=90&height=96&width=96&webp=1',
        price:'$1000',
        categoria:'guarnicion',
      },

      {
        name: 'Papas cheddar',
        description:'Papas fritas baston con cheddar y verdeo',
        image:'https://images.deliveryhero.io/image/pedidosya/products/57ff3269-90bf-434e-a849-6d78ddee6201.jpg?quality=90&height=96&width=96&webp=1',
        price:'$1000',
        categoria:'guarnicion',
      }, 

      {
        name: 'Lata de gaseosa 354ml',
        description:'Gaseosa PEPSI cola regular 354ml',
        image:'https://images.deliveryhero.io/image/pedidosya/products/d174e256-6d7a-449d-ab7e-4b6e61121716.jpg?quality=90&height=96&width=96&webp=1',
        price:'$300',
        categoria:'bebida',
      },

      {
        name: 'Lata de gaseosa 354ml',
        description:'Gaseosa PASO DE LOS TOROS pomelo',
        image:'https://images.deliveryhero.io/image/pedidosya/products/96ab1393-0ad0-4255-a5ad-82cdc9d9dc17?quality=90&height=96&width=96&webp=1',
        price:'$300',
        categoria:'bebida',
      },

      {
        name: 'Lata de cerveza 473ml',
        description:'Cerveza CLUB DE LA BIRRA honey',
        image:'https://images.deliveryhero.io/image/pedidosya/products/a8978083-a03c-46f4-8774-934f052be209.jpg?quality=90&height=96&width=96&webp=1',
        price:'$400',
        categoria:'bebida',
      },

  ]
  
    let resultado = arrayInformation.filter(result => result.categoria === 'milanesas')
  
    let resultado1 = arrayInformation.filter(result => result.categoria === 'sandwich')
    
    let resultado2 = arrayInformation.filter(result => result.categoria === 'guarnicion')

    let resultado3 = arrayInformation.filter(result => result.categoria === 'bebida' )
  return (
    <>
    <main className='bg-fondo-menu text-white'>
      
   
      <NavbarMenu title='Anda Palla Bar'/>
      <section className='d-flex row g-0 grid gap-3 align-items-center justify-content-center'>
        <h3 className='text-center m-3 lh-lg text-decoration-underline'> MILANESAS AL PLATO</h3>
      {
     resultado.map(resultado => <CardsMenu name={resultado.name} description={resultado.description} image={resultado.image} price={resultado.price}/>)
      }
    </section>
    <section className='d-flex row g-0 grid gap-3 align-items-center justify-content-center'>
    <h3 className='text-center m-3 lh-lg text-decoration-underline'> SANDWICH DE MILANESA</h3>
      {
      resultado1.map(resultado1 => <CardsMenu name={resultado1.name} description={resultado1.description} image={resultado1.image} price={resultado1.price}/>)
      }
    </section>
    <section className='d-flex row g-0 grid gap-3 align-items-center justify-content-center'>
    <h3 className='text-center m-3 lh-lg text-decoration-underline'> GUARNICIÓN</h3>
      {
      resultado2.map(resultado2 => <CardsMenu name={resultado2.name} description={resultado2.description} image={resultado2.image} price={resultado2.price}/>)
      }
    </section>
    <section className='d-flex row g-0 grid gap-3 align-items-center justify-content-center'>
    <h3 className='text-center m-3 lh-lg text-decoration-underline'> BEBIDAS</h3>
      {
      resultado3.map(resultado3 => <CardsMenu name={resultado3.name} description={resultado3.description} image={resultado3.image} price={resultado3.price}/>)
      }
    </section>
        <Footer />
    </main>
    </>
  )
}

export default NombreBar