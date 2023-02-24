import { LIST_CONTAINER } from '../constants/constants.js';
import { appendChildrenList } from '../utils/dom.js';
import { createTodoElement } from './createTodoElement.js';

export const renderAllList = (todos) => {
  LIST_CONTAINER.innerHTML = '';
  todos.forEach((item) => {
    const listItem = createTodoElement(item);
    appendChildrenList(LIST_CONTAINER, [listItem]);
  });
};
