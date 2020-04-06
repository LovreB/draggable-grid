<template>
    <div class="block__container">
        <app-block-space
            @drop.native="$emit('moveEnd', false)"
            @dragover.native="allowDrop"
        />
        <div
            class="block"
            @mouseover="showAddButtons"
            @mouseleave="hideAddButtons"
        >
            <AppBlockContent
                draggable="true"
                :defaultText="defaultText"
                @dragstart.native="dragstart"
                @updateText="updateText"
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

        <app-block-space
            @drop.native="$emit('moveEnd', true)"
            @dragover.native="allowDrop"
        />
    </div>
</template>

<script>
import AddButton from './AddButton.vue'
import AppBlockSpace from './AppBlockSpace.vue'
import AppBlockContent from './AppBlockContent.vue'

export default {
    name: 'AppBlock',
    components: {
        AddButton,
        AppBlockSpace,
        AppBlockContent
    },
    props: {
        defaultText: String,
        indexRow: Number,
        indexBlock: Number
    },
    data: function() {
        return {
            isEditorMode: false,
            isHovering: false,
            text: '',
        }
    },
    created() {
        this.text = this.title
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
        allowDrop(ev) {
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
}
.block__container {
    display: flex;
    flex: 1;
    flex-direction: row;
    position: relative;

}
</style>
