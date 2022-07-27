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

    function getUserBannerInfoDOM() {
        const picture = `assets/sample/Photographers ID Photos/${portrait}`;
        const ul = document.createElement('ul');
        const liname = document.createElement('li');
        const liname2 = document.createElement('li');
        liname2.className = 'liname2';
        const h1 = document.createElement('h1');
        const p = document.createElement('h3');

        
        const contact = document.querySelector(".contact_button");
        const order = document.querySelector(".photograph-header");
        const main = document.getElementById("main");
        ul.className = 'ul_style'
        h1.textContent = name;
        p.textContent = city + ', ' + country;
        p.className = 'location';

        const quote = document.createElement('p');
        quote.textContent = tagline;
        quote.className = 'quote';

        const img = document.createElement('img');
        img.src = picture;
        img.className = 'photo';

        const text = document.createElement('p');
        text.textContent = price + '€/jour';
        text.className = 'modal';

        const input = document.createElement('label');
        input.textContent = 'Trier par';
        input.className = 'Trier';

        const select = document.createElement('select');
        select.className = 'Order_By';

        const option1 = document.createElement('option');
        option1.textContent = 'Popularité';
        option1.className = 'Pop';

        const option2 = document.createElement('option');
        option2.textContent = 'Date';
        option2.className = 'Date';

        const option3 = document.createElement('option');
        option3.textContent = 'Titre';
        option3.className = 'Titre';



        ul.style.display = "flex";
        //align-items: center

        order.style.display = "flex";
        /*justify-content: space-around;
        align-items: center;*/


        liname.appendChild(h1);
        liname.appendChild(p);
        liname.appendChild(quote);
        liname2.appendChild(img);

        ul.appendChild(contact);

        ul.appendChild(liname);
        ul.appendChild(liname2);
        order.appendChild(ul);
        order.appendChild(text);
        main.appendChild(input);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        input.appendChild(select);
        main.appendChild(order);

        return (main);
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