import React from 'react';
import './styles/contacto.css';


const Contacto = () => {
  return (
    <header className='contacto__container'>
      <div className='contacto__container1'>
        <h1 className='contacto__title'>Contact</h1>
        <h2 className='contacto__parrafo'>Si quieres conocer un poco más sobre mí o mi trabajo, envíame un mensaje. Me alegraría saber de ti.
        </h2>
        <div className='contacto__cajainput'>
          <input className='contacto__input1' type="text" placeholder='Nombre' />
          <input className='contacto__input1' type="text" placeholder='Email' />
        </div>
        <div className='contacto__cajainput1'>
          <textarea className='contacto__textarea' placeholder='Mensaje'></textarea>
        </div>
        <button className='contacto__boton' >Enviar</button>
      </div>
      <div className='contacto__fin'>
        <div className='contacto__linea'></div>
        <h2 class='section__title'>Estamos en contacto, no dudes en comunicarte, gracias por tu tiempo.</h2>
        <div className='contacto__enlaces'>
            <button className='contacto__enlaces1'>
              <a className='contacto__enlaces2' href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="_blank" rel="noopener noreferrer"><i class='bx bxs-envelope'></i> Correo</a>
            </button>
            <button className='contacto__enlaces1'>
              <a  className='contacto__enlaces2' href="https://github.com/anderson180" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i> GitHub</a>
            </button>
            <button className='contacto__enlaces1'>
              <a className='contacto__enlaces2' rel="noopener noreferrer"><i class='bx bxs-map'></i> 123 Ecuador., Guayaquil.</a>
            </button>
            {/*<a href="/ruta1" target="_blank">: href establece la ruta a la que quieres ir. target="_blank" abre el enlace en una nueva pestaña.
rel="noopener noreferrer": Este atributo es una buena práctica de seguridad cuando usas target="_blank" para prevenir ciertos ataques de seguridad (como el phishing).*/}
          </div>
      </div>
    </header>
  )
}


export default Contacto;
