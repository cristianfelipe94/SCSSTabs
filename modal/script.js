// Get the modal from the DOM.
let modal = document.getElementById('modalSeccion');

// Get the Opening Btn from the DOM.
let abrir = document.getElementById("mainBtn");

// Get the Closing Btn from the DOM.
let button = document.getElementById("closeBtn");

// Function to display the Modal.
abrir.onclick = function() {
    modal.style.display = "block";
}

// Function to close the Modal.
button.onclick = function() {
    modal.style.display = "none";
} 
