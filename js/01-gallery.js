import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onGalleryClick);
gallery.addEventListener('keydown', onEscapeClose);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        data-source="${original}"
        alt='${description}'
      />
    </a>
  </div>`;
    })
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImage = event.target.dataset.source;
  instance = basicLightbox.create(`
	<img src="${largeImage}" width="800" height="600">
`);
  instance.show();
}

function onEscapeClose(event) {
  if (event.code === 'Escape' && instance.visible()) {
    instance.close();
  }
}
