function photographerFactory(data) {
    
    const { id, name, portrait, city, country, price, tagline } = data;

    console.log(JSON.parse(JSON.stringify(data)));

    const picture = `assets/sample/Photographers ID Photos/${portrait}`;

    /*		"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "Voir le beau dans le quotidien",
			"price": 400,
			"portrait": "MimiKeel.jpg"*/

    function openPhotographer(){
        window.open('photographer.html?id=' + id);
    }

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.id = id;

      //  const link = article.createElement('a');
        //link.href = 'photographer.html';

        const img = document.createElement( 'img' );
       // setAttribute(img, {src:picture, "account":name})
      img.src = picture;
        const h2 = document.createElement( 'h2' );
        

        const identity = document.createElement( 'p' );
        identity.className = 'identity';

       
        h2.textContent = name;
        const location = document.createElement( 'p' );
        location.textContent = city + ', ' + country;
        location.className = 'location';

        const quote = document.createElement( 'p' );
        quote.textContent = tagline;
        quote.className = 'quote';

        const prix = document.createElement( 'p' );
        prix.textContent = price + '€/jour';
        prix.className = 'prix';



        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(quote);
        article.appendChild(prix);
        article.appendChild(identity);
//        article.appendChild(id);



        article.addEventListener('click', openPhotographer);

        return (article);
    }
    return { name, picture, location, tagline, getUserCardDOM }
}
/*
function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
*/  



class PhotoFactory {
    constructor(data, type) {

        if (type === 'article') {
            return new photographerFactory(data)
        } else {
            throw 'Unknown photographer'
        }
    }
}