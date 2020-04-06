<template>
    <div
        class="space"
        :class="[{ 'space--active' : dragover}, marginClass ]"
        @dragover="allowDrop"
        @dragenter="onDrop(true)"
        @dragleave="onDrop(false)"
        @drop="onDrop(false)"
    />
</template>

<script>
export default {
    name: 'AppBlockSpace',
    props: {
        isRow: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            dragover: false
        }
    },
    computed: {
        marginClass() {
            return (this.isRow) ? 'space--row' : 'spacke--block'
        }
    },
    methods: {
        allowDrop(ev) {
            ev.preventDefault()
            console.log('inappblock')
        },
        onDrop(onTarget){
            this.dragover = onTarget
        }
    }
}
</script>

<style scoped>
.space {
    min-width: 30px;
    min-height: 30px;
}
.space--row {
    margin: 0 35px;
}
.space--block {
    margin: 5px 0;
}
.space--active {
    background-color: #ffb800;
    opacity: .5;
}
</style>
