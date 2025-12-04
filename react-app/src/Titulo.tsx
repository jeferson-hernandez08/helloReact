function Titulo() {
  const nombre = "soy Jeferson" 
  if (nombre) {
    return <h1>Hola {nombre}</h1>
  }
  return <h1>Hola Mundo</h1>;

}

export default Titulo;


/*
  Aquí tenemos nuestro componente creado que se llama titulo vamos a utilizarlo desde nuestro archivo App.tsx.
*/