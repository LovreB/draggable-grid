<template>
    <div class="block-content">
        <div class="block-content__header">
            <font-awesome-icon class=block-content__icon icon="pencil-alt" @click="editText"/>
            <font-awesome-icon class=block-content__icon icon="trash" @click="$emit('removeBlock')" />
            <font-awesome-icon class=block-content__icon icon="arrows-alt" @mousedown="$emit('moveStart')"/>
            <font-awesome-icon draggable="true" class=block-content__icon icon="arrows-alt" id="drag1" @dragstart="drag"/>
            <font-awesome-icon draggable="true" icon="arrows-alt"/>
        </div>
        <div class="block-content__body" draggable="true">
            <p v-if="!editing">{{this.text}}</p>
            <textarea
                v-if="editing"
                v-model="text"
                class="block-content__textarea"
                placeholder="Click here to edit"/>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AppBlockContent',

        props: {
            defaultText: {
                type: String,
                default: ''
            },
        },
        data: function() {
            return {
                editing: true,
                isHovering: false,
                text: ''
            }
        },
        created() {
            this.text = this.defaultText
            this.editing = (this.text == '')
        },
        methods: {
            showAddButtons() {
                this.isHovering = true
            },
            hideAddButtons() {
                this.isHovering = false
            },
            editText() {
                this.editing = true
            },
            drag() {
                console.log('fff')
            }
        }
    }
</script>

<style scoped>
.block-content {
    flex: 1;
    color: #d9d9d9;
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
    border: dashed 1px;
}
.block-content__icon {
    margin: 5px;
    cursor: pointer;
}
.block-content__textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    resize: none;
    font-size: 14px;
}
.block__container {
    display: flex;
    flex: 1;
    flex-direction: row;
}
</style>
