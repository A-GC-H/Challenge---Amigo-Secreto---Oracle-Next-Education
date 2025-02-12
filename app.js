// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
alert('Instrucciones: Deberá agregar un nombre y dar click en "Añadir". Los nombres se mostrarán en una lista, al finalizar, dar click en "Sortear Amigo", para mostrar el resultado en pantalla.')
agregarAmigo ();


function obtenerTextoElemento (elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo() {
    nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo === '') {
        alert ('No se ha ingresado ningún nombre para agregar a la lista de amigos, por favor inserte un nombre')
        return;
        } else {
        alert (`El nombre ${nombreDeAmigo} ha sido ingresado correctamente`)
        listaDeAmigos.push(nombreDeAmigo);
        limpiarCajaNombre();
        listaAmigosHTML ();
        return;
    }
}


function limpiarCajaNombre () {
    document.getElementById('amigo').value = '';
}


function listaAmigosHTML () {
    let lista1 = document.getElementById('listaAmigos');
    lista1.innerHTML = '';
    for (i = 0; i < listaDeAmigos.length; i++) {
        lista1.innerHTML += `${i+1}. ${listaDeAmigos[i]}<li>`;
    }
}


function sortearAmigo () {
    if (listaDeAmigos === '') {
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        let nombreIndice = listaDeAmigos[indiceAleatorio];
        obtenerTextoElemento ('resultado', `El nombre del amigo sorteado es: ${nombreIndice}`);
    }
}
