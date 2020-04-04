<template>
    <div class="blockrow" >
        <block v-for="b in blocks"
               :key="b.title"
               :title="b.title"
        />
    </div>
</template>

<script>
import Block from './Block.vue'

export default {
    name: 'BlockRow',
    components: {
        Block
    },
    data() {
        return {
            blocks: [
                {title: "hej"},
                {title: "då"},
                {title: "hoho"}
            ],
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blockrow {
    display: flex;
    flex-grow: 1;
}
</style>
