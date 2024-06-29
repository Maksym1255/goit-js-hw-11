import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImj } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.getElementById(`search-form`);
const searchInput = document.getElementById(`search-input`);
const loader = document.getElementById(`loader`);

searchForm.addEventListener(`submit`, e => {
  e.preventDefault();
  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning!',
      message: 'Please enter a search query',
      position: 'center',
    });
    return;
  } else {
    showLoading();
    searchImj(query)
      .then(data => {
        if (data.length === 0) {
          iziToast.info({
            title: 'No results',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'center',
          });
          return;
        }
        renderGallery(data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        hideLoading();
      });
  }

  searchForm.reset();
});

export function showLoading() {
  loader.classList.add(`loader`);
}

export function hideLoading() {
  loader.classList.remove(`loader`);
}
