
//2 forma de moverme en el DOM
let radios = document.getElementsByName("envio");//me devuelve una lista de nodos
//
let titulo2 = document.querySelector("h2");//muestra el primer elemento que él encuentra

let titulos = document.querySelectorAll("h2");//Muestra todos los que encuentre

//let valor = titulo2.getAttribute("valor");//puedo atrapar ese dato programaticamente

//titulo2.setAttribute("atributo", 123)// nos permite definir un atributo de forma programatica

// titulo2.classList.add("titulo");//me permite añadir clases
// alert(valor);

// titulo2.setAttribute("style", "display:none");//modifica su estilo

titulo2.style.background="green";//me permite modficar tamaño, color, etc-poderoso

let producto1 = {"nombre": "Disco Duro", "precio": 200000};//lo mismo a java o python clave-valor
let producto2 = {"nombre": "Teclado", "precio": 100000};//lo mismo a java o python clave-valor
let producto3 = {"nombre": "Mouse", "precio": 80000};//lo mismo a java o python clave-valor
let producto4 = {"nombre": "Pantalla", "precio": 8000000};//lo mismo a java o python clave-valor
let producto5 = {"nombre": "Memoria USB", "precio": 50000};//lo mismo a java o python clave-valor

let listaProductos = [producto1, producto2, producto3, producto4, producto5];

let nombresEnvio = ["Express","Normal"];
let valoresEnvio = [20000, 10000];

const cargarProductos = ()=>{

    let select = document.getElementById("productos");
    select.innerHTML=`<option value="-1">Seleccione el producto</option>`;//accedo a la información que él tiene

    for (let index = 0; index < listaProductos.length; index++) {
        const producto = listaProductos[index];
        select.innerHTML += `<option value="${index}">
        ${producto.nombre} - $${producto.precio} </option>`
    }

};

cargarProductos();

const agregarCompra = (compra)=>{
    //identifico donde voy a poner la información
    let tabla = document.getElementById("datos_compras");

    tabla.innerHTML += `<tr>
    <td>${compra.cliente} (${compra.documento})</td>
    <td>${compra.producto.nombre} - $${compra.producto.precio}</td>
    <td>${compra.cantidad}</td>
    <td>${nombresEnvio[compra.envio-1]}</td>
    <td>$${compra.descuento}</td>
    <td>$${compra.total}</td>
    </tr>`;



};

const procesarInformacion = ()=>{//FUNCIÓN FLECHA
    
    let formulario = document.getElementById("form_compra");//trayendo todo el elemento de código
    let compra = {};

    compra.cliente = formulario.cliente.value;//ahí saco ese input atraves del name y el value, atrapando el cliente
    compra.documento = formulario.documento.value;
    let seleccion = formulario.producto.value;

    compra.producto = listaProductos[seleccion];
    compra.cantidad = formulario.cantidad.value;
    compra.envio = formulario.envio.value;

    compra.total =0;
    compra.descuento=0;

    let subtotal = compra.producto.precio *compra.cantidad;
    let valorEnvio=0;
    
    
    if(compra.cantidad>10){
        compra.descuento = subtotal*0.1;
    }
    
    if(subtotal>5000000) {
        if(compra.envio==0){
            
            valorEnvio += valoresEnvio[1];//estaría en la posición de normal
            
        } else{
            valorEnvio=0;
        }
        compra.descuento += valoresEnvio[compra.envio] - valorEnvio;//tener en cuenta, ya que todo inicia en la posición 0
    }else{
        
        valorEnvio = valoresEnvio[compra.envio];//proceso con listas
    }
        
    compra.total = valorEnvio + subtotal - compra.descuento;
    
    formulario.reset();//me limpia todos los valores

    agregarCompra(compra);//llamo esa función y aquí se lo estoy pasando al botón agregar, para que me agregue cada vez que le de click
}
