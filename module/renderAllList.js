import { appendChildrenList } from '../utils/dom.js';

export const renderAllList = (todos) => {
  $todos.innerHTML = '';
  todos.forEach((item) => {
    const listItem = createTodoElement(item);
    appendChildrenList($todos, [listItem]);
  });
};
