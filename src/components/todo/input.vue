<template>
    <div style="display: flex; gap:5px; justify-content:center">
        <input class="todoInput" v-model="todoText" type="text" />
        <button class="addBtn" @click="handleAdd(todoText)">Add</button>
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
          this.$store.commit('add', todoText)
      },

  }
}
</script>
<style>
    .todoInput{
        padding-left: 12px;
        border-radius: 6px;
        border: 1px solid gray;
        outline: none
    }
    .todoInput:focus{
        
    }
    .addBtn{
        background-color: #008CBA;
        outline: none;
        border: 0px;
        padding: 12px 18px 12px 18px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
    .addBtn:hover{
        opacity: .8
    }
    .addBtn:active{
        opacity: 1
    }
</style>