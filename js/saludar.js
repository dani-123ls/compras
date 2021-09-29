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

let mensaje2 = `Hola, soy ${nombre} mi correo es ${correo}, tengo ${edad} años 
mido ${altura} metros`;

if (edad>mayor){
    mensaje2+= `, soy mayor de edad`;
}else if(edad<mayor){
    mensaje2+= `, soy menor de edad`;

}else{
    mensaje2+= `, tengo 18`;

}

document.write("<h2>"+mensaje2+"</h2>");
console.log("<h2>"+mensaje+"</h2>");