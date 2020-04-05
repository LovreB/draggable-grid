<template>
    <div class="blockrow" >
        <block v-for="(b, index) in blocks"
               :key="b.title"
               :title="b.title"
               :row="row"
               @insBelow="$emit('insBelow')"
               @insSide="$emit('insSide', index)"
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
    props: {
        blocks: {
            type: Array,
            validator: () => []
        },
        row: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.blockrow {
    display: flex;
    flex-grow: 1;
}
</style>
