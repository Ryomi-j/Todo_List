import { LIST_API_URL } from "../constants/constants.js";
import { getDOM } from "../utils/dom.js";
import { renderList } from "./getList.js";

// todo list 추가
export const addListItem = (e) => {
  const $todo_input = getDOM(".todo_input");

  e.preventDefault();
  const item = {
    content: $todo_input.value,
    completed: false,
  };

  fetch(LIST_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(renderList)
    .then(() => {
      $todo_input.value = "";
      $todo_input.focus();
    })
    .catch((err) => console.error(err.message));
};

// todo list 삭제
export const deleteInputContent = (e) => {
  if (e.target.className !== "removeBtn") return;
  const $item = e.target.closest(".item");
  const id = $item.dataset.id;

  fetch(`${LIST_API_URL}/${id}`, { method: "DELETE" })
    .then(renderList)
    .catch((err) => console.error(err));
};

// todo list input 활성화
export const editInputContent = (e) => {
  const $item = e.target.closest(".item");
  const $listLabel = $item.querySelector(".content");
  const $editListInput = $item.querySelector(".todoInput");
  const value = $editListInput.value;

  if (e.target.className === "content") {
    $listLabel.style.display = "none";
    $editListInput.style.display = "block";
    $editListInput.focus();
    $editListInput.value = "";
    $editListInput.value = value;
  }

  if (e.keyCode === 27) {
    $listLabel.style.display = "block";
    $editListInput.style.display = "none";
    $editListInput.value = $listLabel.innerText;
  }
};

// todo list 업데이트(편집 확인)
export const editInputContentConfirm = (e) => {
  if (e.keyCode === 13) {
    const $item = e.target.closest(".item");
    const id = $item.dataset.id;
    const $editInput = $item.querySelector(".todoInput");
    const content = $editInput.value;

    fetch(`${LIST_API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then(renderList)
      .catch((err) => console.error(err.message));
  }
};
