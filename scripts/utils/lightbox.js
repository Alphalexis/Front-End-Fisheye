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
console("mediaSection", mediaSection);
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


/*$(document).keydown(function(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which
  
    if (keyCode === 39) {
        switchSlide(1)
    } else if (keyCode === 37) {
        switchSlide(-1)
    }
 })*/

/*
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel-container").forEach((carousel) => {
carousel.querySelector(".previous_image").addEventListener("click", (e) => {
    minusItem(carousel);
  });

  carousel.querySelector(".next_image").addEventListener("click", () => {
    plusItem(carousel);
  });
});

  function plusItem(carousel) {
    let item = currentItem(carousel);
  
    carousel
      .querySelectorAll(".lightboxitem")
      [item].nextElementSibling.classList.contains("item")
      ? showItems(carousel, item + 1)
      : showItems(carousel, 0);
  };
  
  function minusItem(carousel) {
    let item = currentItem(carousel);
  
    carousel.querySelectorAll(".lightboxitem")[item].previousElementSibling != null
      ? showItems(carousel, item - 1)
      : showItems(carousel, carousel.querySelectorAll(".lightboxitem").length - 1);
  }

})
*/
/*
const $prevBtn = $('.previous_image')
const $nextBtn = $('.next_image')
const $carouselItems = $('.lightboxitem')
 
let currentItemPosition = currentSlide(indexSelected)
let carouselInterval
 
const goToNextSlide = () => {
   if (currentItemPosition + 1 >=  $carouselItems.length) {
      
       const lastItem = `.item-${currentItemPosition}`
 
       currentItemPosition = 0
       const currentItem = `.item-${currentItemPosition}`
      
       setNodeAttributes(lastItem, currentItem)
   } else {
       currentItemPosition += 1
       const lastItem = `.item-${currentItemPosition - 1}`
       const currentItem = `.item-${currentItemPosition}`
      
       setNodeAttributes(lastItem, currentItem)
   }
}
 
const goToPreviousSlide = () => {
   if (currentItemPosition - 1 >=  0) {
       currentItemPosition -= 1
       const currentItem = `.item-${currentItemPosition}`
       const lastItem = `.item-${currentItemPosition + 1}`
 
       setNodeAttributes(lastItem, currentItem)
   } else {
       const lastItem = `.item-${currentItemPosition}`
      
       currentItemPosition = 2
       const currentItem = `.item-${currentItemPosition}`
      
       setNodeAttributes(lastItem, currentItem)
   }
}
 
 
const setNodeAttributes = (lastItem, currentItem) => {
   $(lastItem).css('display', 'none')
   $(currentItem).css('display', 'block')
   $(lastItem).attr('aria-hidden', 'true')
   $(currentItem).attr('aria-hidden', 'false')
}
 

$prevBtn.click(function() {
    console.log("goToPreviousSlide")
    goToPreviousSlide()

 })

 $nextBtn.click(function() {
    console.log("goToNextSlide")
    goToNextSlide()

 })


$(document).keydown(function(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which
  
    if (keyCode === 39) {
        goToNextSlide()
    } else if (keyCode === 37) {
        goToPreviousSlide()
    }
 })
*/
