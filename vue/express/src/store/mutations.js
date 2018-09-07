import Vue from 'vue'

export default {
  set_data: (state, data) => {
    Vue.set(state, 'data', data)
  }
}
