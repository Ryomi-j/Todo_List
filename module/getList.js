import { LIST_API_URL, LIST_CONTAINER } from "../constants/constants.js";
import { currentPage, limit } from "./pagination.js";
import { appendChildrenList } from '../utils/dom.js';
import { createTodoElement } from './createTodoElement.js';


export const renderAllList = (todos) => {
  LIST_CONTAINER.innerHTML = '';
  todos.forEach((item) => {
    const listItem = createTodoElement(item);
    appendChildrenList(LIST_CONTAINER, [listItem]);
  });
};

export const renderList = () => {
  fetch(`${LIST_API_URL}?_page=${currentPage}&_limit=${limit}`)
    .then((response) => response.json())
    .then((item) => renderAllList(item))
    .catch((err) => console.log(err.message));
};

export const getListLength = async () => {
  const res = await fetch(`${LIST_API_URL}`);
  const data = await res.json();
  return data.length;
};
