import React from 'react'
import './navbar.css';

const NavbarLanding = ({title, linkUno, linkDos, linkTres, linkCuatro, linkCinco, linkSeis}) => {
 
  return (
  <nav className="navbar navbar-expand-lg bg-light bg-navegacion">
    <div className="container-fluid">
      <a className="navbar-brand " href="/">
        <img className='img_logo me-1' src="https://i.postimg.cc/brMCVGc8/Whats-App-Image-2023-02-09-at-02-15-12-1.jpg" alt="img logoprueba" />
        {title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarPrincipal">
        <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link link_navegacion" aria-current="page" href="#comofunciona">{linkUno}</a>
          </li>
          <li className="nav-item">
              <a className="nav-link link_navegacion" aria-current="page" href="#planes">{linkDos}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_navegacion"  aria-current="page" href="#nuestrosclientes">{linkTres}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_navegacion" aria-current="page" href="#sobrenosotros">{linkCuatro}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_navegacion" aria-current="page" href="#contacto">{linkCinco}</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}

export default NavbarLanding