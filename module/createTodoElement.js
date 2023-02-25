import { makeDOM } from '../utils/dom.js';

// const makeItemDom = ({ content, completed }) => {

//   // input list item DOM
//   const todoInputContainer = makeDOM('div', {
//     className: 'todoInputContainer',
//   });

//   const todoCheckBox = makeDOM('input', {
//     type: 'checkbox',
//     className: 'isDone',
//   });
//   todoCheckBox.setAttribute(`${isDone}`, '');

//   const todoInputLabel = makeDOM('label', {});
//   todoInputLabel.innerHTML = `${content}`;

//   const todoInputElement = makeDOM('input', {
//     type: 'text',
//     value: `${content}`,
//   });

//   appendChildrenList(todoInputContainer, [todoCheckBox, todoInputLabel, todoInputElement]);

//   // btns DOM
//   const btnsContainer = makeDOM('div', { className: 'btnsContainer' });

//   const StarsContainer = makeDOM('button', { className: 'StarBtn' });
//   const fullStarIcon = makeDOM('i', { className: 'fa-solid fa-star fullStar' });
//   const emptyStarIcon = makeDOM('i', { className: 'fa-light fa-star emptyStar' });
//   appendChildrenList(StarsContainer, [fullStarIcon, emptyStarIcon]);

//   const removeContainer = makeDOM('button', { className: 'removeContainer' });
//   const trashIcon = makeDOM('i', { className: 'fa-regular fa-trash-can trashIcon' });
//   appendChildrenList(removeContainer, [trashIcon]);

//   appendChildrenList(btnsContainer, [StarsContainer, removeContainer]);

//   appendChildrenList(LIST_CONTAINER, [todoInputContainer, btnsContainer]);

//   return LIST_CONTAINER;
// };

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
          <input
            type="checkbox"
            class='todo_checkbox' 
            ${isDone}
          />
          <label class="content">${content}</label>
          <input type="text" value="${content}" class='todoInput'/>
        </div>
        <div class="btnsContainer">
          <div class='importantContainer'>
            <button class="importantBtn ${isImportant}">
              <img src='public/assets/imgs/filledStar.svg' class='filledStar importance'/>
              <img src="public/assets/imgs/emptyStar.svg" class='emptyStar importance'>   
            </button>
          </div>
          <div class="removeContainer">
            <button>
              <img src="public/assets/imgs/trash.svg" alt='removeBtn' class='removeBtn' />
            </button>
          </div>
        </div>
  `;
  return $listItem;
};
