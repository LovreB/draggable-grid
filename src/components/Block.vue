<template>
    <div class="block__container">
        <div
            class="empty"
            @mouseup="$emit('moveEnd', false)"
        />
        <div
            class="block"
            @mouseover="showAddButtons"
            @mouseleave="hideAddButtons"
            @mousedown="$emit('moveStart')"
        >
            <p >{{ this.title }}</p>
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
        <div
            class="empty"
            @mouseup="$emit('moveEnd', true)"
        />
    </div>
</template>

<script>
import AddButton from './AddButton.vue'
export default {
    name: 'Block',
    components: {
      AddButton
    },
    props: {
        title: String,
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
        }
    }
}
</script>

<style scoped>
.block {
    background-color: white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    padding: 30px;
    margin: 5px;
    flex: 1;
    position: relative;
}
.empty {
    width: 25px;
}
.block__container {
    display: flex;
    flex: 1;
    flex-direction: row;
}
</style>
