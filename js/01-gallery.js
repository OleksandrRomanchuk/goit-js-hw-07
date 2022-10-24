import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', showLargeImg);

function createGalleryMarkup(data) {
    return data
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
        })
        .join('');
}

function showLargeImg(event) {
    event.preventDefault();

    if (!validateEventNode(event)) return;

    createLargeImgMarkup();
}

function validateEventNode(event) {
    return event.target.nodeName === 'IMG' ? true : false;
}

function createLargeImgMarkup() {
    const instance = basicLightbox.create(`<img
                                            class="gallery__image"
                                            src="${event.target.dataset.source}"
                                            alt="${event.target.alt}"
                                            />`);

    instance.show(closeWhenEscapeBtnPressed(instance));
}

function closeWhenEscapeBtnPressed(el) {
    document.addEventListener('keydown', event => {
        return event.code === 'Escape' ? el.close() : false;
    });
}
