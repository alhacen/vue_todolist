import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    todos: [
      'asdf',
      '2qeqwe',
      'zxcvxzcv',
      'zxcvxcv'
    ]
  },
  mutations:{
    add: (state, newTodo) => state.todos.push(newTodo),
    update: (state, payload) => state.todos[payload.i] = payload.newState,
    delete: (state, i) => state.todos.splice(i, 1)
  },
  getters:{
    // double: state=> state.counter*2
  }
})
new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
