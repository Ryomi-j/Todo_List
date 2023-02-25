export const editInputContent = (e) => {

  const $item = e.target.closest('.item');
  const $listLabel = $item.querySelector('.content');
  const $editListInput = $item.querySelector('.todoInput');
  const value = $editListInput.value;

  if (e.target.className === 'content') {
    $listLabel.style.display = 'none';
    $editListInput.style.display = 'block';
    $editListInput.focus();
    $editListInput.value = '';
    $editListInput.value = value;
  }

  if (e.keyCode === 27) {
    $listLabel.style.display = 'block';
    $editListInput.style.display = 'none';
    $editListInput.value = $listLabel.innerText;
  }
};
