alert ("Bienvenido a Hardtech\nTienda de infórmatica");

let edad = parseInt(prompt("Indique su edad para continuar"))

while(edad<18){
    alert ("No permitido el ingreso a menores de edad")
    edad = parseInt(prompt("Indique su edad para continuar"))
}

alert ("Es mayor de edad, puede continuar");


const precioMotherAsus = 23000
const precioMotherEVGA = 20000
const precioFuenteAsus = 15000
const precioFuenteEVGA = 12000


class Producto {
    constructor (producto, marca, precio){
        this.producto = producto.toUpperCase();
        this.marca    = marca.toUpperCase();
        this.precio   = precio;
    }
    sumarIva() {
        this.precio = this.precio *1.21;
    }
}

const productos = [];
productos.push(new Producto (prompt("Escribe el nombre de tu producto \n.MOTHER\n.FUENTE"),prompt("Escribe la marca de tu producto \n.ASUS\n.EVGA")));
alert("Producto Ingresado " + productos[0].producto +" "+ productos[0].marca);

if(productos[0].producto=="MOTHER" & productos[0].marca=="ASUS"){
    productos[0].precio=precioMotherAsus; alert("El Precio de la Mother Asus sin IVA es de " + precioMotherAsus);
}else if(productos[0].producto=="MOTHER" & productos[0].marca=="EVGA"){
    productos[0].precio=precioMotherEVGA; alert("El Precio de la Mother EVGA sin IVA es de " + precioMotherEVGA);
}else if(productos[0].producto=="FUENTE" & productos[0].marca=="ASUS"){
    productos[0].precio=precioFuenteAsus; alert("El Precio de la Fuente Asus sin IVA es de " + precioFuenteAsus);
}else if(productos[0].producto=="FUENTE" & productos[0].marca=="EVGA"){
    productos[0].precio=precioFuenteEVGA; alert("El Precio de la Fuente EVGA sin IVA es de " + precioFuenteEVGA);
}

productos.push(new Producto (prompt("Escribe el nombre de tu producto \n.MOTHER\n.FUENTE"),prompt("Escribe la marca de tu producto \n.ASUS\n.EVGA")));
alert("Producto Ingresado " + productos[1].producto +" "+ productos[1].marca);

if(productos[1].producto=="MOTHER" & productos[1].marca=="ASUS"){
    productos[1].precio=precioMotherAsus; alert("El Precio de la Mother Asus sin IVA es de " + precioMotherAsus);
}else if(productos[1].producto=="MOTHER" & productos[1].marca=="EVGA"){
    productos[1].precio=precioMotherEVGA; alert("El Precio de la Mother EVGA sin IVA es de " + precioMotherEVGA);
}else if(productos[1].producto=="FUENTE" & productos[1].marca=="ASUS"){
    productos[1].precio=precioFuenteAsus; alert("El Precio de la Fuente Asus sin IVA es de " + precioFuenteAsus);
}else if(productos[1].producto=="FUENTE" & productos[1].marca=="EVGA"){
    productos[1].precio=precioFuenteEVGA; alert("El Precio de la Fuente EVGA sin IVA es de " + precioFuenteEVGA);
}


//recorrer ARRAY con for
for (const elementosArray of productos)
    elementosArray.sumarIva();

console.log(productos)

let total = productos[0].precio + productos[1].precio

alert("El total a pagar con Iva incluido es de $" + total);

alert ("Gracias por consultar con Hardtech");

