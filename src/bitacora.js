//* 1. Crear un estado newTweet dentro del estado de Feed
//! Hecho

//* 2. Crea un método para agregar un tweet, para este método puedes
// usar push o el operador de propagación (spread operator)
// para poder agregar un elemento en el arreglo, una vez hecha esa
// operación tendrás que actualizar el estado donde se encuentra
// el arreglo de tweets. //! Hecho
// https://www.measurethat.net/Benchmarks/Show/4223/0/array-
// concat-vs-spread-operator-vs-push

//* 3. Este método recibirá la interfaz de evento y actualizará el estado
// newTweet con el valor del nuevo tweet que se ingreso a través
// del el input o textarea. //! Hecho

//* 4. Crear una fuente de datos como trends.js o source.js que
// contenga una lista de perfiles de usuario y la siguiente estructura,
// por ultimo deberás de exportar esos datos //! Hecho

//* 5. Crear un estado profiles en el componente sidebarCol que
// contiene el componente search y trends, ese estado recibirá
// como valor la lista de perfiles creada en el punto no. 2. //! Hecho

//* 6. Crea un método para buscar todas las coincidencias que existan
// dentro de una lista, por ejemplo de la siguiente lista encontrar
// aquellos nombres que inicien con la palabra Juan
// Para ello te recomiendo usar filter con includes o
// https://www.measurethat.net/Benchmarks/Show/6654/0/indexof-
// vs-includes-in-string
// https://medium.com/nubeden-desarrollo-web/m%C3%A9todo-
// includes-en-javascript-66f40cbceecb
// esto te servirá para buscar un username dentro de una lista de
// profiles que creaste en el punto no. 2. //! Hecho

//* 7. El método creado en el punto anterior será llamado cuando
// cambie el valor del input dentro del componente SearchBar, para
// ello deberás usar el evento onChange. //! Hecho

//* 8. Listar el estado profiles en un nuevo componente llamado
// SearchDropdown en él se mostrará la imagen de perfil del
// usuario, el nombre y el nombre de usuario. //! Hecho

//* 9. Por último, deberás publicar tu proyecto en Netlify, debes dcho
// asegurarte que no hay variables, métodos o imports sin usar, una
// vez hecho eso tendrás que subir tus cambios a github y crear una
// nueva app donde conectes el repositorio.

//* Evaluación
// a) Listar tweets – 5 puntos //! Hecho
// b) Mostrar reacciones de cada tweet – 5 puntos //! Hecho
// c) Habilitar la función de dar like y retweet – 15 puntos //! Hecho
// d) Mostrar/ocultar menú contextual – 15 puntos //! Hecho
// e) Borrar un tweet – 10 puntos //! Hecho
// f) Listar tendencias – 10 puntos //! Hecho
// g) Agregar un tweet – 15 puntos //! Hecho
// h) Búsqueda de perfiles de usuarios –15 puntos //! Hecho
// i) Listar perfiles de usuarios – 10 puntos //! Hecho