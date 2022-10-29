
const params = (new URL(document.location)).searchParams;
const id = params.get('id');
const photographerId = params.get('photographerId');

async function getPhotographerById(id) {
    const data = await fetch("../../data/photographers.json", { mode: "no-cors" })
        .then((response) => response.json())
    console.log(data);
    const filtre = data.photographers.filter(photographer => photographer.id == id);
    console.log(filtre);
    return filtre[0];
}

async function getMediaById(photographerId) {
    const data = await fetch("../../data/photographers.json", { mode: "no-cors" })
        .then((response) => response.json())
    console.log('media', data.media, photographerId);
    const filtre = data.media.filter(element => element.photographerId == photographerId);
    console.log('test', filtre);
    return filtre;
}

async function sortMedia(value){
    
    console.log("sortMedia",value);
    let medias = [];

    if (value=="popularite") {
        console.log("if like");
        medias = await getMediaByLikes();
       console.log("medias popularite", medias);
      
    }

    if (value=="date") {
        console.log("if date");
        medias = await getMediaByDate();
       console.log("medias date", medias);
     
    }

    if (value=="titre") {
        console.log("if titre");
        medias = await getMediaByTitle();
       console.log("medias titre", medias);
     
    }
    displayMedia(medias);
    displayLightboxMedia(medias);

}

async function getMediaByLikes() {
    console.log("getMediaByLikes");
    const medias = await getMediaById(id);
   return medias.sort(function(a,b){
        return b.likes - a.likes;  
    })
}


async function getMediaByDate() {
    console.log("getMediaByDate");
    const medias = await getMediaById(id);
    return  medias.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);  
    })

}

async function getMediaByTitle() {
    console.log("getMediaByTitle");
    const medias = await getMediaById(id);
    return medias.sort(function(a,b){
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());  
    })
    
}


async function displayBanner(photographer) {
    const photographerHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector(".contact_button");
    const photographerModel = photographerFactory(photographer);
    const userBannerInfoDOM = photographerModel.getUserBannerInfoDOM();
    //   console.log(userBannerInfoDOM);
    return (userBannerInfoDOM);
}

async function displayMedia(medias) {
    let mediaDisplay = document.querySelector(".mediaSection");
    let output = '';
    let index = 0;
    mediaDisplay.innerHTML = '';
    console.log('mediaDiplay:', mediaDisplay);
    console.log('display', medias);
    medias.forEach((media) => {
        const mediaType = typeof media.image != 'undefined' ? 'image' : 'video';
        console.log("mediatype", mediaType)
        const mediaModel = mediaFactory(media, mediaType);
        console.log('mediaModel', mediaModel);
        const mediaCardDOM = mediaModel.getMediaCardDOM(index);
        output += mediaCardDOM;
        index++;
        console.log('mediaCardDOM', mediaCardDOM);

    });
    mediaDisplay.innerHTML = output;

}

async function displayLightboxMedia(medias) {
    const lightboxmodal = document.querySelector(".lightboxcontent");
    lightboxmodal.innerHTML = "";
    let output = '';
    let index = 0;
    medias.forEach((media) => {
        const mediaType = typeof media.image != 'undefined' ? 'image' : 'video';
        console.log("mediatype", mediaType)
        const mediaModel = mediaFactory(media, mediaType);
        console.log('mediaModel', mediaModel);
        const mediaLightboxDOM = mediaModel.getLightboxCardDOM();
        output += mediaLightboxDOM;
        index++;
        console.log('mediaLightboxDOM', mediaLightboxDOM);
    });
    lightboxmodal.innerHTML = output;
}

function getMediaLike() {
    let likeNb = document.querySelectorAll('.likes');
    let likeTotal = document.querySelector('.Like_Total');
    const likePlus = document.querySelectorAll('.heart-icon');
    const dataMediaId = document.querySelector('.data-media-id');
    console.log('dataMediaId', dataMediaId)


    likePlus.forEach((like, counter) => {
        console.log("like", like);
        console.log("counter", counter);
        let likeNumber = likeNb[counter];
        let clicked = [];

        like.addEventListener('click', () => {


            console.log('click', likePlus)
            if (!clicked[counter]) {
                clicked[counter] = true;
                likeNumber.innerHTML = Number(likeNumber.innerHTML) + 1;
                likeTotal.innerHTML = Number(likeTotal.innerHTML) + 1;
                console.log('likeNb', likeNumber);
            } else {
                clicked[counter] = false;
                likeNumber.innerHTML = Number(likeNumber.innerHTML) - 1;
                likeTotal.innerHTML = Number(likeTotal.innerHTML) - 1;
                console.log('likeNb', likeNumber);

            }

        })
        likeTotal.innerHTML = Number(likeTotal.innerHTML) + Number(likeNumber.innerHTML);

        console.log('likeTotal', likeTotal);
    });


}

function handleKeyup() {

    const mediaIndex = document.querySelectorAll(".tabindex");
    console.log("mediaIndex", mediaIndex);

    mediaIndex.forEach((element, index) => {
        element.addEventListener("keyup", function (e) {
            console.log("e", e)
            const keyCode = e.code
            console.log("keycode", keyCode);
            if (keyCode == 'Enter') {
                console.log("IsEnter");
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
};

init();
