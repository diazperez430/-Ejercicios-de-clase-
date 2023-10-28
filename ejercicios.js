/** 1.  De un listado de personas determinar cuales son los productos que estan entre
 10 y 20 dolares */

// const frutas = [
//     { nombre: 'Mangostino', precio: 34 },       
//     { nombre: 'Mora', precio: 17 },      
//     { nombre: 'Banano', precio: 11 },        
//     { nombre: 'Papaya', precio: 13 },      
//     { nombre: 'Lulo', precio: 8 }      
// ] 
// Porfa chicos... intenten las dos versiones, usando filter y sin usarlo.


//////////////////////////////////////////////////////////////////////////////////
// const frutas = [
//     { nombre: 'Mangostino', precio: 34 },       
//     { nombre: 'Mora', precio: 17 },      
//     { nombre: 'Banano', precio: 11 },        
//     { nombre: 'Papaya', precio: 13 },      
//     { nombre: 'Lulo', precio: 8 }      
// ];

// let lista = []

// for (let i=0; i<frutas.length; i++){
//     if (frutas[i].precio >=10 && frutas[i].precio <=20 ){
//         lista.push(frutas[i].nombre)
//     }
//     };


// console.log(lista)

//////////////////////////////////////////////////////////////////////////////////7
//2. 
// const values = [
//     { name: 'Juan', age: 45, gender: 'male' },
//     { name: 'Sofia', age: 13, gender: 'female' },
//     { name: 'Sofia', age: 67, gender: 'female' },
//     { name: 'Carlos', age: 32, gender: 'female'},
//     { name: 'Ana Maria', age: 27, gender: 'female' },
//     { name: 'Luisa', age: 5, gender: 'female' },
//     { name: 'Elisa', age: 17, gender: 'female' }
// ];

// A partir de la lista anterior determinar:
// Cantidad de hombres y mujeres.
// Promedio de edades de hombres y mujeres.
// Cuántas personas se llaman igual.

///////////////////////////////////////////////////////////////////////////////////

// const values = [
//     { name: 'Juan', age: 45, gender: 'male' },
//     { name: 'Sofia', age: 13, gender: 'female' },
//     { name: 'Sofia', age: 67, gender: 'female' },
//     { name: 'Carlos', age: 32, gender: 'female'},
//     { name: 'Ana Maria', age: 27, gender: 'female' },
//     { name: 'Luisa', age: 5, gender: 'female' },
//     { name: 'Elisa', age: 17, gender: 'female' }
// ];



// let Hombres = [];
// let Mujeres = [];


// for (let i =0; i<values.length; i++){
//     if(values[i].gender == "male"){
//         Hombres.push(values[i].name)
//     };

// };

// console.log(`La cantidad de hombres en values es ${Hombres.length}`)

// for (let i =0; i<values.length; i++){
//     if(values[i].gender == "female"){
//         Mujeres.push(values[i].name)
//     };

// };

// console.log(`La cantidad de mujeres de values es ${Mujeres.length}`)



// let edadH = [];


// for (let i=0; i<values.length;i++){
//     if(values[i].gender == "male"){
//         edadH.push(values[i].age)
//     }
// }

// let suma=0;

// for(i=0;i<edadH.length;i++){

//     edadH = edadH[i]
    
//     suma =suma+edadH
    
// };

// let promedio = suma/Hombres.length
// console.log(`El promedio de edad de los hombres de values es ${promedio}`)



// let edadM = [];


// for (let i=0; i<values.length;i++){
//     if(values[i].gender == "female"){
//         edadM.push(values[i].age)
//     }
// }


// let sumaDos=0;

// for(i=0;i<edadM.length;i++){
    
//     sumaDos =sumaDos+edadM[i]
    
// };

// let promedioDos = sumaDos/Mujeres.length

// console.log(`El promedio de edad de las Mujeres de values es ${promedioDos}`)




// let List = [];
// let repetidos = []

// for(let i = 0; i < values.length; i++){

//     List.push(values[i].name)

// }

// for(i=0; i < List.length; i++){

//     if(List[i+1]===List[i]){
//         repetidos.push(List[i])
//     }

// }

// console.log(`Hay ${repetidos.length} nombres repetidos`)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Calcular Entero a partir de un Binario de 4 dígitos.


// let ingreseNumb = prompt("Enter here the binary number")

// Number(ingreseNumb)

// let numeros = []
// numeros.push(ingreseNumb)

// numeros.forEach(numero =>console.log(parseInt(numero,2)))


//////////////////////////////////////////////////////////////////////////////

// Dada una matriz de unos y ceros, convierta el valor binario equivalente a 
// un número entero.

