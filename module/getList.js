import {API_URL} from '../constants/constants.js'
import { currentPage, limit } from './pagination.js'
import { renderAllList } from './renderAllList.js'

export const getList = () => {
    fetch(`${API_URL}?_page=${currentPage}&_limit=${limit}`)
    .then((response) => response.json())
    .then((item) => renderAllList(item))
    .catch((err) => console.log(err.message))
}