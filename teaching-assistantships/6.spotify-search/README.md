EJERCICIO 6: BUSCADOR DE SPOTIFY
---
Se debe desarrollar una aplicación que permita buscar artistas en Spotify y desplegar su información.

La aplicación debe contar con una barra de búsqueda en donde se autocompletan los resultados.

Al encontrar al artista requerido, se debe desplegar en bloques sus canciones destacadas y álbumes.

Al presionar un álbum, se debe levantar una ventana modal que despliegue la información de este y la lista de canciones que contiene.


## Fuentes de datos

### Buscar artistas
- url: `https://api.spotify.com/v1/search?q={:name}&type=artist`

### Detalles del artista
- url: `https://api.spotify.com/v1/artists/{:id}`

### Álbumes del artista
- url: `https://api.spotify.com/v1/artists/{:id}/albums`

### Canciones destacadas del artista
- url: `https://api.spotify.com/v1/artists/{:id}/top-tracks`

### Detalles del álbum
- url: `https://api.spotify.com/v1/albums/{:id}`

### Canciones del álbum
- url: `https://api.spotify.com/v1/albums/{:id}/tracks`

## Niveles de dificultad
1. Consumir fuentes de datos mediante acciones
2. Utilizar acciones asíncronas para consumir fuentes de datos, y manejar errores y éxitos

## Recursos
- [Documentación oficial de Spotify Web-API](https://beta.developer.spotify.com/documentation/web-api/reference/)
- [Documentación oficial de React.js](https://reactjs.org/docs)
- [Documentación oficial de Redux.js](https://redux.js.org/)
- [Repositorio oficial de Create React App](https://github.com/facebook/create-react-app)

***
© [DesafioLatam](https://desafiolatam.com) - Todos los derechos reservados
