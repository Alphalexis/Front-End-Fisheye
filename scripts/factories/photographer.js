function photographerFactory(data) {

    const { id, name, portrait, city, country, price, tagline } = data;

    console.log(JSON.parse(JSON.stringify(data)));

    const picture = `assets/sample/Photographers ID Photos/${portrait}`;

    function openPhotographer() {
        window.open('photographer.html?id=' + id);
    }

    



    function getUserCardDOM() {

        const a = document.createElement('a');
        a.href = 'photographer.html?id=' + id;
        a.focusable = true;

        const article = document.createElement('article');
        article.id = id;

        const img = document.createElement('img');
        img.src = picture;
        img.alt = name;
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

        a.appendChild(article);

      //  article.addEventListener('click', openPhotographer);


        return (a);
    }


    function getUserBannerInfoDOM() {
        const picture = `assets/sample/Photographers ID Photos/${portrait}`;
        const ul = document.createElement('ul');
        const liname = document.createElement('li');
        const liname2 = document.createElement('li');
        liname2.className = 'liname2';
        const h1 = document.createElement('h1');
        const p = document.createElement('h3');

        const send = document.querySelector(".send_button");
        const contact = document.querySelector(".contact_button");
        const modal = document.querySelector(".name_modal");
        const order = document.querySelector(".photograph-header");
        const main = document.getElementById("main");
        ul.className = 'ul_style'
        h1.textContent = name;
        p.textContent = city + ', ' + country;
        p.className = 'location';

        modal.textContent = name;

        const quote = document.createElement('p');
        quote.textContent = tagline;
        quote.className = 'quote';

        const img = document.createElement('img');
        img.src = picture;
        img.className = 'photo';

        const text = document.createElement('p');
        const likeTotal = document.createElement('p');
        const likeTotalHeart = document.createElement('img');
        text.textContent = price + '€/jour';
        text.className = 'modal';
        likeTotal.textContent = '' ;
        likeTotal.className = 'Like_Total';
        likeTotalHeart.src = 'assets/icons/heartmodal.png';
        likeTotalHeart.className = 'Like_Total_Heart';




        const triStyle = document.querySelector(".triStyle");


        ul.style.display = "flex";


        order.style.display = "flex";

        send.addEventListener("click", function(event) {
            event.preventDefault();
          }, false);


        liname.appendChild(h1);
        liname.appendChild(p);
        liname.appendChild(quote);
        liname2.appendChild(img);

        ul.appendChild(contact);

        ul.appendChild(liname);
        ul.appendChild(liname2);
        order.appendChild(ul);
        text.appendChild(likeTotalHeart);
        text.appendChild(likeTotal);

        order.appendChild(text);


        main.appendChild(triStyle)
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