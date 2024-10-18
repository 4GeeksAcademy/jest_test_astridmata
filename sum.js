 // archivo: app.js
 function sum(a, b) {
    return a + b;
  }
  
  //otro ejemplo 
  
  const resta = (primerDigito, segundoDigito)=>{
    return primerDigito-segundoDigito;
  };
  
  
  
  
  //otro ejemplo 
  function isUpperCase(sentence) {
    return (sentence == sentence.toUpperCase());
  }
  // Esta función toma una cadena de texto (sentence) como argumento y verifica si la cadena está completamente en mayúsculas. Utiliza sentence.toUpperCase() para convertir la cadena a mayúsculas y luego compara esa versión con la cadena original.
  
  module.exports = {sum, resta, isUpperCase};

  