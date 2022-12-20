// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const boxDivRef = document.querySelector('.gallery')

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
`;
    
  }).join('');
 
boxDivRef.insertAdjacentHTML("beforeend", markup);
var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay :250})