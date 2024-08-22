import React from 'react';
import './styles/contacto.css';
import { useTranslation } from 'react-i18next';

const Contacto = () => {

  const { t } = useTranslation();

  return (
    <header className='contacto__container'>
      <div className='contacto__container1'>
        <h1 className='contacto__title'>{t('con.title')}</h1>
        <h2 className='contacto__parrafo'>{t('con.1')}</h2>
        <div className='contacto__cajainput'>
          <input className='contacto__input1' type="text" placeholder={t('con.2')} />
          <input className='contacto__input1' type="text" placeholder={t('con.3')} />
        </div>
        <div className='contacto__cajainput1'>
          <textarea className='contacto__textarea' placeholder={t('con.4')}></textarea>
        </div>
        <button className='contacto__boton' >{t('con.5')}</button>
      </div>
      <div className='contacto__fin'>
        <div className='contacto__linea'></div>
        <h2 class='section__title'>{t('con.6')}</h2>
        <div className='contacto__enlaces'>
            <button className='contacto__enlaces1'>
              <a className='contacto__enlaces2' href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="_blank" rel="noopener noreferrer"><i class='bx bxs-envelope'></i> Gmail</a>
            </button>
            <button className='contacto__enlaces1'>
              <a  className='contacto__enlaces2' href="https://github.com/anderson180" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i> GitHub</a>
            </button>
            <button className='contacto__enlaces1'>
              <a className='contacto__enlaces2' rel="noopener noreferrer"><i class='bx bxs-map'></i> Ecuador., Guayaquil.</a>
            </button>
            {/*<a href="/ruta1" target="_blank">: href establece la ruta a la que quieres ir. target="_blank" abre el enlace en una nueva pestaña.
rel="noopener noreferrer": Este atributo es una buena práctica de seguridad cuando usas target="_blank" para prevenir ciertos ataques de seguridad (como el phishing).*/}
          </div>
      </div>
    </header>
  )
}


export default Contacto;
