const params = (new URL(document.location)).searchParams;
const id = params.get('id');

async function getPhotographerById(id) {
    const data = await fetch("../../data/photographers.json", { mode: "no-cors" })
        .then((response) => response.json())
    console.log(data);
    const filtre = data.photographers.filter(photographer => photographer.id == id);
    console.log(filtre);
    return filtre[0];
}

async function displayBanner(photographer) {
    const photographerHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector(".photograph-header .contact_button");
    const photographerModel = photographerFactory(photographer);
    const userBannerInfoDOM = photographerModel.getUserBannerInfoDOM();
    console.log(userBannerInfoDOM);
    photographerHeader.insertBefore(userBannerInfoDOM, contactButton);
};

async function init() {
    // Récupère les données du photographe en fonction de son id
    const photographer = await getPhotographerById(id);
    displayBanner(photographer);

};

init();
