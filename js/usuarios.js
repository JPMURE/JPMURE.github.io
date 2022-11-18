class Usuario{
    constructor(email, nombre, apellido, edad, pwd){
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pwd = pwd;
    }
}

const usuarios = [];


function nuevoUsuario(email, nombre, apellido, edad, pwd){      
    
    let usuario = new Usuario(email, nombre, apellido, edad, pwd);

    usuarios.push(usuario);
    
    const bienvenida = document.createElement("h2");
    bienvenida.innerHTML=`Bienvenido, ${nombre +" "+ apellido}`;
    document.getElementById("hola").appendChild(bienvenida);
    }

console.log(usuarios)

const formulario = document.getElementById("form");

formulario.addEventListener("submit", (event)=> {
    event.preventDefault()
    const email = document.getElementById("email").value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const edad = document.getElementById("edad").value
    const pwd = document.getElementById("pwd").value
    nuevoUsuario(email, nombre, apellido, edad, pwd) 
});

const btn = document.getElementById("enviar");
btn.addEventListener("click", ()=>{
    Swal.fire(
        {
            title:'USUARIO',
            text:'Creado con exito',
            icon:'success',
        }
    )
})

let usuariosJson = JSON.stringify(usuarios);

localStorage.setItem("usuarioReciente", usuariosJson);