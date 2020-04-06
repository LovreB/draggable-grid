<template>
    <div
        class="space"
        @dragover="allowDrop"
    />
</template>

<script>
export default {
    name: 'AppBlockSpace',
    methods: {
        allowDrop(ev) {
            ev.preventDefault();
        }
    }
}
</script>

<style scoped>
.space {
    width: 25px;
    height: 25px;
}
</style>
