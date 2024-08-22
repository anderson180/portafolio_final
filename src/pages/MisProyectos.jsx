import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/misProyectos.css';
import image7 from '../pages/page/numero7.png';
import image8 from '../pages/page/numero8.png';
import image9 from '../pages/page/numero9.png';
import image10 from '../pages/page/numero10.png';
import image11 from '../pages/page/numero11.png';
import image12 from '../pages/page/numero12.png';

const MisProyectos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLinks, setSelectedLinks] = useState({ netlify: '', github: '' });
  const { t } = useTranslation();

  // Objeto que mapea cada imagen a sus respectivos enlaces
  const imageLinks = {
    image7: {
      netlify: 'https://remarkable-maamoul-82facc.netlify.app',
      github: 'https://github.com/anderson180/project-5-entregable'
    },
    image8: {
      netlify: 'https://preeminent-frangipane-fa8b99.netlify.app/',
      github: 'https://github.com/anderson180/git-javier'
    },
    image9: {
      netlify: 'https://entregable-6-project.netlify.app/',
      github: 'https://github.com/anderson180/entregable-6-project'
    },
    image10: {
      netlify: 'https://4entregable.netlify.app/',
      github: 'https://github.com/anderson180/git-4-entregable'
    },
  };

  const handleImageClick = (imageKey) => {
    setSelectedLinks(imageLinks[imageKey]);
    setShowModal(true);
  };
  {/*Identificación: imageKey actúa como un identificador único para cada imagen.
Acceso a Datos: Facilita el acceso a datos asociados, como enlaces o descripciones, a través de un objeto o estructura de datos.
Interactividad: Permite que las imágenes sean interactivas y que el contenido relacionado se cargue dinámicamente al hacer clic. */}

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLinks({ netlify: '', github: '' });
  };

  return (
    <header className='proyecto__container'>
      <div className='proyecto__container0'>
        <div className='proyecto__container1'>
          <h1 className='proyecto__title'>{t('mis.title')}</h1>
        </div>
        <div className='proyecto__image1'>
          <div className='proyecto__image-wrapper'>
            <h2 className='image__title'>Pokémon</h2>
            <img src={image7} alt="image7" className='image__personal' onClick={() => handleImageClick('image7')} />
          </div>
          <div className='proyecto__image-wrapper'>
            <h2 className='image__title'>{t('mis.1')}</h2>
            <img src={image8} alt="image8" className='image__personal' onClick={() => handleImageClick('image8')} />
          </div>
          <div className='proyecto__image-wrapper'>
            <h2 className='image__title'>{t('mis.2')}</h2>
            <img src={image9} alt="image9" className='image__personal' onClick={() => handleImageClick('image9')} />
          </div>
          <div className='proyecto__image-wrapper'>
            <h2 className='image__title'>{t('mis.3')}</h2>
            <img src={image10} alt="image10" className='image__personal' onClick={() => handleImageClick('image10')} />
          </div>
          <div className='proyecto__image-wrapper'>
            <h2 className='image__title'>{t('mis.4')}</h2>
            <img src={image11} alt="image11" className='image__personal' />
          </div>
          <div className='proyecto__image-wrapper'>
            <h2 className='image__title'>{t('mis.5')}</h2>
            <img src={image12} alt="image12" className='image__personal' />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {/*El símbolo &times; es una entidad HTML que representa el símbolo de multiplicación "×" es utilizado como un botón de cierre que los usuarios pueden hacer clic para cerrar el modal.*/}
            <p>{t('mis.6')}</p>
            <a href={selectedLinks.netlify} target="_blank" rel="noopener noreferrer">{t('mis.7')}</a>
            <a href={selectedLinks.github} target="_blank" rel="noopener noreferrer">{t('mis.8')}</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default MisProyectos;
