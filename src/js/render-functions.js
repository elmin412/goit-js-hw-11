export function renderImages(images) {
    const container = document.querySelector(".gallery");
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image"
                src="${webformatURL}"
                data-source="${largeImageURL}"
                alt="${tags}"/></a>
                <p>likes="${likes}"</p>
                <p>views="${views}"</p>
                <p>comments="${comments}"</p>
                <p>download="${downloads}"</p>
            </li>`;
    }).join('')
      container.insertAdjacentHTML("beforeend", markup);
}

