
const params = (new URL(document.location)).searchParams;
const id = params.get('id');
const photographerId = params.get('photographerId');

async function getPhotographerById(id) {
    const data = await fetch("../../data/photographers.json", { mode: "no-cors" })
        .then((response) => response.json())

    const filtre = data.photographers.filter(photographer => photographer.id == id);

    return filtre[0];
}

async function getMediaById(photographerId) {
    const data = await fetch("../../data/photographers.json", { mode: "no-cors" })
        .then((response) => response.json())
    console.log('media', data.media, photographerId);
    const filtre = data.media.filter(element => element.photographerId == photographerId);

    return filtre;
}

async function sortMedia(value) {
// menu de selction 
    let medias = [];
    if (value == "popularite") {
        medias = await getMediaByLikes();
    }

    if (value == "date") {
        medias = await getMediaByDate();
    }

    if (value == "titre") {
        medias = await getMediaByTitle();
    }

    displayMedia(medias);
    displayLightboxMedia(medias);

}

//tri par likes
async function getMediaByLikes() {

    const medias = await getMediaById(id);
   return medias.sort(function(a,b){
        return b.likes - a.likes;  
    })
}

//tri par date
async function getMediaByDate() {

    const medias = await getMediaById(id);
    return  medias.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);  
    })

}

//tri par titre
async function getMediaByTitle() {

    const medias = await getMediaById(id);
    return medias.sort(function(a,b){
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());  
    })
    
}

//affiche infos dans la banniere des photographes
async function displayBanner(photographer) {
    const photographerHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector(".contact_button");
    const photographerModel = photographerFactory(photographer);
    const userBannerInfoDOM = photographerModel.getUserBannerInfoDOM();

    return (userBannerInfoDOM);
}

//affiche medias
async function displayMedia(medias) {
    let mediaDisplay = document.querySelector(".mediaSection");
    let output = '';
    let index = 0;
    mediaDisplay.innerHTML = '';

    medias.forEach((media) => {
        const mediaType = typeof media.image != 'undefined' ? 'image' : 'video';

        const mediaModel = mediaFactory(media, mediaType);

        const mediaCardDOM = mediaModel.getMediaCardDOM(index);
        output += mediaCardDOM;
        index++;
        console.log('mediaCardDOM', mediaCardDOM);

    });
    mediaDisplay.innerHTML = output;

}

//affiche medias dans la lightbox
async function displayLightboxMedia(medias) {
    const lightboxmodal = document.querySelector(".lightboxcontent");
    lightboxmodal.innerHTML = "";
    let output = '';
    let index = 0;
    medias.forEach((media) => {
        const mediaType = typeof media.image != 'undefined' ? 'image' : 'video';

        const mediaModel = mediaFactory(media, mediaType);

        const mediaLightboxDOM = mediaModel.getLightboxCardDOM();
        output += mediaLightboxDOM;
        index++;
        console.log('mediaLightboxDOM', mediaLightboxDOM);
    });
    lightboxmodal.innerHTML = output;
}

//Compteur de like + fonction pour ajouter des likes
function getMediaLike() {
    let likeNb = document.querySelectorAll('.likes');
    let likeTotal = document.querySelector('.Like_Total');
    const likePlus = document.querySelectorAll('.heart-icon');
    const dataMediaId = document.querySelector('.data-media-id');



    likePlus.forEach((like, counter) => {

        let likeNumber = likeNb[counter];
        let clicked = [];

        like.addEventListener('click', () => {


            if (!clicked[counter]) {
                clicked[counter] = true;
                likeNumber.innerHTML = Number(likeNumber.innerHTML) + 1;
                likeTotal.innerHTML = Number(likeTotal.innerHTML) + 1;

            } else {
                clicked[counter] = false;
                likeNumber.innerHTML = Number(likeNumber.innerHTML) - 1;
                likeTotal.innerHTML = Number(likeTotal.innerHTML) - 1;


            }

        })
        likeTotal.innerHTML = Number(likeTotal.innerHTML) + Number(likeNumber.innerHTML);

        console.log('likeTotal', likeTotal);
    });


}

//déplacements au clavier
function handleKeyup() {

    const mediaIndex = document.querySelectorAll(".tabindex");


    mediaIndex.forEach((element, index) => {
        element.addEventListener("keyup", function (e) {

            const keyCode = e.code

            if (keyCode == 'Enter') {

                openLightboxModal();
                currentSlide(index);
            }
            if (keyCode == 'ArrowRight') {
                switchSlide(1);
            } if (keyCode == 'ArrowLeft') {
                switchSlide(-1);
            }
            if (keyCode == 'Escape') {
                closeLightboxModal();
            }
        })
    });
}



async function init() {
    // Récupère les données du photographe en fonction de son id
    const photographer = await getPhotographerById(id);
    displayBanner(photographer);
    const media = await getMediaById(id);
    console.log(media);
    getMediaByTitle(media);
    await displayMedia(media);
    getMediaLike();
    await displayLightboxMedia(media);
    handleKeyup();
}

init();
