import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

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

const instance = basicLightbox.create(`<img class="modal-img" src ="">`, {
  onShow: instance => {
    document.addEventListener('keydown', onEscapeClose);
  },

  onClose: instance => {
    document.removeEventListener('keydown', onEscapeClose);
  },
});

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}
gallery.addEventListener('click', onGalleryClick);

function onEscapeClose(event) {
  if (event.code === 'Escape' && instance.visible()) {
    instance.close();
    return;
  }
}
