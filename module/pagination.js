import { getAllDOM, getDOM } from '../utils/dom.js';
import { getList } from './getList.js';

// - currentPage: 현재 페이지
// - totalCount: 총 데이터의 갯수
// - pageCount: 화면에 나타날 페이지 갯수
// - limit: 한 페이지 당 나타낼 데이터의 갯수

export let currentPage = 1;
const totalCount = 53;
const pageCount = 5;
export const limit = 10;

const $pagination = getDOM('.pagination');

export const pagination = () => {
  let totalPage = Math.ceil(totalCount / limit); // 6
  let pageGroup = Math.ceil(currentPage / pageCount); // 1

  let lastNumber = pageGroup * pageCount; // 5
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }

  let firstNumber = lastNumber - (pageCount - 1); // 1

  const next = lastNumber + 1; // 6
  const prev = firstNumber - 1; // 0

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
