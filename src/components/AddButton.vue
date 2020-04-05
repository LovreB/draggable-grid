<template>
    <div
        class="addbutton"
        :class="positionClass">
        <p>+</p>
    </div>
</template>

<script>
export default {
    name: 'AddButton',

    props: {
        blocks: {
            type: Array,
            validator: () => []
        },
        position: {
            type: String,
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
}
.addbutton--right {
    position: absolute;
    right: -30px;
    top: 25%;
}
.addbutton--bottom {
    position: absolute;
    bottom: -30px;
    left: calc(50% - 30px);
}
</style>
