import {_getTask} from '../../api/task'
import * as types from './mutation-types'
const getTask = ({commit}) => {
  _getTask()
    .then(result => commit(types.INCREMENT))
    .catch(e => {
      console.log(e)
    })
}
export default {
  getTask
}
