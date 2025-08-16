
import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const generalGallery = document.querySelector('.js-gallery');
const formLoader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.js-load-more');
const btnLoader = document.querySelector('.js-loader-load-more');
let simpleLightbox = new SimpleLightbox('.js-gallery a', {
	captionDelay: 250,
	overlayOpacity: 0.95,
});





export function createGallery(images) {
	const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
		return `
        <a class="gallery-card js-gallery-card" href="${largeImageURL}"
          ><div class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${likes}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${views}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${comments}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${downloads}</p>
            </div>
          </div>
        </a>`;
	}).join('');
	generalGallery.insertAdjacentHTML('beforeend', markup);
	simpleLightbox.refresh();
	hideLoader();
}

export function showLoader() {
	if (!loadMoreBtn) {
		formLoader.classList.add('js-isActive');
	} else {
		btnLoader.classList.add('js-isActive');
	}
		
}
export function hideLoader() {
		if (loadMoreBtn) {
		btnLoader.classList.remove('js-isActive');
	} else {
		formLoader.classList.remove('js-isActive');
	}

	
	
}
export function clearGallery() {
	if (generalGallery) {
		generalGallery.innerHTML = '';
	}
}

export function showLoadMoreButton(){
	loadMoreBtn.classList.add('load-btn-active');
}
export function hideLoadMoreButton(){
	loadMoreBtn.classList.remove('load-btn-active');
}
