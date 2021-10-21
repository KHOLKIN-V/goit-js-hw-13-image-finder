import newsApiService from './apiService';
import imgCards from '../src/templates/image-card.hbs';
import loadMoreBtn from './btnLoadMore';

const newFetchApi = new newsApiService();
const newBtn = new loadMoreBtn();
const searchEl = document.querySelector('.search-form');
const btnSearch = document.querySelector('.btn-search');
const galleryEl = document.querySelector('.gallery');
const btnLoadMore = newBtn.button;

searchEl.addEventListener('submit', onFoundImages);
btnLoadMore.addEventListener('click', loadMore);

function onFoundImages (e) {
    e.preventDefault();
    newFetchApi.searchQuery = e.currentTarget.elements.query.value;

    newFetchApi.resetPage();
    newFetchApi.fetchSearchImages().then(i => {
        if (i.hits.length ===0) {
            galleryEl.innerHTML = '';
            btnLoadMore.hide();
            return;
        };
        const cardImages = imgCards(i.hits);
        galleryEl.innerHTML = cardImages;
        btnLoadMore.show();
    });
};

function loadMore(e) {
    e.preventDefault();

    newFetchApi.fetchSearchImages().then(i => {
        const cardImages = imgCards(i.hits);
        galleryEl.insertAdjacentHTML('beforeend', cardImages);
    });
};