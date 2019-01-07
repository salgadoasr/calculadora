function redondearDecimales(numero, decimales) {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');  
    // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {        
        // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero; 
        // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
    }
}

function comprobarDatos() {
  operando = prompt("Introduce el operando "+cont);
  while (isNaN(operando) || operando == ""){
    operando = prompt("Debes introducir un número");
  }
  return operando;
}

function recogerDatos(){
  operando = comprobarDatos()
  do{
    array[cont-1] = operando;
    cont += 1;
    operando = comprobarDatos()
  }while (operando !== null)
}

function sum() {
  var acc = 0;
  var aux = 0;
  for (num in array) {
    aux = parseFloat(array[num]);
    acc += aux;
  }
  return acc;
}

function resta() {
  var acc = 0;
  var aux = 0;
  acc = parseFloat(array[0]) *2;
  for (num in array) {
    aux = parseFloat(array[num]);
    acc -= aux;
  }
  return acc;
}

function multiplicacion() {
  var acc = 1;
  var aux = 0;
  for (num in array) {
    aux = parseFloat(array[num]);
    acc *= aux;
  }
  return acc;
}

function division() {
  var acc = 0;
  var aux = 0;
  acc = parseFloat(array[0]) * parseFloat(array[0]);
  for (num in array) {
    aux = parseFloat(array[num]);
    acc /= aux;
  }
  return acc;
}

function principal(){
  switch(prompt("Quieres utilizar la calculadora? s/n")){
  case 's' : 
      do{
        cont = 1;
        recogerDatos();
        alert('El resultado de la suma es '+redondearDecimales(sum(array),2));
        alert('El resultado de la resta es '+redondearDecimales(resta(array),2));
        alert('El resultado de la multiplicación es '+redondearDecimales(multiplicacion(array),2));
        alert('El resultado de la división es '+redondearDecimales(division(array),2));
        var aux = prompt("Quieres volver a utilizar la calculadora? s/n");
      }while (aux === 's')
      alert("Hasta luego!");
      break;
              
  case 'n' : 
      alert("Hasta luego!");
      break;
  }
}

var operando = 0;
var cont = 1;
var array = [];