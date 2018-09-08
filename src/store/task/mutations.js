import * as types from './mutation-types'
import {setCookies, getCookies} from '../../utils/cookies'
const matations = {
  /**
   * state:当前状态树
   * v: 提交matations时传的参数
   */
  [types.SET_OPEN_ID] (state, v) {
    state.openId = v
  },
  [types.INCREMENT]: (state) => {
    state.count += 1
    setCookies('test', {a: 1}, 10)
  },
  [types.DECREMENT]: (state) => {
    state.count -= 1
    console.log(getCookies('test'))
  }
}

export default matations
