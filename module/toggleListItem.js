import { API_URL } from '../constants/constants.js';
import { getList } from './getList.js';

export const toggleListItem = (e) => {
  if (e.target.className !== 'isDone') return;
  const $item = e.target.closest('.item');
  const id = $item.dataset.id;
  const completed = e.target.id !== "O"

  fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  })
    .then((response) => response.json())
    .then(getList)
    .catch((err) => console.err(err.message));
};
