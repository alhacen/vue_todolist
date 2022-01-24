import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import HelloWorld from './components/hello_world.vue'
import Todo from './components/todo'

import store from './store'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld }, 
  { path: '/todo', component: Todo },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// store.commit("RESET")
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