// Ejemplos:

// Entrada: [0, 0, 0, 1]
// Salida :  1

// Entrada: [0, 0, 1, 0]
// Salida :  2

// Entrada: [0, 1, 0, 1]
// Salida :  5

// Entrada: [1, 0, 0, 1]
// Salida :  9

// Entrada: [0, 0, 1, 0]
// Salida :  2

// Entrada: [0, 1, 1, 0]
// Salida :  6

// Entrada: [1, 1, 1, 1]
// Salida :  15

// Entrada: [1, 0, 1, 1]
// Salida :  11.

////////////////////////////////////////////////////////////////////////////

// function conversion (arrayName){

//     let numero = arrayName.join('')

//     return console.log (parseInt(numero,2))

// };


// Entrada1= [0, 0, 0, 1]
// let salida1 = conversion(Entrada1)



// Entrada2= [0, 0, 1, 0]
// let salida2 = conversion(Entrada2)


// Entrada3= [0, 1, 0, 1]
// let salida3 = conversion(Entrada3)


// Entrada4= [1, 0, 0, 1]
// let salida4 = conversion(Entrada4)


// Entrada5= [0, 0, 1, 0]
// let salida5 = conversion(Entrada5)


// Entrada6= [0, 1, 1, 0]
// let salida6 = conversion(Entrada6)


// Entrada7= [1, 1, 1, 1]
// let salida7 = conversion(Entrada7)

// Entrada8= [1, 0, 1, 1]
// let salida8 = conversion(Entrada8)


///////////////////////////////////////////////////////////////////////////////////

/* 4. ¿Va a sobrevivir?

Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho 
que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita
2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

Responda a la pregunta y devuelva true si es así, de lo contrario false */

/////////////////////////////////////////////////////////////////////////////////////

// alert("Hi hero, I know you want to rescue the princess, and to do so you need to kill those fucking dragons, I was told you only have one gun and some bullets, but first let´s evaluate if you can survive the mission.");




// dragones = prompt("How many dragons do you see?")


// if(isNaN(dragones)==true || dragones ===''){

//     do{
//         alert("Enter a valid number with caracters from 0 to 9 ")
//         dragones = prompt("How many dragons do you see?")
//     }
//     while(isNaN(dragones)==true || dragones ==='')

// }

// else if (isNaN(dragones)==false){

//     dragones= Number(dragones)


// };



// heroeSabe = prompt("Enter true if you know how many bullets you have, otherwise false.")

// let sabe = heroeSabe.toLowerCase();

// if (sabe=="true"){
//     sabe = Boolean(1)
// }
// else if (sabe=="false"){
//     sabe = Boolean(0)
// };


// if(sabe !== true && sabe !== false){

//     do{
//         alert("Please type in true or false correctly")

//         sabe = prompt("Enter true if you know how many bullets you have, otherwise false.");
//         sabe = sabe.toLowerCase();

//     }
//     while(sabe !== "true" && sabe !== "false"); 
// };

// if (sabe=="true"){
//     sabe = Boolean(1)
// }
// else if (sabe=="false"){
//     sabe = Boolean(0)
// };


// if (sabe==true){

//     totalBalas = prompt("Enter the amount of bullets as a number with caracters from 0 to 9")
    
//     if(isNaN(totalBalas)==true || totalBalas ===''){
    
//         do{
//             alert("Enter a valid number with caracters from 0 to 9 ")
//             totalBalas = prompt("Enter the amount of bullets as a number with caracters from 0 to 9")
//         }
//         while(isNaN(totalBalas)==true || totalBalas  ==='')
    
//     }

//     else  if (isNaN(totalBalas)==false){

//         totalBalas= Number(totalBalas);
    
    
//     }


// }

// else if (sabe == false){

//     alert("Not a problem, I´ll count them remotely, clik ok to know")
//     totalBalas=Math.floor(Math.random()*10)
//     alert(`You currently have ${totalBalas} available`)

// };



// let balasNecesarias = dragones*2




// if (sabe==true && totalBalas >= balasNecesarias){
//     alert("Go hero, do what you know to do, you´ll survive")
// }

// else if (sabe==false && totalBalas >= balasNecesarias ){
//     alert("Go hero, do what you know to do, you´ll survive")
// }
// else {
//     alert(`You won´t survive the mission, we were recently informed a dragon can be killed with at least 2 bullets, you have ${totalBalas} bullets and there are ${dragones} dragons please return to the base`)
// }


//////////////////////////////////////////////////////////////////////////////////

// 5. A partir de la siguiente lista

