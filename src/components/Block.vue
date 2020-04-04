<template>
    <div class="block" >
        <p >{{ this.title }}</p>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: {
        title: String
    },
    data: function() {
        return {
            isEditorMode: false,
            isHovered: false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
    background-color: white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    padding: 30px;
    margin: 30px;
    flex: 1;
}
</style>
