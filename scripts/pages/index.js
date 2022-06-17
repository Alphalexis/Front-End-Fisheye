async function getPhotographers() {
    fetch("../../data/photographers.json", {mode : "no-cors"})
      .then((response) => response.json())
      .then((data) => displayData(data.photographers));
  }
  

// et bien retourner le tableau photographers seulement une fois
/*   return ({
       photographers: [...photographers, ...photographers, ...photographers]});*/


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    await getPhotographers();
 //   displayData(photographers);
};

init();

