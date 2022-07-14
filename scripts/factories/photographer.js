function photographerFactory(data) {

    const { id, name, portrait, city, country, price, tagline } = data;

    console.log(JSON.parse(JSON.stringify(data)));

    const picture = `assets/sample/Photographers ID Photos/${portrait}`;

    function openPhotographer() {
        window.open('photographer.html?id=' + id);
    }



    function getUserCardDOM() {
        const article = document.createElement('article');
        article.id = id;

        const img = document.createElement('img');
        img.src = picture;
        const h2 = document.createElement('h2');


        const identity = document.createElement('p');
        identity.className = 'identity';


        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = city + ', ' + country;
        location.className = 'location';

        const quote = document.createElement('p');
        quote.textContent = tagline;
        quote.className = 'quote';

        const prix = document.createElement('p');
        prix.textContent = price + '€/jour';
        prix.className = 'prix';



        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(quote);
        article.appendChild(prix);
        article.appendChild(identity);




        article.addEventListener('click', openPhotographer);

        return (article);
    }
    function getUserBannerInfoDOM(){
        const ul = document.createElement('ul');
        const liname = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        h1.textContent = name;
        p.textContent = city + ', ' + country;
        p.className = 'location';

        liname.appendChild(h1);
        liname.appendChild(p);
        ul.appendChild(liname);

        return(ul);
    }

    return { name, picture, location, tagline, getUserCardDOM, getUserBannerInfoDOM }
}


class PhotoFactory {
    constructor(data, type) {

        if (type === 'article') {
            return new photographerFactory(data)
        } else {
            throw 'Unknown photographer'
        }
    }
}