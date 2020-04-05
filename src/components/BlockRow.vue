<template>
    <div class="blockrow" >
        <div
            class="empty"
            @mouseup="$emit('dragEnd', [-1, false])"
        />
        <div class="blockrow__blocks">
            <block v-for="(b, i) in blocks"
                   :key="i"
                   :title="b.title"
                   :empty="b.isEmpty"
                   :row="row"
                   @insBelow="$emit('insBelow')"
                   @insSide="$emit('insSide', i)"
                   @moveStart="$emit('dragStart', i)"
                   @moveEnd="$emit('dragEnd', [i, $event])"
                   @removeBlock="$emit('removeBlock', i)"
            />
        </div>
        <div
            class="empty"
            @mouseup="$emit('dragEnd', [-1, true])"
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
    flex-direction: column;
}
.blockrow__blocks {
    display: flex;
    flex-grow: 1;
}
.empty {
    height: 25px;
}
</style>
