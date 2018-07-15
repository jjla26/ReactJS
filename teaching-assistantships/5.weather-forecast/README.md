EJERCICIO 5: PRONÓSTICO DEL TIEMPO
---
Se debe desarrollar una aplicación que muestre el pronóstico del tiempo para una localidad dada.

La aplicación debe tener una barra de búsqueda en donde se ingresa el nombre de la localidad que se quiere conocer el pronóstico del tiempo.

La información desplegada, por localidad encontrada, debe mostrar el pronóstico del tiempo desde la hora actual hasta tres horas hacia adelante. Además se debe mostrar la información de los cinco días siguientes al actual. 

## Fuente de datos

### Estación
- url: `https://api.openweathermap.org/data/2.5/forecast?q={:location}&units=metric&appid={:app_id}`

## Niveles de dificultad
1. Consumir fuentes de datos mediante una acción
2. Utilizar una acción asíncrona para consumir la fuente de datos, y manejar errores y éxitos

## Recursos
- [Documentación oficial de Open Weather Map API](https://openweathermap.org/forecast5)
- [Documentación oficial de React.js](https://reactjs.org/docs)
- [Documentación oficial de Redux.js](https://redux.js.org/)
- [Repositorio oficial de Create React App](https://github.com/facebook/create-react-app)

***
© [DesafioLatam](https://desafiolatam.com) - Todos los derechos reservados
