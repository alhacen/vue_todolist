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
      if(this.isEditing){
        this.allTodos[this.editingIndex] = data
        this.allTodos = [...this.allTodos]
        this.isEditing = false
        this.defaultText = ''
        this.editingIndex = -1
        console.log(this.allTodos)
      }else{
        this.allTodos.push(data)
      }
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
