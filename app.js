// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let entradaUsuario = document.getElementById("amigo");
    let nombre = entradaUsuario.value;

    if (nombre == "") {
        alert("Debe ingresar un nombre."); 
        return;
    }

    if(amigos.includes(nombre)){
        alert(`El nombre ${nombre} ya ha sido agregado.`);
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    document.getElementById("amigo").value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indice];
    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es: ${amigoSeleccionado}</li>`;
}
