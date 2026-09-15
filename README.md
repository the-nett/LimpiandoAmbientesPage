# Limpiando Ambientes — Landing page

Landing page de **Limpiando Ambientes**, servicio de lavado y desinfección de sofás,
colchones y sillas de carro en Bogotá.

**Sitio publicado:** https://the-nett.github.io/LimpiandoAmbientesPage/

## Estructura

```
index.html                 Página principal
assets/
  css/styles.css           Estilos
  js/main.js               Comparador antes/después y reproductor de video
  img/                     Logo y fotos de trabajos reales
  video/                   Video del proceso
```

## Desarrollo

No hay build ni dependencias: es HTML, CSS y JavaScript plano.

Para verlo en local, abre `index.html` en el navegador, o levanta un servidor
estático desde la raíz del proyecto:

```bash
python -m http.server 8000
```

## Publicación

El sitio se despliega con GitHub Pages desde la rama `main`, carpeta raíz.
Cada push a `main` actualiza el sitio en un par de minutos.

## Contenido a actualizar

- **Fotos de trabajos:** agrégalas en `assets/img/` y crea un nuevo bloque
  `.ba-frame` dentro de `.gallery-sliders` en `index.html`.
- **Número de WhatsApp:** aparece en los enlaces `wa.me/573508370591` y en el
  texto de la barra superior y el footer.
