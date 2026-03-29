import axios from "axios"
export const BASE_URL='https://www.biharsupplyagency.shop/'
export const myAxios=axios.create({
    baseURL:BASE_URL
});