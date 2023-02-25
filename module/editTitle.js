import { getDOM } from '../utils/dom.js';

const $label = getDOM('.title');
const $titleInput = getDOM('.titleInput');
const value = $label.innerText;

export const editTitle = (e) => {
  $label.style.display = 'none';
  $titleInput.style.display = 'block';
  $titleInput.focus();
  $titleInput.value = '';
  $titleInput.value = value;
};

export const confirmEditTitle = (e) => {
  if (e.keyCode === 27) {
    $label.style.display = 'block';
    $titleInput.style.display = 'none';
    $titleInput.value = value;
  }

  if (e.keyCode === 13) {
    $label.style.display = 'block';
    $titleInput.style.display = 'none';
    const newValue = $titleInput.value;
    $label.innerText = newValue;
  }
};
