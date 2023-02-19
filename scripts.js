
function imprimir(){
    window.print();
}

function ocultarMostrar(){
    var contacto = document.querySelector('#InfoContacto');
    var button = document.querySelector('#botonOcultar');
    if (contacto.style.display === "" || contacto.style.display === "none") {
        contacto.style.display = "initial";
        button.setAttribute("value","Ocultar Datos de Contacto")
    }
    else{
        contacto.style.display = "none";
        button.setAttribute("value","Mostrar Datos de Contacto")
    }
}

