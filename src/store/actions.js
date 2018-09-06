import {_getTask} from '../api/task'
const getTask = ({commit}) => {
  _getTask()
    .then(result => commit('increment'))
    .catch(e => {
      console.log(e)
    })
}
export default {
  getTask
}
