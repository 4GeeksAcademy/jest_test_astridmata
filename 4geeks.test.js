const { isUpperCase} = require('./sum');

// Primera prueba posible
test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
  });
  // Explicación:

  // Entrada: 'HELLO'
  // Comportamiento: La función recibe 'HELLO' y lo compara con 'HELLO'.toUpperCase(), que sigue siendo 'HELLO'.
  // Resultado esperado: true, ya que la cadena está completamente en mayúsculas.
  // Estado de la prueba: Pasa correctamente.

  // Segunda prueba posible
test('Testing for Hello (mixed)', () => {
    const result = isUpperCase('Hello');
    expect(result).toBe(false);
  });
  // Explicación:

  // Entrada: 'Hello'
  // Comportamiento: La función compara 'Hello' con 'Hello'.toUpperCase(), que sería 'HELLO'. Como 'Hello' no es igual a 'HELLO', debería devolver false.
  // Resultado esperado: false, ya que la cadena no está completamente en mayúsculas.
  // Estado de la prueba: Pasa correctamente.


  // Tercera prueba posible
test('Testing for hello (lower)', () => {
    const result = isUpperCase('hello');
    expect(result).toBe(false);
  });
//Explicación:

// Entrada: 'hello'
// Comportamiento: La función compara 'hello' con 'hello'.toUpperCase(), que sería 'HELLO'. Como 'hello' no es igual a 'HELLO', debería devolver false.
// Resultado esperado: false, ya que la cadena no está en mayúsculas.
// Estado de la prueba: Pasa correctamente.


//   // Cuarta prueba posible
test('Boolean should return false', () => {
    const result = isUpperCase(true);
    expect(result).toBe(false);
  });

//   Explicación:

// Entrada: true (un valor booleano)
// Comportamiento: La función intenta ejecutar true.toUpperCase(), pero true no tiene el método .toUpperCase() porque no es una cadena de texto, es un booleano.
// Resultado: Esto romperá la ejecución con un error del tipo TypeError: true.toUpperCase is not a function.
// Motivo del error: La función está diseñada para manejar solo cadenas de texto, pero aquí se le está pasando un valor booleano.
  // Quinta prueba posible
test('Number should return false', () => {
    const result = isUpperCase(12341234);
    expect(result).toBe(false);
  });

//   Explicación:

// Entrada: 12341234 (un número)
// Comportamiento: La función intenta ejecutar 12341234.toUpperCase(), pero los números no tienen el método .toUpperCase().
// Resultado: Esto romperá la ejecución con un error del tipo TypeError: 12341234.toUpperCase is not a function.
// Motivo del error: Los números no tienen métodos de cadena, por lo que la función falla al intentar manejar un número.

//
//
//
//
//

// Solución para evitar que las pruebas se rompan
// El problema ocurre cuando la función recibe un tipo de dato no esperado (como un booleano o un número). Para evitar estos errores, podrías modificar la función isUpperCase para que verifique si el valor de entrada es una cadena de texto antes de intentar convertirla a mayúsculas.
//
//
//
//
// function isUpperCase(sentence) {
//   if (typeof sentence !== 'string') {
//       return false;  // Si no es una cadena, devuelve false
//   }
//   return sentence === sentence.toUpperCase();
// }
//
//
//

// Ahora, la función solo intentará ejecutar toUpperCase en valores que sean cadenas de texto, lo que evitará los errores en las pruebas.

// Pruebas revisadas
// Cadena en mayúsculas: 'HELLO' debería devolver true.
// Cadena mixta: 'Hello' debería devolver false.
// Cadena en minúsculas: 'hello' debería devolver false.
// Booleano: true debería devolver false y no romper.
// Número: 12341234 debería devolver false y no romper.