import {get, post} from './http.js'

export default {
  getLogin(params) {
    return get('/login', params)
  }
}