<template>
    <div
        class="addbutton"
        :class="[{'addbutton--hidden': isHidden}, positionClass]">
        <font-awesome-icon icon="plus"/>
    </div>
</template>

<script>
export default {
    name: 'AddButton',
    props: {
        position: {
            type: String,
        },
        isHidden: {
            type: Boolean
        }
    },
    computed: {
        positionClass() {
            return "addbutton--"+this.position
        }
    }
}
</script>

<style scoped>
.addbutton {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    background-color: #ffb800;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    height: 20px;
    width: 20px;
    color: white;
    font-weight:bold;
    display: flex;
    transition: opacity 0.5s;
    align-items: center;
    justify-content: center;
}
.addbutton--hidden {
    opacity: 0;
}
.addbutton--right {
    position: absolute;
    right: -30px;
    top: calc(50% - 30px);
}
.addbutton--bottom {
    position: absolute;
    bottom: -30px;
    left: calc(50% - 30px);
}
</style>
