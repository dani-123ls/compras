//lógica para compra


// for (let i = 0; i < 5; i++) {
//     //for normal- similar a java
    
//     document.write(`vuelta ${i}`);
//     document.write("</br>");
// }

// for (let elemento in listaProductos) {
//         //for in- similar a python
//     document.write(`Dato ${elemento}`);
//     document.write("</br>");  
    
// }
// for (let elemento of listaProductos) {
//         //for of- me trae información de elementos
//     document.write(`Dato ${elemento}`);
//     document.write("</br>");  
    
// }

// inderteminados

// while (condition) {//se queda en un bucle hasta que se cumpla dicha condición
    
// }

// do {
    //     //no pregunta la primera vez-siempre ingresa en la 1 vuelta
    // } while (condition);
    
    
    //  alert(`cantidad de elementos: ${listaProductos.length}`);//me devuelve cuantos elementos tiene ese arreglo
    
    //  //alert(listaProductos[1]);//para mostar solo un valor- con su posición
    // //me lo muestra de manera diferente- me deja mirar mas detalle, para saber que información hay, existe- no existe
    // listaProductos.pop();//me elimina el último elemento de la lista
    //  listaProductos.push("Mouse");//me agrega ese nuevo elemento a mi lista
    
    // listaProductos[5]="Pantalla";//agrega cierta posición pero no es tan recomendadp hacerlo
    
    //  let cadena = listaProductos.join("");
    
    //  document.write(cadena);
    
    //  listaProductos.splice(1, 1);//elimina todo lo que haya de esa posición hacia abajo, 2 parametro cuantos quiero
    
    // console.log(listaProductos);// asi imprimo dichos elementos de la lista
    
    
    
    
let listaProductos = ["Disco Duro","teclado", "Mouse","Pantalla", "Memoria USB"];//asi los defino
let valoresProductos = [200000, 100000, 80000, 800000, 50000];

let cliente = prompt("Escriba el nombre del cliente...");
let documento = prompt(`Escriba el documento de ${cliente}...`);
// let producto = prompt("Escriba el nombre del producto");- ya no va

let menu = "";
for (let i  in listaProductos) {
    menu += `${parseInt(i)+1}. ${listaProductos[i]} ($${valoresProductos[i]})\n`;
}

let seleccion = parseInt(prompt(`${menu}\n Seleccione el producto...`));
let cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
let envio = parseInt(prompt("Seleccione el tipo de envío (1.Express/ 2.Normal .."));

let total =0;
let descuento=0;
let subtotal = valoresProductos[seleccion -1]*cantidad;
let nombresEnvio = ["Express", "Normal"];
let valoresEnvio = [20000, 10000];
let valorEnvio=0;


if(cantidad>10){
    descuento = subtotal*0.1;
}

// if(envio==1){- ya lo puedo quitar ya que voy a manejar con listas
if(subtotal>5000000) {
    if(envio==1){
        
        valorEnvio += valoresEnvio[envio];//estaría en la posición de normal
        
    } else{
        valorEnvio=0;
    }
    descuento += valoresEnvio[envio-1] - valorEnvio;//tener en cuenta, ya que todo inicia en la posición 0
}else{
    
    valorEnvio = valoresEnvio[envio-1];//proceso con listas
}
    
// }else{- igual
    // if(subtotal>5000000){
    //         valorEnvio=0;
    //      descuento += 10000;
    // }else{
    //     valorEnvio = 10000;
    // }
// }

total = valorEnvio + subtotal - descuento;

document.write(`
    <h3>Estimad@ ${cliente}, el resumén de su compra es :</h3>
    <ul>
        <li><b>Producto:</b> ${listaProductos[seleccion-1]}</li>
        <li><b>Precio:</b> $${valoresProductos[seleccion-1]}</li>
        <li><b>Cantidad:</b> ${cantidad}</li>
        <li><b>Envío:</b>${nombresEnvio[envio-1]}</li>
        <li><b>Descuento aplicado:</b> $${descuento}</li>
    </ul>
    <h3> Total valor compra: $${total}</h3>
`);
