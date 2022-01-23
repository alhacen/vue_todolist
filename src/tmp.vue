<template>
    <div>
        Welcome {{double}}
    <button @click="dec()">-</button>
    <button @click="$emit('saymyname','222')">passup</button>

    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    name: 'Tmp',
    props:{
        name: {
            type: String,
            default: ''
        }
    },

    computed: {
        d(){
            return this.$store.getters.double
        },
        ...mapState({
            double: 'double'
        })
    }
}
</script>
