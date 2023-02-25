import { makeDOM } from '../utils/dom.js';

export const createTodoElement = (item) => {
  const { id, content, completed, important } = item;
  const isDone = completed ? 'checked' : '';
  const isImportant = important ? 'active' : '';
  const $listItem = makeDOM('div', {
    className: 'item',
  });
  $listItem.dataset.id = id;
  $listItem.innerHTML = `
        <div class="todoContainer">
          <button class='isDone' id=${isDone ? 'O' : 'X'}><button>
          <label class="content">${content}</label>
          <input type="text" value="${content}" class='todoInput'/>
        </div>
        <div class="btnsContainer">
          <div class='importantContainer'>
            <button class="importantBtn ${isImportant}"></button>
          </div>
          <div class="removeContainer">
            <button class='removeBtn'>
            </button>
          </div>
        </div>
  `;
  return $listItem;
};
