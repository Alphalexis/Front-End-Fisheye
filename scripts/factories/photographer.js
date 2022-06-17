function photographerFactory(data) {
    
    const { name, portrait, city, country, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    /*		"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "Voir le beau dans le quotidien",
			"price": 400,
			"portrait": "MimiKeel.jpg"*/

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
      //  setAttribute(img, {src:picture, "aria-label":name})
      img.src = picture;
        const h2 = document.createElement( 'h2' );
        
        article.appendChild(img);
        article.appendChild(h2);

        const id = document.createElement( 'id' );
        const city = document.createElement( 'city' );
        h2.textContent = name;
        const country = document.createElement( 'country' );
        const tagline = document.createElement( 'tagline' );
        const price = document.createElement( 'price' );
        return (article);
    }
    return { name, picture, getUserCardDOM }
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