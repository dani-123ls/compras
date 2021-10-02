//lógica para compra

 let listaProductos = ["Disco Duro","teclado"];//asi los defino

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

let cliente = prompt("Escriba el nombre del cliente...");
let documento = prompt(`Escriba el documento de ${cliente}...`);
let producto = prompt("Escriba el nombre del producto");
let precio = parseFloat(prompt(`Escriba el precio de ${producto}...`));
let cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
let envio = parseInt(prompt("Seleccione el tipo de envío (1.Express/ 2.Normal .."));

let total =0;
let descuento=0;

let subtotal = precio*cantidad;
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
        <li><b>Producto:</b> ${producto}</li>
        <li><b>Precio:</b> $${precio}</li>
        <li><b>Cantidad:</b> ${cantidad}</li>
        <li><b>Envío:</b>${nombresEnvio[envio-1]}</li>
        <li><b>Descuento aplicado:</b> $${descuento}</li>
    </ul>
    <h3> Total valor compra: $${total}</h3>
`);
