<template>
  <div id="app">
    <!-- <Tmp :name="hassan" @saymyname="increment"/> -->
    <!-- <Todo /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Todo from './components/todo'
// import Tmp from './tmp.vue'


export default {
  name: 'App',
  components: {
    // Tmp,
    // Todo
  },
  data: ()=>({
    hassan: 'ahmad',
  }),
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
