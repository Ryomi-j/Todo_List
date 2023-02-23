import { appendChildrenList, getDOM, makeDOM } from '../utils/dom';

const makeItemDom = ({ content, isDone }) => {
  // input list item DOM
  const todoInputContainer = makeDOM('div', {
    className: 'todoInputContainer',
  });

  const todoCheckBox = makeDOM('input', {
    type: 'checkbox',
    className: 'isDone',
  });
  todoCheckBox.setAttribute(`${isDone}`, '');

  const todoInputLabel = makeDOM('label');
  todoInputLabel.innerHTML = `${content}`;

  const todoInputElement = makeDOM('input', {
    type: 'text',
    value: `${content}`,
  });

  const todoItemContainer = appendChildrenList(todoInputContainer, [todoCheckBox, todoInputLabel, todoInputElement]);

  // btns DOM
  const btnsContainer = makeDOM('div', { className: 'btnsContainer' });

  const StarsContainer = makeDOM('button', { className: 'StarBtn' });
  const fullStarIcon = makeDOM('i', { className: 'fa-solid fa-star fullStar' });
  const emptyStarIcon = makeDOM('i', { className: 'fa-light fa-star emptyStar' });
  const starBtn = appendChildrenList(StarsContainer, [fullStarIcon, emptyStarIcon]);

  const removeContainer = makeDOM('button', { className: 'removeContainer' });
  const trashIcon = makeDOM('i', { className: 'fa-regular fa-trash-can trashIcon' });
  const removeBtn = appendChildrenList(removeContainer, { trashIcon });

  const btns = appendChildrenList(btnsContainer, [starBtn, removeBtn]);

  const todo_items = getDOM(todo_items);
  appendChildrenList(todo_items, [todoItemContainer, btns]);

  return todo_items;
};

export const createTodoElement = (item) => {
  const { id, content, completed, marker } = item;
  const $listItem = makeDOM('div', {
    className: 'item',
  });
  const isDone = completed ? 'checked' : '';
  $listItem.dataset.id = id;
  $listItem.innerHTML = makeItemDom();
};
