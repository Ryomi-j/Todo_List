import { getList } from './module/fetch.js';
import { getDOM } from './utils/dom.js';
import {addListItem} from './module/addListItem.js';

const $form = getDOM('form');

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    getList();
  });
  $form.addEventListener('submit', addListItem);
};

init();
