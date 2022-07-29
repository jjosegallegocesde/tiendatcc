import{pintarResumenCompra} from './controladorPintarResumen.js'

//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//comparo o pregunto si el carrito esta vacio
if(carrito==null){
    pintarResumenCompra('../../assets/img/vacio.jpg','Carrito vacio',true,false,null,false,null)
}else{ //el carrito esta lleno

    //recorro el carrito de compras
    carrito.forEach(function(producto){
        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad)
    })

}

//RUTINA PARA LIMPIAR EL RESUMEN DE LA COMPRA
let botonLimpiar=document.getElementById("botonLimpiar")
botonLimpiar.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    pintarResumenCompra('../../assets/img/vacio.jpg','Carrito vacio',true,false,null,false,null)

})
