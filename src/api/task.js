import {get, post} from '../http'
export const _getTask = () => get({
  url: '/',
  data: {
    a: 1
  }
})
export const _postTask = () => post({
  url: '/',
  data: {
    a: 1
  }
})
