import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/navBar.css';
import './styles/paginaInicio.css';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [navbarnone, setNavbarnone] = useState(false);
  const [showPaginaInicio, setShowPaginaInicio] = useState(true);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(localStorage.getItem('i18nextLng') === 'en');
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleClass = () => {
    setNavbarnone(!navbarnone);
  };

  const handleClickTitle = () => {
    setShowPaginaInicio(true);
  };

  useEffect(() => {
    const currentLanguage = localStorage.getItem('i18nextLng') || 'es';
    i18n.changeLanguage(currentLanguage);
  }, [i18n]);

  useEffect(() => {
    if (!showPaginaInicio) {
      navigate('/portafolio');
    }
  }, [showPaginaInicio]);

  const handleClick = () => {
    setShowPaginaInicio(false);
  };

  const handleLanguageChange = () => {
    const newLanguage = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('i18nextLng', newLanguage);
    setIsEnglish(!isEnglish);
  };

  const handleModeChange = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode', isLightMode);
    document.body.classList.toggle('dark-mode', !isLightMode);
  };

  return (
    <header>
      <div className={`navbar__principal ${showPaginaInicio ? 'blurred-background' : ''}`}>
        <nav className="navbar__container">
          <h1 className='navbar__title' onClick={handleClickTitle}><i className='bx bxs-dog'></i></h1>
          <ul className={`navbar__list ${navbarnone ? 'navbarnone' : 'navbar__list3'}`}>
            <li className='navbar__item'><Link to='/portafolio' className='navbar__item2'>{t('nav.home')}</Link></li>
            <li className='navbar__item'><Link to='/acercademi' className='navbar__item2'>{t('nav.about')}</Link></li>
            <li className='navbar__item'><Link to='/misproyectos' className='navbar__item2'>{t('nav.projects')}</Link></li>
            <li className='navbar__item'><Link to='/contacto' className='navbar__item2'>{t('nav.contact')}</Link></li>
          </ul>
          <button className='navbar' onClick={toggleClass} type='button' aria-label='abrir'><i className='bx bx-menu'></i></button>
        </nav>
      </div>
      {showPaginaInicio && (
        <div className='pagina__container'>
          <div className='container'>
          <h1 className='pagina__title'>{t('paginainicio.welcome')}</h1>
            <h2 className='pagina___title1'><i className='bx bxs-dog'></i></h2>
            <div className='container__2'>
              <span className='claro'>{t('paginainicio.black')}</span>
              <input type="checkbox" className="check" onChange={handleModeChange} checked={!isLightMode} />
              <span className='negro'>{t('paginainicio.white')}</span>
              <span className='ingles'>Español</span>
              <input type="checkbox" className='check' onChange={handleLanguageChange} checked={isEnglish} />
              <span className='espanol'>Inglés </span>
            </div>
            <button className='pagina__boton' onClick={handleClick}>{t('paginainicio.start')}</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
