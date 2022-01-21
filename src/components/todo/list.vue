<template>
    <div style="display:flex;justify-content:center;flex-direction:column; align-items:center;padding: 24px; gap:8px">
        <div style="display:flex; justify-content:space-between; width:300px" v-for="(todo,index) in allTodos" :key="todo">
            <div :contenteditable="editingIndex===index" v-model="temp"  :style="{padding:'8px 4px 8px 4px', border:editingIndex===index?'1px solid black':'', width:'100%', textAlign:'left'}" >
                {{todo}}
            </div>
            <div style="display:flex; gap:12px">
                <button class="deleteBtn" @click="deleteTodo(index)">
                    delete
                </button>
                <button @click="handleModify(index)">
                    {{editingIndex===index?'Save':'edit'}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'List',
    props: {
        allTodos:{
            required: true,
            type: Array,
        },
    },
    data:()=>{
        return{
            editingIndex: -1,
            temp: ''
        }
    },
    methods: {
        deleteTodo(index){
            this.allTodos.splice(index, 1)
        },
        handleModify(index){
            if(this.editingIndex!==-1){
                this.allTodos[index] = this.temp
                this.temp=''
                this.editingIndex = -1
            }else{
                this.editingIndex=index
                this.temp = this.allTodos[index]
            }
        }
    }
}
</script>
<style>
.deleteBtn{
    outline: none;
    border: none;
    color:red;
    cursor: pointer
}
</style>