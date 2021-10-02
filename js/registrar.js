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
    
 //función- la defino
            //saludar();no importa el orden
            function saludar(nombre, edad){
                //document.write(`Hola ${nombre} desde función`);//No es tan bueno mandar a imprimir dentro de una función
                let estado;
                if (edad>=18) {
                    estado="Mayor de edad";
                }else{
                    estado="Menor de edad";
                }
                return `Hola ${nombre} desde función, ${estado}`; //para que me regrese- me devuelve algo
            } 
            //2 forma de definir una función flecha-es uan varible-la puedo pasar como parametro a otra función 
            const saludar_flecha = (nombre, edad)=>{
                let estado;
                if (edad>=18) {
                    estado="Mayor de edad";
                }else{
                    estado="Menor de edad";
                }
                return `Hola ${nombre} desde función, ${estado}`;
            };
            const saludar_abreviado = (nombre)=> `Hola ${nombre} desde función, ${estado}`;//por defecto tiene el return pero necesita estar en una sola línea

            let mensaje = saludar_abreviado("juan", 25);
            //saludar("Juan");//la llamo- no importa sino le paso el parametro
            // let mensaje = saludar("Juan", 25);//para guardar ese retorno
            document.write(mensaje);
            //tener cuidado eso sí
 /*   
let listaProductos = ["Disco Duro","teclado", "Mouse","Pantalla", "Memoria USB"];//asi los defino
let valoresProductos = [200000, 100000, 80000, 800000, 50000];

//diccionarios
let producto1 = {"nombre": "Disco Duro", "precio": 200000};//lo mismo a java o python clave-valor
let producto2 = {"nombre": "Teclado", "precio": 100000};//lo mismo a java o python clave-valor
let producto3 = {"nombre": "Mouse", "precio": 80000};//lo mismo a java o python clave-valor
let producto4 = {"nombre": "Pantalla", "precio": 8000000};//lo mismo a java o python clave-valor
let producto5 = {"nombre": "Memoria USB", "precio": 50000};//lo mismo a java o python clave-valor

listaProductos = [producto1, producto2, producto3, producto4, producto5];

// producto1.nombre = "SSD";//asi lo puedo modificar
// alert(`${producto1.nombre} - $${producto1.precio}`);//asi lo puedo acceder

let continuar;

let menu = "";

    for (let i  in listaProductos) {
    let  producto = listaProductos[i];
        // menu += `${parseInt(i)+1}. ${listaProductos[i]} ($${valoresProductos[i]})\n`;
        menu += `${parseInt(i)+1}. ${producto.nombre} ($${producto.precio})\n`;
    }

let nombresEnvio = ["Express", "Normal"];
let valoresEnvio = [20000, 10000];
let listadoCompras=[];

do {
    let compra={};//diccionario vacío
    //empiezo a llenar el diccionario

    compra.cliente = prompt("Escriba el nombre del cliente...");
    compra.documento = prompt(`Escriba el documento de ${compra.cliente}`);
    
    let seleccion = parseInt(prompt(`${menu}\n Seleccione el producto...`));

    compra.producto = listaProductos[seleccion-1];
    
    compra.cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
    compra.envio = parseInt(prompt("Seleccione el tipo de envío (1.Express/ 2.Normal .."));
    
    compra.total =0;
    compra.descuento=0;

    let subtotal = compra.producto.precio*compra.cantidad;
    let valorEnvio=0;
    
    
    if(compra.cantidad>10){
        compra.descuento = subtotal*0.1;
    }
    
    if(subtotal>5000000) {
        if(compra.envio==1){
            
            valorEnvio += valoresEnvio[compra.envio];//estaría en la posición de normal
            
        } else{
            valorEnvio=0;
        }
        compra.descuento += valoresEnvio[compra.envio-1] - valorEnvio;//tener en cuenta, ya que todo inicia en la posición 0
    }else{
        
        valorEnvio = valoresEnvio[compra.envio-1];//proceso con listas
    }
        
    compra.total = valorEnvio + subtotal - compra.descuento;
    listadoCompras.push(compra);//lista para guardar cada compra para que no se me borre

    // console.log(listadoCompras);
    continuar = confirm("Ingresar otra compra?");

} while (continuar);
//coloco lo que no se repite de la tabla
let xhtml = `<table>
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>ENVÍO</th>
                        <th>DESCUENTO</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                    <tbody>`

for (let compra of listadoCompras) {//la información de compra de cada diccionario se va a guardar ahí
 //aquí si, los datos que van a ser repetidos   
    xhtml+= ` <tr>
                <td>${compra.cliente} (${compra.documento})</td>
                <td>${compra.producto.nombre} - $${compra.producto.precio}</td>
                <td>${compra.cantidad}</td>
                <td>${nombresEnvio[compra.envio-1]}</td>
                <td>$${compra.descuento}</td>
                <td>$${compra.total}</td>
            </tr>`
//Agrego cuantas filas quiera
}
//finalizo la tabla, cierro
xhtml += ` </tbody>
            </table>`;

document.write(xhtml);
            
/*
let cliente = prompt("Escriba el nombre del cliente...");
let documento = prompt(`Escriba el documento de ${cliente}...`);
// let producto = prompt("Escriba el nombre del producto");- ya no va
// do {
    
    let menu = "";

    for (let i  in listaProductos) {
    let  producto = listaProductos[i];
        // menu += `${parseInt(i)+1}. ${listaProductos[i]} ($${valoresProductos[i]})\n`;
        menu += `${parseInt(i)+1}. ${producto.nombre} ($${producto.precio})\n`;
    }
    
    let seleccion = parseInt(prompt(`${menu}\n Seleccione el producto...`));
    let cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
    let envio = parseInt(prompt("Seleccione el tipo de envío (1.Express/ 2.Normal .."));
    let opcion = parseInt(prompt("Deseas agregar otro producto a tu compra (1.si/ 2.No ..."));

// } while (opcion==2);
    
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
*/
