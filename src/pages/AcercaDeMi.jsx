import React from 'react';
import './styles/acercaDeMi.css'
import image1 from '../pages/page/numero1.jpg';

const AcercaDeMi = () => {
  return (
    <header className='acercademi__container'>
      <div className='acercademi__container1'>
        <div className='acercademi__container2'>
          <h1 className='acercademi__title'>Acerca de Mi</h1>
          <div className='acercademi__image1'>
            <img src={image1} alt="image1" className='acercademi__1' />
          </div>
          <dir className="acercademi__container3">
            <p>Soy graduado en la universidad de Iuta "Venezuela" y en la Academia de academlo "México", especializado en higiene y seguridad industrial, y desarrollador web full stack... Me gusta, y me atrae mucho la idea de diseñar y crear páginas, cada funcionalidad que podemos realizar en estas, sumergirme en el mundo del desarrollo web y siempre dando lo mejor para llegar cada vez más lejos. También en ayudar, enseñar y dirigir personar para que conozcan cuales son los riesgos laborales que se pueden presentar en el ámbito laboral. e gusta mucho el aprender de todo, realizar deportes, escuchar música y ejercicio en el tiempo libre.</p>
          </dir>
        </div>
      </div>
    </header>
  )
}

export default AcercaDeMi;
