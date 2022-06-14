    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = fetch("./data/photographers.json")
            .then(function(photographers) {
              if (photographers.ok) {
                console.log(photographers.json());
                return photographers.json();
            }})

            .catch(function(err) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
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
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

    