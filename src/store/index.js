import Vuex from 'vuex'
import Vue from 'vue'

import { todo } from './todo'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        todo
    }
})

export default store