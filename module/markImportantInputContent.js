import { API_URL } from '../constants/constants.js';
import { getList } from './getList.js';

export const markImportantInputContent = (e) => {
  let target;
  if (e.target.tagName === 'BUTTON') {
    target = e.target;
  } else if (e.target.parentElement.tagName === 'BUTTON') {
    target = e.target.parentNode;
  }
  if (target.classList === undefined || !target.classList.contains('importantBtn')) return;
  const $item = target.closest('.item');
  const id = $item.dataset.id;
  const important = !target.classList.contains('active');
  fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ important }),
  })
    .then((response) => response.json())
    .then(getList)
    .catch((err) => console.error(err.message));
};
