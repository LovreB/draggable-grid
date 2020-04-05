<template>
    <div
        class="blockempty"
        @mouseup="$emit('moveEnd')"
    >

    </div>
</template>

<script>
export default {
    name: 'BlockEmpty',

    props: {
    },
    data: function() {
        return {
            isEditorMode: false,
            isHovering: false
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.blockempty {
    flex: 1;
    padding: 25px;
}
</style>
