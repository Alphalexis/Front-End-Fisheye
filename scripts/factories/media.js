function mediaFactory(data) {
    
    const { id, name, portrait, city, country, price, tagline } = data;

    console.log(JSON.parse(JSON.stringify(data)));

    const picture = `assets/sample/Mimi/${portrait}`;

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


        const quote = document.createElement( 'p' );
        quote.textContent = tagline;
        quote.className = 'quote';





        article.appendChild(img);

        article.appendChild(quote);

        article.appendChild(identity);




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



class MediaFactory {
    constructor(data, type) {

        if (type === 'article') {
            return new mediaFactory(data)
        } else {
            throw 'Unknown photographer'
        }
    }
}