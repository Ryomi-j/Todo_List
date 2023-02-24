import { API_URL } from '../constants/constants.js';
import { getList } from './getList.js';

// 체크박스 상태에 따라 completed의 상태를 T/F로 바꿔주는 함수
export const toggleListItem = (e) => {
  if (e.target.className !== 'todo_checkbox') return;
  const $item = e.target.closest('.item');
  const id = $item.dataset.id;
  const completed = e.target.checked;

  fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  })
    .then(getList)
    .catch((err) => console.err(err.message));
};
