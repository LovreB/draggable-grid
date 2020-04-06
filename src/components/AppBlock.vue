<template>
    <div
        class="block"
        @mouseover="showAddButtons"
        @mouseleave="hideAddButtons"
    >
        <AppBlockContent
            draggable="true"
            :text="text"
            @dragstart.native="dragstart"
            @updateText="$emit('updateText', [indexRow, indexBlock, $event])"
            @removeBlock="$emit('removeBlock')"
        />
        <AddButton
                position="right"
                :isHidden="!isHovering"
                @click.native="$emit('insSide')"
        />
        <AddButton
                position="bottom"
                :isHidden="!isHovering"
                @click.native="$emit('insBelow')"
        />
    </div>
</template>

<script>
import AddButton from './AddButton.vue'
import AppBlockContent from './AppBlockContent.vue'

export default {
    name: 'AppBlock',
    components: {
        AddButton,
        AppBlockContent
    },
    props: {
        text: String,
        indexRow: Number,
        indexBlock: Number
    },
    data: function() {
        return {
            isEditorMode: false,
            isHovering: false
        }
    },
    methods: {
        showAddButtons() {
            this.isHovering = true
        },
        hideAddButtons() {
            this.isHovering = false
        },
        startEdit() {
            this.isEditorMode = true
        },
        startDrag() {
            console.log('hoho')
            this.isHovering = false
        },
        dragstart() {
            this.$emit('dragstart', [this.indexRow, this.indexBlock, this.text])
        },
        updateText(text) {
            this.text = text
        },
        drop(ev){
            console.log('DROP');
            ev.preventDefault()
        },
        allowDrop(ev) {
            console.log('hihi')
            ev.preventDefault();
        }
    }
}
</script>

<style scoped>
.block {
    background-color: white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    margin: 5px;
    flex: 1;
    position: relative;
    font-size: 16px;
    align-items: stretch;
    min-height: 200px;
}
.block__container {
    display: flex;
    flex: 1;
    flex-direction: row;
    position: relative;

}
</style>
