Al subir tu proyecto a GitHub, no deberías tener problemas siempre y cuando sigas algunas prácticas recomendadas:

1. Incluir los archivos en el repositorio:
Asegúrate de que los archivos PDF (cv_es.pdf y cv_en.pdf) estén dentro de la carpeta public/ en tu proyecto. Al hacer un git add y git commit, estos archivos serán incluidos en el repositorio y estarán disponibles para cualquiera que clone tu proyecto.
2. Rutas relativas:
Como mencionamos, las rutas a los PDF son relativas a la raíz de tu proyecto (/cv_es.pdf, /cv_en.pdf). Esto es independiente de la plataforma donde se despliegue (GitHub Pages, Netlify, Vercel, etc.). Estas plataformas servirán la carpeta public como la raíz del proyecto, por lo que las rutas seguirán siendo válidas.
3. Verificar la configuración de despliegue:
Si despliegas tu proyecto en una plataforma como GitHub Pages, Netlify o Vercel, asegúrate de que estás incluyendo toda la carpeta public/ en el despliegue. En GitHub Pages, por ejemplo, asegúrate de que el directorio correcto esté configurado como fuente.
4. GitHub Pages y el archivo public:
Si utilizas GitHub Pages para desplegar tu proyecto, ten en cuenta que la carpeta public/ es tratada como raíz, por lo que los archivos dentro de public/ estarán disponibles en la URL de tu página de GitHub.

Ejemplo: Si tu repositorio se llama username.github.io, los archivos estarán disponibles en https://username.github.io/cv_es.pdf.

5. Repositorio público vs. privado:
Si tu repositorio es público, los archivos PDF serán accesibles por cualquier persona que visite la URL. Si es privado, solo los colaboradores del repositorio podrán acceder a los archivos.
Conclusión:
Si sigues estas recomendaciones, los archivos PDF se descargarán correctamente y no deberías tener problemas al subir y desplegar tu proyecto desde GitHub.

los archivos PDF no son amidtidos en aplicacion de react por eso todo archivo PDF debe ir en la carpeta publi.