<template>
    <div class="blockrow" >

        <div class="blockrow__blocks">
            <template v-for="(b,i) in blocks">
                <app-block-space
                    @drop.native="$emit('dragEnd', [row, i, false])"
                />
                <app-block
                    :text="b.text"
                    :indexRow="row"
                    :indexBlock="i"
                    @insBelow="$emit('insBelow')"
                    @insSide="$emit('insSide', i)"
                    @dragstart="$emit('dragstart', $event)"
                    @removeBlock="$emit('removeBlock', i)"
                    @updateText="$emit('updateText', $event)"
                />
            </template>
            <app-block-space
                @drop.native="$emit('dragEnd', [row, blocks.length, false])"
            />
        </div>
    </div>
</template>

<script>
    import AppBlock from './AppBlock.vue'
    import AppBlockSpace from './AppBlockSpace.vue'

export default {
    name: 'BlockRow',
    components: {
        AppBlock,
        AppBlockSpace
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
</style>
