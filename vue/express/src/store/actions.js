// import API from '../api'
import {
  getItem
} from '../api'

export default {
  fetch_data:({ commit, state }) => {
    // return API.getItem().then(res => {
    return getItem().then(res => {
      return commit('set_data', res.data)
    })
  }
}
