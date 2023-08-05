import { TITLE_API_URL } from "../constants/constants.js";
import { getDOM } from "../utils/dom.js";

const $label = getDOM(".title");
const $titleInput = getDOM(".titleInput");
let titleValue = $titleInput.innerText

fetch(TITLE_API_URL)
  .then(response => response.json())
  .then(data => {
    $label.innerText = data.title;
    $titleInput.value = data.title;
    titleValue = data.title
  })
  .catch(error => console.error('Error:', error));

  export const editTitle = () => {
  $label.style.display = "none";
  $titleInput.style.display = "block";
};

export const updateTitle = async (e) => {
  if (e.keyCode === 27) {
    $label.style.display = "block";
    $titleInput.style.display = "none";
    $titleInput.value = titleValue;
  } else if (e.keyCode === 13) {
    const newValue = $titleInput.value;
    const res = await fetch(TITLE_API_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newValue }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    } else {
      const data = await res.json();
      $label.style.display = "block";
      $titleInput.style.display = "none";
      $label.innerText = newValue;

      return data.title
    }
  }
};
