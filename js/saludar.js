//asi se comenta o con /* para bloques */
//ya es codigo javascript
// alert("Hola mundo segunda forma")

console.log("Hola mundo desde consola");

document.write("<h1>hola mundo desde javascript</h1>");

// String, number, Boolean -tipo de datos
// if (condition) {
//     let variable;//el alcance solo va a dentro de los corchetes
// }

var nombre = "juan";//string-comilla doble o sencilla
let correo = "juan@correo.com";//mas recomendado utilizarlo
const mayor = 18;//una variable constante que no puedo modificar una vez definida edad = 29;
let edad = 29;
let altura = 1.81;
let extranjero = false;

 let mensaje = "Hola,</br> soy "+nombre+
 " mi correo es "+correo+" tengo, "+edad+ " años";

 //utilizo una función- similar a input en python- para recibir datos del usuario
nombre= prompt("Escriba su nombre....");
correo= prompt("Escriba su correo...");//los datos los toma todos como string 
edad= parseInt(prompt("Escriba su edad..."));//me convierte de string a entero
altura= parseFloat(prompt("Escriba su altura (metros)... "));


let mensaje2 = `Hola, soy ${nombre} mi correo es ${correo}, tengo ${edad} años 
mido ${altura} metros`;

let variable="variable con let";
if (edad>mayor){

    mensaje2 += `, soy mayor de edad`;
    }else if(edad<mayor){
        mensaje2+= `, soy menor de edad`;

    }else{
        mensaje2+= `, tengo 18`;

}

// alert(variable);

document.write("<h2>"+mensaje2+"</h2>");
console.log("<h2>"+mensaje+"</h2>");