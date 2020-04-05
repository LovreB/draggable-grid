<template>
    <div class="block" >
        <p >{{ this.title }}</p>
        <AddButton
            position="right"
            @click.native="$emit('insSide')"
        />
        <AddButton
            position="bottom"
            @click.native="$emit('insBelow')"
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
            isHovered: false
        }
    }
}
</script>

<style scoped>
.block {
    background-color: white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    padding: 30px;
    margin: 30px;
    flex: 1;
    position: relative;
}
</style>
