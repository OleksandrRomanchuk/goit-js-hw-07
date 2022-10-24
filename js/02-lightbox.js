import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', showLargeImg);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function createGalleryMarkup(data) {
    return data
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`;
        })
        .join('');
}

function showLargeImg(event) {
    event.preventDefault();

    if (!validateEventNode(event)) return;
}

function validateEventNode(event) {
    return event.target.nodeName === 'IMG' ? true : false;
}
