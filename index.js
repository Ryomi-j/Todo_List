import { renderList } from "./module/getList.js";
import { getDOM } from "./utils/dom.js";
import { LIST_CONTAINER } from "./constants/constants.js";
import { toggleListItem } from "./module/toggleListItem.js";
import { markImportantInputContent } from "./module/markImportantInputContent.js";
import { pagination } from "./module/pagination.js";
import { updateTitle, editTitle } from "./module/editTitle.js";
import {
  addListItem,
  deleteInputContent,
  editInputContent,
  editInputContentConfirm,
} from "./module/lists.js";

const $form = getDOM("form");
const $title = getDOM(".title");
const $titleInput = getDOM(".titleInput");

const init = () => {
  window.addEventListener("DOMContentLoaded", () => {
    renderList();
    pagination();
  });
  $form.addEventListener("submit", addListItem);
  LIST_CONTAINER.addEventListener("click", toggleListItem);
  $title.addEventListener("dblclick", editTitle);
  $titleInput.addEventListener("keydown", updateTitle);
  LIST_CONTAINER.addEventListener("click", editInputContent);
  LIST_CONTAINER.addEventListener("keydown", editInputContent);
  LIST_CONTAINER.addEventListener("keydown", editInputContentConfirm);
  LIST_CONTAINER.addEventListener("click", deleteInputContent);
  LIST_CONTAINER.addEventListener("click", markImportantInputContent);
};

init();
