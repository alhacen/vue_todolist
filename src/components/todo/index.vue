<template>
  <div>
    <Input :addToList="addToList" :defaultText="defaultText" :isEditing="isEditing" />
    <List :allTodos="allTodos" :handleModify="handleModify" />
  </div>
</template>

<script>
import Input from './input.vue'
import List from './list.vue'
export default {
  name: 'Todo',
  components: {
    Input,
    List
  },
  methods: {
    addToList(data){
        if(!data || this.allTodos.includes(data))
          return
        this.allTodos.push(data)
    },

    handleModify(index){
        this.defaultText = this.allTodos[index]
        this.isEditing = true
        this.editingIndex = index
    }
  },
  data: ()=>{
    return {
      defaultText: '',
      isEditing: false,
      editingIndex:-1,
      allTodos: [
        'asdf',
        '2qeqwe',
        'zxcvxzcv',
        'zxcvxcv'
      ]
    }
  }
}
</script>
