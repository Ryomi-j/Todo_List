import { getList } from "./module/fetch.js";
import { getDOM } from "./utils/dom.js";

const $form = getDOM('form')

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    getList();
  });


};

init()