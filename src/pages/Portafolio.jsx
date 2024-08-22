import React, { useEffect, useRef } from 'react';
import './styles/portafolio.css';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import image13 from '../pages/page/numero13.jpg';

//libreri typed https://github.com/mattboldt/typed.js/

const Portafolio = () => {
  // Crea una referencia para el elemento que tendrá el efecto Typed.js
  const typedElementRef = useRef(null);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    // Configura y inicializa Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: ['Frontend', 'Backend', 'FullStack'],
      typeSpeed: 50,
      loop: true, // Hace que el efecto se repita indefinidamente
      loopDelay: 1000, // Pausa de 1 segundo entre ciclos
    });

    // Destruye la instancia de Typed.js al desmontar el componente para evitar fugas de memoria
    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownloadCV = () => {
    const currentLanguage = i18n.language;
    const cvUrl = currentLanguage === 'es' ? '/cv_es.pdf' : '/cv_en.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = currentLanguage === 'es' ? 'CV_Español.pdf' : 'CV_English.pdf';
    link.click();
  };

  return (
    <header className='portafolio__container'>
      <div className='portafolio__container1'>
      <div className='portafolio__container3'>
            <button className='portafolio__boton2' onClick={handleDownloadCV}>
              {i18n.language === 'es' ? 'Descargar CV' : 'Download CV'}
            </button>
          </div>
        <div className='portafolio__container2'>
          
          <div className='portafolio__container4'>
            <img src={image13} alt="image13" className='portafolio__logo1' />
            <h1 className='portafolio__title'>{t('por.title')}</h1>
          </div>
          <span className='portafolio__nombre' ref={typedElementRef}></span>
          <p className='portafolio__p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className='portafolio__boton'>
            <button className='portafolio__boton0'>
              <a className='portafolio__boton1' href="https://www.linkedin.com/in/javier-acibe-4b9a98309/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin-square'></i></a>
            </button>
            <button className='portafolio__boton0'>
              <a className='portafolio__boton1' href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="_blank" rel="noopener noreferrer"><i class='bx bxs-envelope'></i></a>
            </button>
            <button className='portafolio__boton0'>
              <a className='portafolio__boton1' href="https://github.com/anderson180" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a>
            </button>
            <button className='portafolio__boton0'>
              <a className='portafolio__boton1' href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-telegram' ></i></a>
            </button>
            {/*<a href="/ruta1" target="_blank">: href establece la ruta a la que quieres ir. target="_blank" abre el enlace en una nueva pestaña.
rel="noopener noreferrer": Este atributo es una buena práctica de seguridad cuando usas target="_blank" para prevenir ciertos ataques de seguridad (como el phishing).*/}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Portafolio;

