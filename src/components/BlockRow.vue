<template>
    <div class="blockrow" >
        <div
            class="empty"
            @drop="$emit('dragEnd', [-1, false])"
            @dragover="allowDrop"
        />
        <div class="blockrow__blocks">
            <app-block v-for="(b, i) in blocks"
                   :key="i"
                   :defaultText="b.defaultText"
                   :indexRow="row"
                   :indexBlock="i"
                   @insBelow="$emit('insBelow')"
                   @insSide="$emit('insSide', i)"
                   @dragstart="$emit('dragstart', $event)"
                   @moveEnd="$emit('dragEnd', [i, $event])"
                   @removeBlock="$emit('removeBlock', i)"
            />
        </div>
        <div
            class="empty"
            @drop="$emit('dragEnd', [-1, true])"
            @dragover="allowDrop"
        />
    </div>
</template>

<script>
import AppBlock from './AppBlock.vue'

export default {
    name: 'BlockRow',
    components: {
        AppBlock
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
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        },
        hoho(ev) {
            console.log(ev)
            console.log('hihi')
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
