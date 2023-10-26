/** De un listado de personas determinar cuales son los productos que estan entre
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
const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
];

let lista = []

for (let i=0; i<frutas.length; i++){
    if (frutas[i].precio >=10 && frutas[i].precio <=20 ){
        lista.push(frutas[i].nombre)
    }
    };


console.log(lista)

//////////////////////////////////////////////////////////////////////////////////7

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

const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

let Hombres = [];
let Mujeres = [];


for (let i =0; i<values.length; i++){
    if(values[i].gender == "male"){
        Hombres.push(values[i].name)
    };

};

console.log(`La cantidad de hombres en values es ${Hombres.length}`)

for (let i =0; i<values.length; i++){
    if(values[i].gender == "female"){
        Mujeres.push(values[i].name)
    };

};

console.log(`La cantidad de mujeres de values es ${Mujeres.length}`)

let edadH = [];


for (let i=0; i<values.length;i++){
    if(values[i].gender == "male"){
        edadH.push(values[i].age)
    }
}

let suma=0;

for(i=0;i<edadH.length;i++){

    edadH = edadH[i]
    
    suma =suma+edadH
    
};

let promedio = suma/Hombres.length
console.log(`El promedio de edad de los hombres de values es ${promedio}`)


let edadM = [];


for (let i=0; i<values.length;i++){
    if(values[i].gender == "female"){
        edadM.push(values[i].age)
    }
}
console.log(edadM)

let sumaDos=0;

for(i=0;i<edadM.length;i++){
    
    sumaDos =sumaDos+edadM[i]
    
};
console.log(sumaDos)
let promedioDos = sumaDos/Mujeres.length

console.log(`El promedio de edad de las Mujeres de values es ${promedioDos}`)












