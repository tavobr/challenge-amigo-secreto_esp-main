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

