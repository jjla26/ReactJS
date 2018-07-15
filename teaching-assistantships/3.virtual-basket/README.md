EJERCICIO 3: CANASTA VIRTUAL
---
Se debe desarrollar una Canasta Virtual que guarde los artículos que quieren ser comprados.

La aplicación debe agrupar artículos por su tipo, mediante estaciones (vistas). De esta forma 
las estaciones son las siguientes: Electrónicos, Películas y Video juegos.

El flujo de compra de artículos debe recorrer todas las estaciones de forma secuencial.

La canasta debe iniciar vacía, y luego, al ir avanzando por cada estación, se podrán agregar artículos por estación.

Al finalizar, luego de pasar por las 3 estaciones, se debe mostrar una vista de detalles de compra con el contenido de la canasta y el valor total de la compra.

Además, en la vista de detalles de compra se debe permitir volver a elegir alguna estación y escoger otro artículo. En este flujo específico, al terminar de seleccionar artículos, se debe retornar a la vista de detalles de compra.

Para finalizar el flujo, en la vista de detalles de compra, debe existir un botón "Comprar" que al ser presionado muestre un mensaje de compra exitosa y limpie la canasta para iniciar un nuevo flujo de compra.

## Fuentes de datos

### Electrónicos 
- ruta: `./public/electorics.json`
- url: `/electronics.json`

### Películas
- ruta: `./public/movies.json`
- url: `/movies.json`

### Video juegos
- ruta: `./public/videogames.json`
- url: `/videogames.json`

```javascript
const stations = {
  electronics: {
    items: [
      {
        excerpt: 'Android TV Quad Core V.7.0',
        id: 1,
        image: 'https://c1.staticflickr.com/1/911/41934425191_88bbac001b_z.jpg',
        name: 'Android TV',
        price: 150,
      }, {
        excerpt: 'Speakers BT Genius 100 Watts',
        id: 2,
        image: 'https://c1.staticflickr.com/1/959/41934423331_31a1fc148f_z.jpg',
        name: 'Speakers BT Genius',
        price: 200,
      }, {
        excerpt: 'Tv AOC 43 Inches, Smart TV',
        id: 3,
        image: 'https://c1.staticflickr.com/1/831/41215767194_dbb0529856_b.jpg',
        name: 'Televisor AOC',
        price: 300,
      }, {
        excerpt: 'Cafetera NESPRESSO Inissia',
        id: 4,
        image: 'https://c1.staticflickr.com/1/979/40126746090_ea0f5f05b5_z.jpg',
        name: 'Coffee maker NESPRESSO',
        price: 200,
      }, {
        excerpt: 'iPhone 6s 16 GB Color Negro',
        id: 5,
        image: 'https://c1.staticflickr.com/1/864/41034660385_5899437aa4.jpg',
        name: 'iPhone 6s 16 GB',
        price: 350,
      }
    ],
    station: 'electronics',
    success: true,
  },
  movies: {
    items: [
      {
        excerpt: 'Star Wars from George Lucas',
        id: 6,
        image: 'https://c1.staticflickr.com/1/824/41934421151_a478646dd0.jpg',
        name: 'Star Wars Ep. IV',
        price: 12,
      }, {
        excerpt: 'Seven Samurai from Akira Kurosawa',
        id: 7,
        image: 'https://c1.staticflickr.com/1/909/41034647585_fee38ef2a3.jpg',
        name: 'Seven Samurai',
        price: 12,
      }, {
        excerpt: 'A Clockwork Orange from Stanley Kubrick',
        id: 8,
        image: 'https://c1.staticflickr.com/1/824/41934423861_5a4feda0b8.jpg',
        name: 'A Clockwork Orange',
        price: 15
      }, {
        excerpt: '300 from Zack Snyder',
        id: 9,
        image: 'https://c1.staticflickr.com/1/906/41215773324_4a57a784d2_b.jpg',
        name: '300',
        price: 10,
      }, {
        excerpt: 'The Terminator from James Cameron',
        id: 10,
        image: 'https://c1.staticflickr.com/1/823/41889932592_6068cf3798.jpg',
        name: 'The Terminator',
        price: 15,
      }
    ],
    station: 'movies',
    success: true,
  },
  videogames: {
    items: [
      {
        excerpt: 'Super Mario Bros 64',
        id: 1,
        image: 'https://c1.staticflickr.com/1/955/27064349077_3c19b3d0c6_b.jpg',
        name: 'Super Mario Bros 64',
        price: 20,
      }, {
        excerpt: 'The Legend Of Zelda: Ocarina Of Time',
        id: 2,
        image: 'https://c1.staticflickr.com/1/947/40126743320_6db21a6ecd.jpg',
        name: 'The Legend Of Zelda: Ocarina Of Time',
        price: 30,
      }, {
        excerpt: 'Megaman X',
        id: 3,
        image: 'https://c1.staticflickr.com/1/973/27064406547_b5f1353a3e_b.jpg',
        name: 'Megaman X',
        price: 30,
      }, {
        image: 'https://c1.staticflickr.com/1/955/40126746890_68feebf7d4_z.jpg',
        id: 4,
        excerpt: 'Borderlands',
        name: 'Borderlands',
        price: 20,
      }, {
        excerpt: 'God Of War',
        id: 5,
        image: 'https://c1.staticflickr.com/1/968/40126745590_7e8af36d04_b.jpg',
        name: 'God Of War',
        price: 20,
      }
    ],
    station: 'videogames',
    success: true,
  },
};
```

## Niveles de dificultad
1. Utilizar objeto literal `stations` como estado inicial
2. Consumir archivos JSON `electronics.json`, `movies.json` y `videogames.json` mediante acciones
3. Utilizar acciones asíncronas para consumir archivos JSON, y manejar errores y éxitos

## Recursos
- [Documentación oficial de React.js](https://reactjs.org/docs)
- [Documentación oficial de Redux.js](https://redux.js.org/)
- [Repositorio oficial de Create React App](https://github.com/facebook/create-react-app)

***
© [DesafioLatam](https://desafiolatam.com) - Todos los derechos reservados
