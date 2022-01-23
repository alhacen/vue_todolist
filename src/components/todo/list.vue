<template>
    <div style="display:flex;justify-content:center;flex-direction:column; align-items:center;padding: 24px; gap:8px">
        <div style="display:flex; justify-content:space-between; width:300px" v-for="(todo, index) in todos" :key="todo">
            <div v-if="editingIndex!==index"  :style="{padding:'8px 4px 8px 4px', border:editingIndex===index?'1px solid black':'', width:'100%', textAlign:'left'}" >
                {{todo}}
            </div>
            <input v-else v-model="temp" style="padding: 8px 4px 8px 4px"/>
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
import { mapState } from 'vuex'
export default {
    name: 'List',
    computed:{
        ...mapState(['todos'])
    },
    data:()=>({
        temp: '',
        editingIndex: -1
    }),
    methods:{
        handleModify(i){
            if(this.editingIndex !==-1){
                this.$store.commit('update', {
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
            this.$store.commit('delete', i)
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