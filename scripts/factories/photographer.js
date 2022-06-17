function photographerFactory(data) {
    
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    /*		"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "Voir le beau dans le quotidien",
			"price": 400,
			"portrait": "MimiKeel.jpg"*/

    function getUserCardDOM() {
       /* const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);*/
        const name = document.createElement( 'name' );
        const id = document.createElement( 'id' );
        const city = document.createElement( 'city' );
        const country = document.createElement( 'country' );
        const tagline = document.createElement( 'tagline' );
        const price = document.createElement( 'price' );
        const article = document.createElement( 'article' );

    }
    return { name, picture, getUserCardDOM }
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