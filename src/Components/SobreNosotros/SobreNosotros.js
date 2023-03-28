import React from 'react'
import './sobreNosotros.css'

const SobreNosotros = ({image1, linkImage1, image2, linkImage2}) => {
  return (
    <>
      <section className='min-vh-100 text-center p-5' id='sobrenosotros'>
        <article className='container_texto_sobrenos mx-auto'>
          <h2 classname='text-center p-5'>Sobre nosotros</h2> 
          <p className='container p-4 text-justify'> Somos un grupo de alumnos de Rolling Code, que coincidimos para trabajar juntos en un proyecto, y de la mano de ese proyecto surgió la idea de hacer una aplicación para solucionar y ayudar a los bares y restaurantes a agilizar e innovar en el mundo de la gastronomía de la mano de menu digitales.
          </p>
        </article>
      <div className='container p-2'>
        <div className='row justify-content-center gap-5 gap-md-0'>
          <div className='col-12 col-md-6 col-lg-4'>
            <a href={linkImage1} target="_blank" rel="noreferrer"><img src={image1} className='img m-5 col-12 col-md-6 col-lg-4 mx-auto' alt=""/></a>
            <h5 className='fs-4'>Nicolas Cabrera</h5>
          </div>
          <div  className='col-12 col-md-6 col-lg-4'>
            <a href={linkImage2} target="_blank" rel="noreferrer"><img src={image2} className='img m-5 col-12 col-md-6 col-lg-4 mx-auto' alt=""/></a>
            <h5 className='fs-4'>Andrea Narchi</h5>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SobreNosotros