<template>
    <div class="blockrow" >
        <block v-for="(b, i) in blocks"
               :key="i"
               :title="b.title"
               :empty="b.isEmpty"
               :row="row"
               @insBelow="$emit('insBelow')"
               @insSide="$emit('insSide', i)"
               @moveStart="$emit('dragStart', i)"
               @moveEnd="$emit('dragEnd', [i, $event])"
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
