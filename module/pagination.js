import { getAllDOM, getDOM } from '../utils/dom.js';
import { getList, getListLength } from './getList.js';

export let currentPage = 1;
export const limit = 10;

export const pagination = async () => {
  const totalCount = await getListLength()
  const pageCount = totalCount && totalCount > 5 ? 5 : totalCount;
  const $pagination = getDOM('.pagination');
  let totalPage = Math.ceil(totalCount / limit);
  let pageGroup = Math.ceil(currentPage / pageCount);
  
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  
  let firstNumber = lastNumber - (pageCount - 1) > 0 ? lastNumber - (pageCount - 1) : 1

  const next = lastNumber + 1; 
  const prev = firstNumber - 1;

  let html = ``;

  if (prev > 0) {
    html += "<button class='prev' data-fn='prev'>prev</button>";
  }

  for (let i = firstNumber; i <= lastNumber; i++) {
    html += `<button class="pageNumber" id="page_${i}">${i}</button>`;
  }

  if (lastNumber < totalPage) {
    html += `<button class='next' data-fn='next'>next</button>`;
  }

  $pagination.innerHTML = html;

  const $currentPageNumbers = getAllDOM(`.pagination button`);

  $currentPageNumbers.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.fn === 'prev') {
        currentPage = prev;
      } else if (button.dataset.fn === 'next') {
        currentPage = next;
      } else {
        currentPage = button.innerText;
      }
      pagination();
      getList();
    });
  });
};
