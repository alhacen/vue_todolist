import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/todo'
Vue.use(VueRouter)
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
})
const routes = [
  { path: '/', component: HelloWorld }, 
  { path: '/todo', component: Todo },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
