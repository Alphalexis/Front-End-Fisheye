
let slideIndex = 0;

//fonctions ouvrir et fermer la modale lightbox
function openLightboxModal() {
    const modal = document.getElementById("lightbox_modal");
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const close = document.querySelector(".fermer");
    main.setAttribute("aria-hidden", true);
    modal.setAttribute("aria-hidden",false);
    body.style.overflow = "hidden";
    modal.style.display = "block";
    main.style.display = "none";
    close.focus();

}

function closeLightboxModal() {
    const modal = document.getElementById("lightbox_modal");
    const main = document.querySelector("main");
    modal.style.display = "none";
    const body = document.querySelector("body")
    body.style.overflow = "visible";
    main.style.display = "flex";

}

//affiche la bonne slide (media dans la lightbox)
function currentSlide(indexSelected) {

    const slides = document.querySelectorAll(".lightboxitem");
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.display = "none";

    }
    if (typeof slides[indexSelected] != "undefined") {
        slides[indexSelected].style.display = "block";
    }

    slideIndex = indexSelected;
}

//rotation dans le bon ordre de la liste des medias
function switchSlide(i){
slides = document.querySelectorAll(".lightboxitem");
const lengthSlide = slides.length;

    if (slideIndex==0 && i==-1) {
        slideIndex = lengthSlide - 1;
    }
    else if (slideIndex == lengthSlide - 1 && i==1) {
        slideIndex = 0;
    }
    else {
        slideIndex = slideIndex + i;
    }

currentSlide(slideIndex);
}



const mediaSection = document.querySelector("#lightbox_modal")

mediaSection.addEventListener("keyup", function(e){

    const keyCode = e.keyCode
    if (keyCode === 39) {
        switchSlide(1)
    } else if (keyCode === 37) {
        switchSlide(-1)
    }


})

document.getElementById("lightbox_modal").focus({preventScroll:true});


