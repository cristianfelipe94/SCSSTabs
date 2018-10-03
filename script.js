// declarando modal
let modal = document.getElementById('modalSeccion');

// declarando botón para abrir modal
let abrir = document.getElementById("mainBtn");

//elemento button que cierra el modal 
let button = document.getElementById("closeBtn");

// función de botón para abrir modal
abrir.onclick = function() {
    modal.style.display = "block";
}

// función de cerrar botón
button.onclick = function() {
    modal.style.display = "none";
}
