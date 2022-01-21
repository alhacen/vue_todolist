<template>
    <div style="display:flex;justify-content:center;flex-direction:column; align-items:center;padding: 24px; gap:8px">
        <div style="display:flex; justify-content:space-between; width:300px" v-for="(todo,index) in allTodos" :key="todo">
            <div style="">
                {{todo}}
            </div>
            <div style="display:flex; gap:12px">
                <button class="deleteBtn" @click="deleteTodo(index)">
                    delete
                </button>
                <button @click="handleModify(index)">
                    edit
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
        handleModify:{
            required: true,
            type: Function
        }
    },
    methods: {
        deleteTodo(index){
            this.allTodos.splice(index, 1)
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