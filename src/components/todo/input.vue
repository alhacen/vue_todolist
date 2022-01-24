<template>
    <div class="todo__inputCol">
        <input class="todo__input" v-model="todoText" type="text" />
        <button  class="todo__btn todo__btn--add" @click="handleAdd(todoText)">Add</button>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data:()=>({
      todoText: ''
  }),
  methods:{
      handleAdd(todoText){
          this.todoText = ''
          this.$store.commit('ADD', todoText)
      },

  }
}
</script>
<style>
    .todo__btn--add{
        background-color: #008CBA !important;
outline: none;
        border: 0px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        padding: 4px 12px !important
    }
    .todo__inputCol{
        display: flex; gap:5px; justify-content:center
    }
    .todo__input{
        padding-left: 12px;
        border-radius: 6px;
        border: 1px solid gray;
        outline: none
    }
 
    .todo__addButton{
        outline: none;
        border: 0px;
        padding: 12px 18px 12px 18px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
    .todo__addButton:hover{
        opacity: .8
    }
    .todo__addButton:active{
        opacity: 1
    }
</style>