import axios from "axios"
export const BASE_URL='https://bihar-supply-agency-3daa7bc4f99d.herokuapp.com/'
export const myAxios=axios.create({
    baseURL:BASE_URL
});