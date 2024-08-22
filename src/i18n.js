import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json'
import translationES from './locales/es/translation.json'

// Un objeto que contiene las traducciones para cada idioma.
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)//es un plugin que permite la integración de i18next con React. Al usar este plugin, i18next puede trabajar de manera fluida con los componentes de React
  .use(LanguageDetector)//Detecta el idioma preferido del usuario y configura i18next para usar ese idioma de manera predeterminada.
  .init({//Inicializa i18next con las siguientes configuraciones:
    resources,//Define las traducciones disponibles para cada idioma, permitiendo a i18next cargar y usar estas traducciones según sea necesario.
    fallbackLng: 'en',//El idioma de respaldo que se usará si i18next no puede determinar el idioma preferido del usuario o si faltan traducciones en el idioma seleccionado.
    interpolation: {//interpolation: { escapeValue: false }: Desactiva el escape de valores interpolados para evitar conflictos con la seguridad XSS en React y ataque maliciosos de hacker.
      escapeValue: false
    },
    detection: {//La configuración detection en i18next se utiliza para detectar el idioma preferido del usuario.
      //order: Esta propiedad especifica el orden en el que i18next debería buscar para detectar el idioma del usuario.
      order: ['localStorage', 'navigator'],
      //El localStorage es un lugar donde podemos almacenar datos del navegador que persisten entre las sesiones. Si anteriormente se ha guardado el idioma preferido del usuario en el localStorage, i18next lo utilizará.
      //navigator: Si el idioma no se encuentra en el localStorage, i18next utilizará el idioma del navegador.
      caches: ['localStorage']//caches: Esta propiedad especifica dónde i18next debería guardar el idioma detectado para su uso futuro.
      //Esto indica que i18next debería almacenar el idioma detectado en el localStorage. Esto es útil porque una vez que el idioma es detectado y almacenado en el localStorage, la próxima vez que el usuario visite tu aplicación, i18next podrá leer directamente el idioma del localStorage sin tener que detectarlo nuevamente
    }
  });

export default i18n;
