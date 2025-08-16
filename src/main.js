
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, showLoader, clearGallery, hideLoader, showLoadMoreButton, hideLoadMoreButton }  from './js/render-functions';

const allForm = document.querySelector('.js-form');
const loadMoreBtn = document.querySelector('.js-load-more');
const formLoader = document.querySelector('.js-loader');
const btnLoader = document.querySelector('.js-loader-load-more');

let currentPage;
let maxPages = 0;
let textInput;
const pageSize = 15;
let getImagesOnPage;

allForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	hideLoadMoreButton();
	currentPage = 1;	
		
textInput = e.target.elements.search_text.value;
	if (!textInput.trim()) {
		 iziToast.error({
			position: 'topRight',
			message: 'Sorry, there are no images matching your search query. Please try again!',
		 });clearGallery(); return; 
	};
		clearGallery();
	   showLoader(formLoader);

	try {
		getImagesOnPage = await getImagesByQuery(textInput.trim(), currentPage);
		
		if (!getImagesOnPage.hits.length) {
			iziToast.error({
				position: 'topRight',
				message: 'Sorry, there are no images matching your search query. Please try again!',
			});
		} else { createGallery(getImagesOnPage.hits) }
		maxPages = Math.ceil(getImagesOnPage.totalHits / pageSize) ;
	}
	catch (error) {
		console.log(error);
		
		iziToast.error({
			position: 'topRight',
			message: error,
		});
	}
	checkLoadBtnStatus();
	hideLoader(formLoader);
		e.target.reset();
})
	
loadMoreBtn.addEventListener('click', async () => {
	showLoader(btnLoader);
	currentPage += 1;
	checkLoadBtnStatus();
	

	try {
		getImagesOnPage = await getImagesByQuery(textInput.trim(), currentPage);
		createGallery(getImagesOnPage.hits);
	}
	catch {iziToast.error({ message: 'ERROR' });}
	hideLoader(btnLoader);



  const cardGallery = document.querySelector('.js-gallery-card');
	if (!cardGallery) return;
  const rect = cardGallery.getBoundingClientRect();
  const cardHeight = rect.height;

  window.scrollBy({
    top: cardHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
})

function checkLoadBtnStatus() {
	if (currentPage === maxPages) {
	iziToast.info({
		message: "We're sorry, but you've reached the end of search results.",
		position: 'bottomRight',
	});
	}
	if (currentPage < maxPages) {
		showLoadMoreButton();
	} else {
		hideLoadMoreButton();
	};
}


