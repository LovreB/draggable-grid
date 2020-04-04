<template>
  <div id="app">
    <BlockRow v-for="r in rows" :key="r.id"></BlockRow>
  </div>
</template>

<script>
import BlockRow from './components/BlockRow.vue'

export default {
  name: 'App',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
