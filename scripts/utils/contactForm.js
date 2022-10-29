//fonctions ouvrir, fermer et donner les infos récoltés dans la modale de formulaire

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let surname;
let named;
let email;
let message;

document.querySelector(".send_button").onclick = function(){
    surname = document.getElementById("prenom").value;
    console.log(surname);
    named = document.getElementById("nom").value;
    console.log(named);
    email = document.getElementById("email").value;
    console.log(email);
    message = document.getElementById("votreMessage").value;
    console.log(message);
}
