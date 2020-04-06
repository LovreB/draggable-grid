<template>
    <div class="block-content">
        <div class="block-content__header">
            <font-awesome-icon class=block-content__icon icon="pencil-alt" @click="toggleEdit"/>
            <font-awesome-icon class=block-content__icon icon="trash" @click="$emit('removeBlock')" />
            <font-awesome-icon class=block-content__icon icon="arrows-alt" />
        </div>
        <div class="block-content__body">
            <p v-if="!editing">{{this.text}}</p>
            <textarea
                v-if="editing"
                class="block-content__textarea"
                placeholder="Click here to edit"
                @focus="startEdit"
                @blur="stopEdit"
                @input="$emit('updateText', $event.target.value)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppBlockContent',
    props: {
        text: {
            type: String,
            default: ''
        },
    },
    data: function() {
        return {
            isTextareaActive: false,
            isHovering: false,
        }
    },
    computed: {
        editing() {
            return ( this.text == '' || this.isTextareaActive)
        }
    },
    methods: {
        toggleEdit() {
            this.isTextareaActive = !this.isTextareaActive
        },
        startEdit() {
            this.isTextareaActive = true
        },
        stopEdit() {
            this.isTextareaActive = false
        }
    }
}
</script>

<style scoped>
.block-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.block-content__header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    height: 30px;
    padding: 0 5px;
}
.block-content__body {
    margin: 0 30px 30px;
    display: flex;
    flex: 1;
}
.block-content__icon {
    color: #d9d9d9;
    margin: 5px;
    cursor: pointer;
}
.block-content__textarea {
    width: 100%;
    height: 100%;
    min-height: 54px;
    outline: none;
    resize: none;
    font-size: 14px;
    border: dashed 1px #d9d9d9;
    box-sizing: border-box;
    flex: 1;
}
.block-content__textarea::-webkit-input-placeholder {
    color: #4a4a4a;
    opacity: .5;
    font-style: italic;
}
</style>
