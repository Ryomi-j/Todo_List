import {API_URL} from '../constants/constants.js'
import { renderAllList } from './renderAllList.js'

export const getList = () => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((item) => renderAllList(item))
    .catch((err) => console.log(err.message))
}