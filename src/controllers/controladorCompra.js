console.log("hola estamos comprando")
console.log(JSON.parse(localStorage.getItem('infoProducto')))
let producto=JSON.parse(localStorage.getItem('infoProducto'))

let carrito
//REVISAR VERIFICAR SI HAY PRODUCTOS EN EL CARRITO
if(JSON.parse(localStorage.getItem("carrito"))==null){

    //CREAMOS EL CARRITO DE COMPRAS
    carrito=[]

}else{
    carrito=JSON.parse(localStorage.getItem("carrito"))

}
console.log(JSON.parse(localStorage.getItem("carrito")))

//pintamos la foto desde el objeto del lcoalstorage
let foto=document.getElementById("foto")
foto.src=producto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion

//capturar la cantidad del producto seleccionado
//capturamos el value del input


//agrego un nuevo atributo(cantidad) al objeto producto
let botonAgregar = document.getElementById("agregar")


//se agrega producto al carrito
botonAgregar.addEventListener("click", function(evento){

    let alerta=document.getElementById("alerta")
    alerta.classList.remove("invisible")

    setTimeout(function(){
        alerta.classList.add("invisible")
    },3000)

    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
    
    //agregando un nuevo elemento a un arreglo
    //agregando un producto al carrito de compras
    carrito.push(producto)

    //almaceno el carrito en el localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito))

    

})