// let products = [
//     { nombre: "Pan", precio: 3, cantidad: 20 },
//     { nombre: "Tomate", precio: 8, cantidad: 7 },
//     { nombre: "Leche", precio: 0, cantidad: 4 },
//     { nombre: "Huevos", precio: 9, cantidad: 0 },
//     { nombre: "Arroz", precio: 5, cantidad: 5 },
//     { nombre: "Cebolla", precio: 0, cantidad: 10 },
//     { nombre: "Naranjas", precio: 12, cantidad: 10 },
// ];

// // Obtener una lista con los nombres de los productos mas baratos, en el entendido 
// que se considera barato un producto que no supera los 5 dólares.
// // Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad
//  disponible es mayor a cero
// // Calcular el costo total del inventario.

///////////////////////////////////////////////////////////////////////////////////


// let products = [
//     { nombre: "Pan", precio: 3, cantidad: 20 },
//     { nombre: "Tomate", precio: 8, cantidad: 7 },
//     { nombre: "Leche", precio: 0, cantidad: 4 },
//     { nombre: "Huevos", precio: 9, cantidad: 0 },
//     { nombre: "Arroz", precio: 5, cantidad: 5 },
//     { nombre: "Cebolla", precio: 0, cantidad: 10 },
//     { nombre: "Naranjas", precio: 12, cantidad: 10 },
// ];

// let productosBaratos = [];

// for (let i =0; i<products.length; i++){

//     if(products[i].precio <=5){
//         productosBaratos.push(products[i].nombre)
//     }
    
// }

// console.log(`Estos son los productos baratos: ${productosBaratos}`)




// let productosNoGratis = [];

// for (let i =0; i<products.length; i++){

//     if(products[i].precio >0 && products[i].cantidad>0){
//         productosNoGratis.push(products[i].precio)
//     }
    
// }

// let suma=0;

// for(i=0;i<productosNoGratis.length;i++){

//     a = productosNoGratis[i]
    
//     suma =suma+a
    
// };

// console.log(`El costo promedio de los productos cuyo
// precio o cantidad son mayores a 0 es ${suma/productosNoGratis.length}`)




// let costoTotal = [];

// for (let i =0; i<products.length; i++){
//         costoTotal.push(products[i].precio)
// }

// let total = 0

// for(i=0;i<costoTotal.length;i++){

//         a = costoTotal[i]
        
//         total =total+a
        
//     };

// console.log(`El costo total del inventario es $ ${total}`)

///////////////////////////////////////////////////////////////////////////////////////////

/* 6. Amplia la funcionalidad de la función suma()

La siguiente función es capaz de sumar dos números. ¿qué cambios deben hacerse a la misma para
 que sea capaz de sumar 2 o más números?

function suma( numero1, numero2 ) {
    return numero1 + numero2;
}

suma( 3, 6 );  */

/////////////////////////////////////////////////////////////////////////////////////////////

// function suma(...numero){
//     let total = 0;
//     for (const i of numero){
//         total = total +i
//     }

//     return total;
// }

// salida = suma(100, 90, 1020, 2,3,4,5,7,8,9,0,1,2,3,4)
// console.log(salida)

//////////////////////////////////////////////////////////////////////////////////////////////

/* 7. Calcular precio sin IVA

Escribe una función que calcule el precio original del producto, sin IVA. Si el precio de un 
producto es 200,00 y el IVA es del 15%, entonces el precio final del producto (con IVA) 
es: 200,00 + 15% = 230,00. Por lo tanto, si su función recibe 230,00 como entrada, debería 
devolver 200,00

Restricciones:
El IVA es siempre del 15%.
Redondea el resultado a 2 decimales.
Si se proporciona un valor nulo, devuelve -1 */

/////////////////////////////////////////////////////////////////////////////////////////////


// function sinIva (valor){

//     if(valor==null){
//         valor = -1
//         return valor
//     }
//     else{
//         return valor - (valor*15/100)
//     }
// }
 
// let salida = sinIva(230)
// console.log(salida.toFixed(2))

///////////////////////////////////////////////////////////////////////////////////////////7

/*// 8. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que 
determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular
el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30 */


////////////////////////////////////////////////////////////////////////////////////////////7

// function imc (peso, altura){
//     let imc = peso/(altura*altura)
//     console.log(imc)

//     if (imc < 18){
//         return console.log("Bajo de peso")
//     }
//     else if ( imc >= 18.5 && imc <= 24.9){
//         return console.log("Normal")
//     }
//     else if (imc >= 25 && imc<= 29.9){
//         return console.log("Normal")
//     }
//     else if ( imc >= 30){
//         return console.log("Obseo")
//     }
// }

// a = imc(200, 1.85)

// console.log(a)
