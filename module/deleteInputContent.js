import { API_URL } from "../constants/constants.js"
import { getList } from "./getList.js"

export const deleteInputContent = (e) => {
    if(e.target.className !== 'removeBtn') return
    const $item = e.target.closest('.item')
    const id = $item.dataset.id

    fetch(`${API_URL}/${id}`, {method: 'DELETE'})
    .then(getList)
    .catch((err) => console.error(err))
}