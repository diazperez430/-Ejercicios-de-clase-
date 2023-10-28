/* 1. Crea un programa que solicite al usuario un número y determine si es positivo, negativo 
o cero utilizando una estructura condicional (if). */

// let number = prompt("Ingresa aquí un número")
// number = Number(number)


// if (number>0){
//     alert("Su número es Positivo")
// }
// else if (number<0){
//     alert("Su número es negativo")
// }
// else {
//     alert("Su número es 0")
// }

/* 2. Declara una variable para representar la temperatura en grados Celsius. Utiliza una 
estructura if-else para determinar si la temperatura está por encima o por debajo de 
cero grados y muestra un mensaje apropiado. */

// let temp=prompt("Ingresa aquí la Temperatura en °C")
// temp=Number(temp)

// if (temp>0){
//     alert("Su temperatura está por encima de 0° C")
// }
// else if (temp<0){
//     alert("Su temperatura está por debajp de 0 °C")
// }
// else{
//     alert("Su temperatura es de 0° C")
// }

/* 3.  Escribe un programa que pida al usuario su edad y determine si es un niño, adolescente
 o adulto utilizando una estructura if-else-if.*/

// let edad = prompt("Ingrese su edad")
// edad=Number(edad)

// if (edad<=12){
//     alert("Todavía eres un niño")
// }

// else if (edad>12 && edad<18){
//     alert("Usted es un adolescente")
// }

// else{
//     alert("Usted es mayor de edad")
// }

/*4. Crea un programa que tome un número como argumento y utilice el operador ternario para
determinar si es par o impar. Devuelve un mensaje que indique el resultado. */

// let number = prompt("Ingresa un número cualquiera y te diré si es par o impar")
// number=Number(number)


// number%2==0?alert("Su número es par"):alert("Su número es impar")

/* 5. Usa el prompt para capturar dos numeros que representarán los ejes X y Y. Utiliza una 
estructura if, if-else para determinar en qué cuadrante se encuentra el punto que representa
 cada valor ingresado por el usuario, así:

Si los dos valores son positivos, el punto se encuentra en el cuadrante 1
Si X es positivo y Y es negativo, el punto se encuentra en el cuadrante 2
Si los dos valore son negaticos, el punto se encuentra en el cuadrante 3
Si X es negativo y Y es positivo, el punto se encuentra en el cuadrante 4 */

// let xajax =prompt("Ingrese el valor x de un punto en el plano cartesiano")
// let yajax=prompt("Ingrese el valor y de un punto en el plano cartesiano")
// xajax=Number(xajax)
// yajax=Number(yajax)

// if (xajax>=0 && yajax>=0){
//     alert(`Su punto (${xajax};${yajax}) se encuentra en el cuadrante 1`)
// }
// else if (xajax>=0 && yajax<0){
//     alert(`Su punto (${xajax};${yajax}) se encuentra en el cuadrante 2`)
// }

// else if(xajax<0 && yajax<0){
//     alert(`Su punto (${xajax};${yajax}) se encuentra en el cuadrante 3`)

// }
// else if (xajax<0 && yajax>=0){
//     alert(`Su punto (${xajax};${yajax}) se encuentra en el cuadrante 4`)

// }





// else {
//     alert("Ingrese su dato como número")
// }

/////////////////////////////////////////////////////////////////////////////////////7

/* 1. Declarar dos variables numéricas e incrementar una de ellas y decrementar la otra en una sola línea de código 
utilizando operadores de incremento y decremento. Muestra los valores resultantes. */

// let first = 5; first++; let second = 50; second--; console.log(first,second);



/* 2. Usando el prompt, captura el nombre de un producto. Define una variable que se llame precio con el valor inicial
de 0 (cero) e incrementa el precio en 1 por cada letra que tenga el producto, ejemplo: 

1.1 Si el producto se llama Mango el precio debe ser de $5 la unidad. El mesaje será: El Mango tiene un valor de $5 la
unidad.

1.2 Si el producto se llama Mandarina, el precio debe ser de 9. El mensaje será: La mandarina tiene un valor de $ 9 la
unidad*/


