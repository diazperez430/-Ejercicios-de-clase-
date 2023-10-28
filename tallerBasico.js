/* 1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola 
la suma de los dos números ingresados. */

// let primerNumero = prompt("Ingresa el primer número")
// let segundoNumero = prompt("Ingresa el segundo número")

// primerNumero=Number(primerNumero)
// segundoNumero=Number(segundoNumero)

// suma= primerNumero+segundoNumero
// console.log(suma)

/* 2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la 
frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe 
imprimir en la consola: Hola Juan, grandioso! Tienes 20 años */

// let anio = prompt("Ingrese su año de nacimiento")
// let name = prompt("Ingrese su nombre")
// anio = Number(anio)
// let edadActual = anio - 2023

// console.log(`Hola ${name}, grandioso! Tienes ${edadActual} años.`)

/*3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no. */

// let digito = prompt("Ingresa aquí un número")
// digito=Number(digito)

// let multiplo = digito%5

// if (multiplo==0){
//     console.log(`El número ${digito} es múltiplo de 5`)
// }
// else (
//     console.log(`El número ${digito} no es múltiplo de 5`)
// )


/*4. Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola bing.
Si el número es múltiplo de 5 debe imprimir en la consola bong.
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.*/

// let number =prompt("Ingresa aquí un número")
// number= Number(number)


// if(number%3==0 && number%5==0){

//     console.log("Bingbong")
// }

// else if (number%3==0){

//     console.log("Bing")
// }

// else if (number%5==0){

//     console.log("Bong")
// }

// else{
//     console.log(number)
// }

/* 5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir
 la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces*/

 
//  let frase = prompt("Ingrese aquí su frase")
//  datos= [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  datos.push(frase)


// for (datos.lenght=0;datos.lenght<10;datos.lenght++){
//     console.log(frase)
// }

/* 6. Escribe un programa que le pida al usuario una frase y un número. El programa debe 
imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si 
el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo
5 veces:*/

// let number = Number(prompt("Escribe aquí un número"));
// let frase = prompt("Escribe aquí una frase");

// let datos = []

// for (i=0;i<number;i++){
//     datos.push(frase)
// }

// for(datos.length=0; datos.length<number;datos.length++){
//     console.log(frase)
// }

/* 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la 
consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número 
y 10 como segundo número, el programa debe imprimir:
5
6
7
8
9
10*/

// let primerNumero=Number(prompt("Ingresa el primer número"))
// let segundoNumero=Number(prompt("Ingresa el segundo número"))

// const numeros = []

// if (segundoNumero>0){
//     for (i = primerNumero;i<=segundoNumero;i++){
//         numeros.push(i)
//     }
// }
// else{

//     for(i=primerNumero;i>=segundoNumero;i--){
//         numeros.push(i)
//     }
// }

// console.log(numeros)

/* 8.  Crea un programa a partir de las siguientes instrucciones:

Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro",
"Pablo", "María", "Juan", "Diana".
Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el 
paso 1.
Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con 
este valor.
Recorre el arreglo e imprímelo.
Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

    Ingresa un nombre > Camilo
    Ingresa otro nombre > Ariel
    Pedro
    Pablo
    Ariel
    Juan
    Diana
    Camilo */


// let nombre = ["Pedro", "Pablo","María","Juan","Diana"]
// let newName= prompt("Ingresa aquí un nombre")

// nombre.push(newName)

// let newNameDos=prompt("Ingresa aquí un nombre")

// nombre.splice(2,0,newNameDos)

// console.log(nombre)



/* 9. Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número 
que el usuario ingrese (incluyéndolo)

Elimine el segundo elemento.

Recorra e imprima el arreglo.
Ejemplo:

    Ingresa un número> 5
    1
    3
    4
    5*/



// let arreglo=[]
// let numero = Number(prompt("Ingrese aquí un número"))

// if(numero>0){

//     for (i=1;i<=numero;i++){
//         arreglo.push(i)
//     }

// }
// else {

//     for (i=1;i>=numero;i--){
//         arreglo.push(i)
//     }
    
// }

// console.log(arreglo)


/* 10 Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]

// escribe tu código acá
El resultado debería ser el siguiente:

23
40
12
67
24
39

NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript.
 Al terminarlo cambia el arreglo original para verificar que funcione con otros números.*/

// const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 30]

// for (i=0;i<=nums.length;i++){
//     if(nums[i]>10){
//         console.log(nums[i])
//     }
// }


/* 11. Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

El resultado debería ser el siguiente:

11

NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript.
Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones
de ceros y unos. */



// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// console.log(nums)

// const numsfiltrado = []

// for (i=0;i<=nums.length;i++){
//     if (nums[i]==1){
//         numsfiltrado.push(nums[i]);
//     }
// }

// console.log(numsfiltrado.length) 