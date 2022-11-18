let carrito = [];
let contenedor = document.getElementById("misproductos")
let btnFin = document.getElementById("finalizarcompra");


function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
        <div class="card" style="width: 14rem;">
            <img class="card-img-top" src=${producto.foto} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.id}</h5>
                <p class="card-text">${producto.nombre}</p>
                <button id='btn${producto.id}' class="btn btn-primary">Comprar</button>
            </div>
        </div>       
        `;
    }
}

renderizarProductos();

    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
            agregarAlCarrito(producto);
        });
    });
    
    
function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;
    
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0)
    document.getElementById("total").innerText="Total a Pagar $ " +totalCarrito;
;

}

let tablita = document.getElementById("tablita");
let boton = document.getElementById("colortabla");
let aspectoTabla = localStorage.getItem("aspectoTabla");

if(aspectoTabla != null){
    if(aspectoTabla == "table-danger"){
        //
    }else{
        tablita.className = "table "+aspectoTabla;
    }
}else{
    aspectoTabla = "table-danger";
}

boton.onclick = () => {
    if (aspectoTabla == "table-danger"){
        tablita.classList.remove("table-danger");
        tablita.classList.add("table-info");
        aspectoTabla = "table-info";
    }else{
        tablita.classList.remove("table-info");
        tablita.classList.add("table-danger");
        aspectoTabla = "table-danger";

    }
    localStorage.setItem("aspectoTabla", aspectoTabla);

}

btnFin.onclick = () => {
    carrito=[];
    document.getElementById("tablabody").innerHTML="";
    document.getElementById("total").innerText="Total a Pagar $ ";
    Swal.fire(
        'Compra Finalizada',
        'Gracias',
        'success'
      )
}