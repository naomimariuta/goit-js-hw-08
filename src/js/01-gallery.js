import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');
  listItem.innerHTML = `
  <a class='gallery__link' href='${item.original}'>
    <img class="gallery__image"
    src='${item.preview}'
    data-source='${item.original}'
    alt='${item.description}' />
  </a>
  `;
  listEl.append(listItem);
});

const lightBox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
lightBox.on('show.simplelightbox');
