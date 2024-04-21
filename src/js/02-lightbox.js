import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImageList = document.querySelector(".gallery");
function galleryCreate() {
  let galleryShown = "";
  for (let i = 0; i < galleryItems.length; i++) {
    galleryShown += `<li class="gallery__item">
  <a class="gallery__link" href= "${galleryItems[i].original}">
    <img
      class = "gallery__image"
      src="${galleryItems[i].preview}"
      data-source = "${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
</li>`;
  }
  galleryImageList.innerHTML = galleryShown;
}

galleryCreate();

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
   
});
