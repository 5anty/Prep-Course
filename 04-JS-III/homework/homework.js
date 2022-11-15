// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
}


function devolverUltimoElemento(array) {
  return array[array.length - 1];
  // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {
  return array.length;
  // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) {
  var a = []
  for(e of array){
    a.push(e + 1);
  }
  return a;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}


function dePalabrasAFrase(palabras) {
  var a = "";
  for (var i = 0; i < palabras.length -1 ; i++ ){
     a += palabras[i] + " ";
  }
  return a + palabras[palabras.length -1 ];
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {
  for (var i = 0; i < array.length + 1; i++){
    if(array[i] === elemento){
      return true;
    }
    else{
      return false;
    }
  }
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}


function agregarNumeros(numeros) {
  var suma = 0;
  for(var i = 0; i < numeros.length ; i++){
    suma = suma + numeros[i];
  }
  return suma;
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {
  var suma = 0;
  for(var i = 0; i < resultadosTest.length ; i++){
    suma = suma + resultadosTest[i];
  }
  return suma/resultadosTest.length;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {
  return Math.max.apply(null,numeros);
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}


function multiplicarArgumentos() {
    var num = 1;
    if(arguments.length === 0){
      return 0;
    }
    else{
      if(arguments.length === 1){
        return arguments[0];
      }
      else{
        for(var i = 0 ; i < arguments.length ; i++){
          num = num * arguments[i];
        }
        return num;
      }
    }
    
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  var a = [];
  for (var i = 0 ; i < arreglo.length ; i++){
    if(arreglo[i] > 18){
      a.push(arreglo[i]);
    }
  }
  return a.length;
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {
var dia = {
  1: "Es fin de semana",
  2: "Es dia Laboral",
  3: "Es dia Laboral",
  4: "Es dia Laboral",
  5: "Es dia Laboral",
  6: "Es dia Laboral",
  7: "Es fin de semana"
}
return dia[numeroDeDia];
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  var a = Number(n.toString().charAt(0));
  if(a === 9){
   return true;
  }
  else{
    return false;
  }
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  var x = [];
  var y = [];
    for(var i = 1 ; i < arreglo.length ; i++){
      var b = arreglo[0];
      if(arreglo[i] === b){
        x.push(i);
      }
      else{
        y.push(1);
      }
    }
    if(y.length > 0){
      return false;
    }else{
      return true;
    }
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  
} 


function mesesDelAño(array) {
  var buscarmes = ["Marzo", "Noviembre", "Enero"];
  var sihaymes = [];
  for(var i = 0 ; i < buscarmes.length ; i++){
    if(array.includes(buscarmes[i]) === true){
      sihaymes.push(buscarmes[i]);
    }
  }
  if(sihaymes.length === 3){
    return sihaymes;
  }
  else{
    
    return "No se encontraron los meses pedidos";
  }
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  return array.filter((e) => e > 100);
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  var array = [];
  var nuevonumero = numero;
for(var i = 0 ; i < 10 ; i++){
    nuevonumero = nuevonumero + 2;
  array.push(nuevonumero);
  if(nuevonumero === i ){
    return "Se interrumpió la ejecución";
    break;
  }
  else {
    if(array.length === 10){
      return array;
    }
  }
}
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  var array = [];
  var nuevonumero = numero
for(var i = 0 ; i < 10 ; i++){
  if(i === 5){
    continue;
  }
  else{
    nuevonumero = nuevonumero + 2;
    array.push(nuevonumero);
  }
}
return array;
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
