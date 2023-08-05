import { LIST_API_URL } from "../constants/constants.js";
import { renderList } from "./getList.js";

export const toggleListItem = (e) => {
  if (e.target.className !== "isDone") return;
  const $item = e.target.closest(".item");
  const id = $item.dataset.id;
  const completed = e.target.id !== "O";

  fetch(`${LIST_API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  })
    .then((response) => response.json())
    .then(renderList)
    .catch((err) => console.err(err.message));
};
