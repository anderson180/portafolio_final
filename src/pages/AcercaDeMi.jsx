import React from 'react';
import './styles/acercaDeMi.css'
import image1 from '../pages/page/numero1.jpg';
import { useTranslation } from 'react-i18next';

const AcercaDeMi = () => {

  const { t } = useTranslation();

  return (
    <header className='acercademi__container'>
      <div className='acercademi__container1'>
        <div className='acercademi__container2'>
          <h1 className='acercademi__title'>{t('acer.title')}</h1>
          <dir className="acercademi__container3">
            <p><i>{t('acer.1')}</i></p>
          </dir>
          <div className='acercademi__image1'>
            <img src={image1} alt="image1" className='acercademi__1' />
          </div>
          
        </div>
      </div>
    </header>
  )
}

export default AcercaDeMi;