// let producto = prompt("Ingresa aquí el nombre del producto y te diré su precio")

// let precio = producto.length

// alert(`El precio de su producto ${producto} es $${precio}`)

/* 3. Es noche de amor y amistad, en esta ocasión el cover para ingresar a la disco incrementará
 2 veces para los chicos y decrementará 2 veces para las chicas. El valor habitual es de 7 
 dólares. Usando el prompt solicite el nombre y el genero de una persona e imprima usando 
 alert() el siguiente mensaje si es un chico Juan tu entrada a la disco vale $9 dólares, en
  caso de ser chica Ana tu entrada a la disco vale $5 dólares */


// let nombre = prompt("Ingresa tu nombre");
// let genero = prompt("Ingresa tu género como (M / F)");
// let precio = 7;

// if(genero== "m" ){
//     precio+=2
//     alert(`${nombre} tu entrada a la disco vale $${precio}`);
//  }

// else if(genero== "f" ){
//     precio-=2
//     alert(`${nombre} tu entrada a la disco vale $${precio}`);
// }

// else{
//     alert("No ingresaste un sexo válido M o F")
// }

///////////////////////////////////////////////////////////////////////////////777

/* 1. Crea un programa que solicite al usuario dos números usando el prompt y realice operaciones de suma, resta,
multipliación y división con estos números. Muestra los resultados en la consola para cada una de estas operaciones */

// let primerNumero = prompt("Ingresa el primer número a operar")
// let segundoNumero = prompt("Ingresa el segundo número a operar")

// let times = primerNumero*segundoNumero
// let add = Number(primerNumero) + Number(segundoNumero)
// let substract = primerNumero - segundoNumero
// let division = primerNumero/segundoNumero
// console.log(times,add,substract,division)

/* 2. Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. Utiliza
operadores de comparación para determinar si son iguales o si una es mayor que la otra. Muestra los resultados en la
consola*/

// let firstVariable = 5;
// let secondVariable = prompt("Ingresa un número");

// console.log(
    
//     firstVariable == secondVariable,
//     firstVariable < secondVariable,
//     firstVariable > secondVariable,
//     )

/* 3. Usando el prompt solicita al usuario digitar su nombre y utilice el operador de concatenación (+) para unir
el nombre ingresado de manera que el resultado se despliegue en un alert y sea el siguiente: Hola Juan, benvenido! */

// let name = prompt("Ingresa aquí tu nombre")

// alert ("Hola " + name + " bienvenid@")


/* 4. Crea un programa que calcule el área de un triángulo utilizando la fórmula: area = (base*altura)/2. Solicita
al usuario que ingrese los valores de la base y la altura usando el prompt.*/

// let base = prompt("Ingresa aquí la base del triángulo en metros")
// let altura = prompt("Ingresa aquí la altura del triángulo en metros")

// let partialArea = Number(base)*Number(altura)
// let trianguleArea= partialArea/2

// alert(`El área del triángulo en metros cuadrados es igual a ${trianguleArea}`)


/* 5. Declara una variable booleana llamada esMayor y asigna el resultado de una comparación entre dos edades
(por ejemplo, 18 y 25). Luego, muestra el valor es mayor en la consola. */

// let esMayor = false;

// let Otto = 26
// let Willy = 20

// if (Otto == Willy){
//     console.log("Tienen la misma edad")
// }
// else {console.log(esMayor)}

/////////////////////////////////////////////////////////////////////////////7

/*1. Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido
 es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje 
 correspondiente a la calificación ingresada, así:

Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
Si saca 4.1 y hasta 5.0 ( 'Excelente' ) */

// let nota1 =prompt("Ingresa tu primer nota (De 0 a 5)")
// let nota2 =prompt("Ingresa tu segunda nota (De 0 a 5)")
// let nota3 =prompt("Ingresa tu tercera nota (De 0 a 5)")

