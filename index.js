import { getList } from './module/getList.js';
import { getDOM } from './utils/dom.js';
import { addListItem } from './module/addListItem.js';
import { LIST_CONTAINER } from './constants/constants.js';
import { toggleListItem } from './module/toggleListItem.js';
import { editInputContent } from './module/editInputContent.js';

const $form = getDOM('form');

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    getList();
  });
  $form.addEventListener('submit', addListItem);
  LIST_CONTAINER.addEventListener('click', toggleListItem);
  LIST_CONTAINER.addEventListener('click', editInputContent)
};

init();
