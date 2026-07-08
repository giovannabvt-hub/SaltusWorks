# Imágenes del sitio

## Portada del hero

El hero del Home usa dos capas, en este orden:

1. **`hero.svg`** — ilustración vectorial propia del árbol de la vida al
   amanecer (águila, lobo, ciervo, montañas). **Ya está incluida** y se ve por
   defecto, así que el sitio nunca queda sin portada.
2. **`hero.jpg`** — la obra final (la pintura atmosférica). Es **opcional**:
   si agregás este archivo, se superpone automáticamente por encima de la
   ilustración y pasa a ser la portada. Si no existe, se muestra `hero.svg`.

### Para usar la pintura definitiva como portada

Guardá la imagen en esta carpeta con el nombre exacto **`hero.jpg`**:

```
public/images/hero.jpg
```

- Formato: JPG o WebP, horizontal (16:9), ~1920px de ancho.
- No hace falta tocar código: el hero la detecta sola.
- Esta misma imagen se usa como `og:image` al compartir en redes.

## Otras imágenes

El resto de las secciones usa marcos "placeholder" (con la chispa) donde luego
podés colocar fotos reales de programas, mockups de la app y retratos del equipo.
