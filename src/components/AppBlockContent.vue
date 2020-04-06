<template>
    <div class="block-content">
        <div class="block-content__header">
            <font-awesome-icon class=block-content__icon icon="pencil-alt" @click="toggleText"/>
            <font-awesome-icon class=block-content__icon icon="trash" @click="$emit('removeBlock')" />
        </div>
        <div class="block-content__body">
            <p v-if="!editing">{{this.text}}</p>
            <textarea
                v-if="editing"
                v-model="text"
                class="block-content__textarea"
                placeholder="Click here to edit"
                @blur="saveText"
            />
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
                isTextareaActive: false,
                isHovering: false,
                text: ''
            }
        },
        computed: {
            editing() {
                return ( this.text == '' || this.isTextareaActive)
            }
        },
        watch: {
            text(newText) {
               this.$emit('updateText', newText)
            }
        },
        created() {
            this.text = this.defaultText
        },
        methods: {
            showAddButtons() {
                this.isHovering = true
            },
            hideAddButtons() {
                this.isHovering = false
            },
            toggleText() {
                this.isTextareaActive = !this.isTextareaActive
            },
            saveText() {
                this.isTextareaActive = false
            }
        }
    }
</script>

<style scoped>
.block-content {
    flex: 1;
    height: 100%;
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
.block-content__placeholder {
    border: dashed 1px #d9d9d9;
}
.block__container {
    display: flex;
    flex: 1;
    flex-direction: row;
}
</style>
