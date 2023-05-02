import React, { useState } from 'react'
import './home.css';
import NavbarLanding from '../../Components/NavbarLanding/NavbarLanding';
import Sanguches from '../Sanguches/Sanguches';
import Burgers from '../Burgers/Burgers';
import Bebidas from '../Bebidas/Bebidas';
import Footer from '../Footer/Footer';
import CarritoBottom from '../CarritoBottom/CarritoBottom';


  
const Home = () => {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [contador, setContador] = useState(0)


  return (
    <>
      <NavbarLanding title='Bar RC' linkUno={'Sanguches'} linkDos={'Burgers'} linkTres={'Bebidas'} linkCuatro={'Ingresar'} linkCinco={'Registrarse'} />
      <main className='pt-5 position-relative'>
        <Sanguches
          title={'Sanguches'}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}
        />
        <Burgers
          title={'Burgers'}
        />
        <Bebidas
          title={'Bebidas'}
        />
        <CarritoBottom
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          contador={contador}
          setContador={setContador}/>
      </main>
      <Footer />
    </>
  )
}

export default Home