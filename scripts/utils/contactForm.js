//fonctions ouvrir, fermer et donner les infos récoltés dans la modale de formulaire

function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
	modal.style.display = "flex";

    main.setAttribute("aria-hidden", true);
    modal.setAttribute("aria-hidden",false);
    document.querySelector("#prenom").focus();

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    modal.style.display = "none";

    main.setAttribute("aria-hidden", false);
    modal.setAttribute("aria-hidden",true);
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



    const modal = document.getElementById("contact_modal")
console.log(modal,"modal");
modal.addEventListener("keyup", function(e){
    console.log(e ,"e keyup");
    const keyCode = e.code
    if (keyCode == 'Escape') {
        closeModal();
    }
    })

