import { API_URL } from '../constants/constants.js';
import { getList } from './getList.js';

export const markImportantInputContent = (e) => {
  if (e.target.classList === undefined || !e.target.classList.contains('importantBtn')) return;
  const $item = e.target.closest('.item');
  const id = $item.dataset.id;
  const important = !e.target.classList.contains('active');
  fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ important }),
  })
    .then((response) => response.json())
    .then(getList)
    .catch((err) => console.error(err.message));
};
