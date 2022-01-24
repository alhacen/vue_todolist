<template>
    <div class="todo__list-container">
        <div class="todo__list" v-for="(todo, index) in todos" :key="todo">
            <div v-if="editingIndex!==index" >
                {{todo}}
            </div>
            <input v-else v-model="temp"/>
            <div class="todo__action-buttons">
                <button class="todo__btn todo__btn--delete" @click="deleteTodo(index)">
                    delete
                </button>
                <button class="todo__btn todo__btn--modify" @click="handleModify(index)">
                    {{editingIndex===index?'Save':'edit'}}
                </button>
            </div>
        </div>        
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'List',
    computed:{
        ...mapState({
            todos: state=>state.todo.todos
        })
    },
    data:()=>({
        temp: '',
        editingIndex: -1
    }),
    methods:{
        handleModify(i){
            if(this.editingIndex !==-1){
                this.$store.commit('UPDATE', {
                    i,
                    newState: this.temp
                })
                this.editingIndex=-1
            }else{
                this.editingIndex=i
                this.temp = this.todos[i]
            }
        },
        deleteTodo(i){
            this.$store.commit('DELETE', i)
        }
    }
}
</script>
<style>
.todo__btn{
    padding: 3px 6px;
    background-color: white;
    border: 1px solid gray;
    cursor: pointer;
    border-radius: 4px;
}
.todo__btn--delete{
    color:red;
}

.todo__action-buttons{
    display:flex; gap:12px
}
.todo__istText{
    padding: 8px 4px 8px 4px;
    text-align: left;
    width: 100%;
}
.todo__list{
    display:flex; 
    justify-content:space-between; 
    width:300px
}
.todo__list-container{
    display:flex;
    justify-content:center;
    flex-direction:column; 
    align-items:center;
    padding: 24px; 
    gap:8px;
}
</style>