let slideIndex = 0;


function openLightboxModal() {
    const modal = document.getElementById("lightbox_modal");
    modal.focus();
    modal.style.display = "block";
    modal.style.zIndex = 1;


}

function closeLightboxModal() {
    const modal = document.getElementById("lightbox_modal");
    modal.style.display = "none";

}


function currentSlide(indexSelected) {
    console.log("currentSlide", indexSelected);
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

function switchSlide(i){
slides = document.querySelectorAll(".lightboxitem");
const lengthSlide = slides.length;
console.log("slides.length",slides.length)
console.log("slideIndex before",slideIndex)
    if (slideIndex==0 && i==-1) {
        slideIndex = lengthSlide - 1;
    }
    else if (slideIndex == lengthSlide - 1 && i==1) {
        slideIndex = 0;
    }
    else {
        slideIndex = slideIndex + i;
    }
console.log("slideIndex after",slideIndex)
currentSlide(slideIndex);
}

const mediaSection = document.querySelector("#lightbox_modal")
console.log("mediaSection", mediaSection);
mediaSection.addEventListener("keyup", function(e){
    console.log("e", e);
    const keyCode = e.keyCode
    if (keyCode === 39) {
        switchSlide(1)
    } else if (keyCode === 37) {
        switchSlide(-1)
    }

    console.log("keyCode", keyCode)
})



