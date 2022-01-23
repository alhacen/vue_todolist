<template>
  <div>
    <Input  />
    <List  />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Input from './input.vue'
import List from './list.vue'
export default {
  name: 'Todo',
  components: {
    Input,
    List
  },
  methods: {

  },
  computed:{
    ...mapState(['todos'])
  }
}
</script>
