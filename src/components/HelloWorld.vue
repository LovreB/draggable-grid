<template>
  <div class="hello">
    <BlockRow v-for="r in rows" :key="r.id"></BlockRow>
  </div>
</template>

<script>
import BlockRow from './BlockRow.vue'
export default {
  name: 'HelloWorld',
  components: {
      BlockRow
  },
  data() {
      return {
        rows: [
            {id: 'hej'},
            {id: 'två'}
            ]
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
