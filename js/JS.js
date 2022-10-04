alert ("Bienvenido a Hardtech\nTienda de infórmatica");

let edad = parseInt(prompt("Indique su edad para continuar"))

while(edad<18){
    alert ("No permitido el ingreso a menores de edad")
    edad = parseInt(prompt("Indique su edad para continuar"))
}

alert ("Es mayor de edad, puede continuar");

const precioMother = 23000
const precioRam = 8000
const precioVideo = 85000
const precioMicro= 45000

function calcularIva (precio){
    return precio *1.21;
}

let producto = parseInt(prompt("Indique el producto que desea comprar para conocer su precio\n1.Motherboard\n2.Memoria Ram\n3.Placa de Video\n4.Microprocesador"))
if(producto==1){
    alert ("El precio de la Motherboard es de "+ precioMother)
    let preguntaIVA = parseInt(prompt("Desea calcular el precio final con Iva \n1. Si\n2. No"))
    if(preguntaIVA==1){
        let ivaIncluidoMother = calcularIva(precioMother)
        alert ("El Precio con Iva Incluido de la Motherboard es de "+ ivaIncluidoMother+"\nGracias por consultar con Hardtech")
    }else{
        alert ("Gracias por consultar con Hardtech")
    }

}else if(producto==2){
    alert ("El precio de la Memoria Ram es de "+ precioRam)
    let preguntaIVA = parseInt(prompt("Desea calcular el precio final con Iva \n1. Si\n2. No"))
    if(preguntaIVA==1){
        let ivaIncluidoRam = calcularIva(precioRam)
        alert ("El Precio con Iva Incluido de la Ram es de "+ ivaIncluidoRam+"\nGracias por consultar con Hardtech")
    }else{
        alert ("Gracias por consultar con Hardtech")
    }

}else if(producto==3){
    alert ("El precio de la Placa de Video es de "+ precioVideo)
    let preguntaIVA = parseInt(prompt("Desea calcular el precio final con Iva \n1. Si\n2. No"))
    if(preguntaIVA==1){
        let ivaIncluidoVideo = calcularIva(precioVideo)
        alert ("El Precio con Iva Incluido de la Placa de Video es de "+ ivaIncluidoVideo+"\nGracias por consultar con Hardtech")
    }else{
        alert ("Gracias por consultar con Hardtech")
    }

}else if(producto==4){
    alert ("El precio del Microprocesador es de "+ precioMicro)
    let preguntaIVA = parseInt(prompt("Desea calcular el precio final con Iva \n1. Si\n2. No"))
    if(preguntaIVA==1){
        let ivaIncluidoMicro = calcularIva(precioMicro)
        alert ("El Precio con Iva Incluido de la Ram es de "+ ivaIncluidoMicro+"\nGracias por consultar con Hardtech")
    }else{
        alert ("Gracias por consultar con Hardtech")
    }

}else{
    alert ("Producto no encontrado")
}