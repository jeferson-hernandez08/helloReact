function App() {
  const nombre = "Jeferson Hernandez"
  if (nombre) {
    return <p>Hola {nombre}</p>

  }
  return <p>Hola Mundo</p>;

}

export default App;




/*
  Componentes
  - Todas las aplicaciones en react necesitan una funcion que va llamar App, este nombre podria ser otro,
  asi que necesitamos exportar esta funcion.
  - Retornamos el contenido que react le va mostrar a los usuarios y aquí, este contenido podemos ver que 
    hay codigo HTML dentro de Codigo javaScript, esto es lo que llamamoos codigo JSX, el codigo JSX es muy 
    parecido a codigo JSX. 
    Este codigo JSX es transformado a otro codigo que JavaScript si va poder leer, esto se transforma a 
    JSX -> React.createElement y este va tener unas cuantas opciones:  

*/

/*
  Min: 25:26 --- -- Study -- 
*/