// nota1=parseFloat(nota1)
// nota2=parseFloat(nota2)
// nota3=parseFloat(nota3)

// let suma=nota1+nota2+nota3
// let average=suma/3
// console.log(average)

// switch(true){
    
//     case average<2.5:
//     alert("Insuficiente, has perdido la materia");
//     break;
    
//     case average >=2.5 && average < 3.5:
//     alert("Insuficiente, tienes derecho a habilitar");
//     break;
    
//     case average >= 3.5 && average < 4:
//     alert("Aceptable");
//     break;

//     case average >= 4 && average <= 5:
//     alert("Excelente");
//     break;
    
//     default:
//     alert("Ingrese un valor válido")

// }

/* 2. Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero,
 etc.). Utiliza una estructura switch para mostrar cuántos días tiene ese mes. */

//  let mesnumber=prompt("Ingresa el número del mes del año 2023")

//  mesnumber=Number(mesnumber)

// switch(mesnumber){

//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:

//     alert("El mes tiene 31 dias");
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     alert("El mes tiene 30 días");
//     break;

//     case 2:
//     alert("El es tiene 28 días");
//     break;

//     default:
//     alert("Ingrese el número en formato 1 2 3 ...");
// }

/* 3. Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento y devuelva el
 nombre del mes utilizando una estructura switch. */

// let = numeromes = prompt("Ingresa el número del mes")
// numeromes = Number(numeromes)

// switch(numeromes){

//     case 1:
//         alert("Enero");
//         break;
//     case 2:
//         alert("Febrero");
//         break;
//     case 3:
//         alert("Marzo");
//         break;
    
//     case 4:
//         alert("Abril");
//         break;
//     case 5:
//         alert("Mayo");
//         break;
//     case 6:
//         alert("Junio");
//         break;
    
//     case 7:
//         alert("Julio");
//         break;
//     case 8:
//         alert("Agosto");
//         break;
//     case 9:
//         alert("Septiembre");
//         break;

//     case 10:
//         alert("Octubre");
//         break;
//     case 11:
//         alert("Noviembre");
//         break;
//     case 12:
//         alert("Diciembre");
//         break;
    
//     default:
//         alert("Ingrese un número de 1 a 12")
// }

/* 4. Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar
 configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente. */

//  let message =prompt("Elije una opción del menú (1 2 3 ...")
//  let menu = prompt("1.Ver perfil   2.Configuración     3.Bloquear")

//  menu=Number(menu)

// switch(menu){

//     case 1:
//         prompt("Cambia tu foto");
//         break;
//     case 2:
//         prompt("Cambia tu contraseña");
//         break;
//     case 3:
//         prompt("Quien te fastidia");
//         break;
    
//     default:
//         prompt("Elije una opción correcta")
// }


/* 5. Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). Utiliza
 una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, 
Norte-opuesto es Sur). */

// let direccion = prompt("Ingresa una de las direcciónes cardinales y te diré su opuesta")

// direccion= direccion.toLowerCase()

// switch(direccion){

//     case "norte":
//         alert("Su opuesta es Sur")
//         break;
    
//     case "este":
//         alert("Su opuesta es Oeste");
//         break;

//     case "oeste":
//         alert("Su opuesta es Este");
//         break;
    
//     case "sur":
//         alert("Su opuesta es Norte")
//         break;
    
//         default:
//         alert("Ingresa una de estas direacciones (Norte, Sur, Este u Oeste.")
// }

///////////////////////////////////////////////////////////////////////////////////7

/* 1. Declara una variable y asígnale un valor booleano. Luego, utiliza una estructura
 condicional para determinar si el valor es verdadero o falso y muestra un mensaje 
 apropiado, por ejemplo "Es verdadero" o "Es falso". */

// let value = false
// if (value==true){
//     alert("Es falso")
// }
// else {
//     alert("Es verdadero")
// }

