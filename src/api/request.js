import {get, post} from './http.js'

export const getLogin = (params) => {return get('/login', params)}