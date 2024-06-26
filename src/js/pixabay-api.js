const API_KEY = '44595659-f233d14b1d86ebf700a2637af';

export function searchImj(query) {
  const BASE_URL = `https://pixabay.com`;
  const END_POINT = `/api/`;
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json('');
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
