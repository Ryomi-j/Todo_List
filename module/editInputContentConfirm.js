import { API_URL } from "../constants/constants.js";
import { getList } from "./getList.js";

export const editInputContentConfirm = (e) => {
  if (e.keyCode === 13) {
    const $item = e.target.closest(".item")
    const id = $item.dataset.id
    const $editInput = $item.querySelector('.todoInput');
    const content = $editInput.value

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then(getList)
      .catch((err) => console.error(err.message));
  }
};
