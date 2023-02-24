import { API_URL } from '../constants/constants.js';
import { getDOM } from '../utils/dom.js';
import { getList } from './fetch.js';

const $todo_input = getDOM('.todo_input');

export const addListItem = (e) => {
  e.preventDefault();
  const item = {
    content: $todo_input.value,
    completed: false,
  };

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  .then(getList)
  .then(() => {
    $todo_input.value = ""
    $todo_input.focus()
  })
  .catch((err) => console.err(err.message))
};