/* 2. Usa el prompt para que tome un número. Indique si el número es par o impar
lanzando un alert() */


// let numero = prompt("Ingrese cualquier número aquí y te diré si es par o impar")
// let calculo = numero%2
// if (calculo==0){
//     alert('Su número es par')
// }
// else {
//     alert("Su número es impar")
// }

/* 3. Declara una lista que contenga diferentes tipos de datos (números, cadenas, boleanos, objetos, ect.)
cuenta cuánntos valores contiene la lista e informa lanzando un alert. */

// let lista = [2,"Hola mundo",false, {nombre:"pika",},5]
// let cantidad = lista.length

// alert(`Tu lista tiene ${cantidad} datos`)



/* 4. Crea un programa que declare una lista de  nombres de frutas. Luego, elimina la primera fruta, ahora
cambia el valor de la segunda frunta que ahora esta de primero en la lista, inserta una nueva fruta al final 
de la lista y muestra toda la lista en consola */

// let lista = ["Cherries", "Peaches", "Watermelons", "Coconuts", "Kiwi" ]

// lista.shift(0)
// lista[0]="Mangos"
// lista.push("Apple")
// console.log(lista)

/* 5. Declara un objeto que represente auna persona con propiedades como: nombre, edad y dirección. Luego, 
muestra la información de la persona en la consola accediendo directamente a sus propiedades. El mensaje debe 
decir algo como: Juan tiene 45 años y vive en la calle 63 con carrera 24. */

// let persona = {
//     name : "Claudio",
//     age : 26,
//     address: "Carrera 36 #3-41",
// }

// console.log (`${persona.name} tiene ${persona.age} años y vive en la ${persona.address}`)

////////////////////////////////////////////////////////////////////////////////

//* 1. Convertir la temperatura en Celsius ingresada por el ususario a Farenheit //*

// temCelsius = prompt("Ingrese la temperatura en °C  y te la convierto en °F")
// let calculo = temCelsius*1.8 + 32
// temFarenheit = alert (`Su temperatura en °F es ${calculo}`)
// console.log(calculo)



//* 2. Pide al usuario que ingrese el radio de un círculo y calcula su área. *//

// const PI = 3.14159
// radio = prompt("Ingrese el radio del círculo en m y te calculo su área en m^2")
// let area = Math.round(PI*Math.pow(radio, 2));
// let resultado = alert(`El área del círculo es ${area} m^2`)



/* 3. Afirmar si es mayor o menor de edad */

// let dato = prompt("Ingrese su edad")
// edad= Number(dato)

// if (edad >= 18){
//     alert("Usted es mayor de edad")
// }
// else if (edad >= 0  && edad <18){
//     alert("Usted es menor de edad")
// }
// else {
//     prompt ("Ingrese su edad")
// }

/* 4. Usa el prompt para tomar dos números como argumentos y utilice una variable para
 almacenar la suma de estos números. Luego, muestra el resultado en la consola */

//  let bienvenida = alert("Hola, hoy haremos una suma")
//  let primerVariable = prompt("Ingresa el primer valor")
//  let segundaVariable = prompt("Ingresa el segundo valor")
//  let resultado = alert(`La suma de tus valores es
//   ${Number(primerVariable) + Number(segundaVariable)}`)
// let valorConsola = Number(primerVariable)+ Number(segundaVariable)
// console.log(valorConsola)

/* 5. Declara un tipo string con una cadena de texto larga. Luego, utiliza métodos de 
cadenas para obtener la longitud de la cadena, convertirla a minúscula y mostrar la última
palabra en mayúsculas */

// let mayeutica = "Sólo sé que nada sé"

// console.log(mayeutica.length)
// let lastLetter = mayeutica.toUpperCase().slice(18)
// let firstSection = mayeutica.toLowerCase().slice(0,18)
// let combination = firstSection.concat(lastLetter)
// console.log(combination)


/////////////////////////////////////////////////////////////////////////////////77

