//choisis le type approprié de media entre image et vidéo. Sinon affiche "media non définie"
function mediaFactory(data, mediaType) {
    if (mediaType == 'image') {

        return new imageMedia(data);

    } else if (mediaType == 'video') {

        return new videoMedia(data);
    } else {
        throw "undefined media type";
    }
}


//affichage image
function imageMedia(data) {
    console.log("imageMedia");
    const { id, photographerId, title, image, likes } = data;
    const mediaPath = `assets/sample/${photographerId}/${image}`;
    function getMediaCardDOM(index) {
        const content = `
            <div class="tabindex" tabindex="0" >
                <figure>
                    <img src="${mediaPath}" alt="${title}" width=350 height=300 onclick="openLightboxModal();currentSlide(${index})" aria-label="image closeup view"  loading="lazy">
                    <figcaption>
                        <span>
                            ${title}
                        </span>
                        <div>
                            <span class="likes" data-media-id="${id}">${likes} </span>
                            <img src="assets/icons/heart.png" alt="likes" class="heart-icon" style="
                            height: 20px;
                        "/>
                        </div>
                    </figcaption>

                </figure>
            </div>
        `;


        return content;
    }

    //affichage image en lightbox
    function getLightboxCardDOM(){
        const content = `
        <figure class=lightboxitem  ">
        <img src="${mediaPath}" alt="${title}"width=1000 height=817 loading="lazy" style="
        object-fit: cover;
    " >
        <figcaption>
            <span>
                ${title}
            </span>

            </div>
            </figcaption>
        </figure>
        `;

        return content;
    }

    return { title, likes, mediaPath, photographerId, getMediaCardDOM, getLightboxCardDOM };
}

//affichage vidéo
function videoMedia(data) {
    console.log("videoMedia");
    const { id, photographerId, title, video, likes } = data;
    const mediaPath = `assets/sample/${photographerId}/${video}`;

    function getMediaCardDOM(index) {
		const content = `
            <div class="video tabindex" data-index="${index}" tabindex="0">
                <div class="video-container">
                    <video class="videos"  style="width: 350px; height: 300px; object-fit: cover; margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 40px;
                    margin-inline-end: 40px;" onclick="openLightboxModal();currentSlide(${index})"  aria-label="image closeup view">
                        <source src="${mediaPath}#t=0.1" type="video/mp4" style="width: 350px; height: 300px">
                    </video>
                </div>
                <div class="infos" style="margin-left: 40px; margin-top: -15px;">
                    <span>${title}</span>
                    <div>
                        <span class="likes" data-media-id="${id}">${likes} </span>
                        <img src="assets/icons/heart.png" alt="likes" class="heart-icon" style="
                        height: 20px;
                    "/>
                    </div>
                    </div>
                
            </div>
        `;
		return content;
	}

//affichage vidéo en lightbox
    function getLightboxCardDOM(){
        const content = `
        <figure class=lightboxitem>
      <video  controls preload="metadata"   width=1000 height=837 >
                    <source src="${mediaPath}#t=0.1" type="video/mp4" alt="${title}"  loading="lazy">
                    </video>
                    <figcaption>
                        <span>
                            ${title}
                        </span>

                        </div>
                        </figcaption>
                        </figure>
                
                `;
        return content;
    }

return { title, likes, mediaPath, photographerId, getMediaCardDOM, getLightboxCardDOM };

}


class MediaFactory {
    constructor(data, type) {

        if (type === 'article') {
            return new mediaFactory(data)
        } else {
            throw 'Unknown Media'
        }
    }
}
