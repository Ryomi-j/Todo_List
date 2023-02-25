import { getList } from './module/getList.js';
import { getDOM } from './utils/dom.js';
import { addListItem } from './module/addListItem.js';
import { LIST_CONTAINER } from './constants/constants.js';
import { toggleListItem } from './module/toggleListItem.js';
import { editInputContent } from './module/editInputContent.js';
import { editInputContentConfirm } from './module/editInputContentConfirm.js';
import { deleteInputContent } from './module/deleteInputContent.js';
import { markImportantInputContent } from './module/markImportantInputContent.js';
import { pagination } from './module/pagination.js';

const $form = getDOM('form');

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    getList();
    pagination();
  });
  $form.addEventListener('submit', addListItem);
  LIST_CONTAINER.addEventListener('click', toggleListItem);
  LIST_CONTAINER.addEventListener('click', editInputContent);
  LIST_CONTAINER.addEventListener('keydown', editInputContent);
  LIST_CONTAINER.addEventListener('keydown', editInputContentConfirm);
  LIST_CONTAINER.addEventListener('click', deleteInputContent);
  LIST_CONTAINER.addEventListener('click', markImportantInputContent);
};

init();
