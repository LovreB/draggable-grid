<template>
  <div id="app">
    <BlockRow
      v-for="(r, index) in rows"
      :key="index"
      :blocks="r.blocks"
      :row="index"
      @insBelow="insertBelowRow(index)"
      @insSide="insertRightOf(index, $event)"
    />
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
        { order: 1,
          blocks: [
              {title: "hej"},
              {title: "då"},
              {title: "hoho"}
          ]
        },
        { order: 2,
            blocks: [
                {title: "då"},
                {title: "hoho"}
            ]
        },
        { order: 3,
            blocks: [
                {title: "hej"}
            ]
        },
      ]
    }
  },
  computed: {
  },
  methods: {
      insertInRow()  {
          this.rows.push(
              {  order: 0,
                blocks: [
                    {title: "hej"}
                ]
              },
          );
          this.sortRows()
      },
      insertBelowRow(rowOrder) {
          const row = {
              order: rowOrder + 1,
              blocks: [
                  {title: "hej"}
              ]
          };
          this.rows.splice(rowOrder+1, 0, row);
      },
      insertRightOf(rowInd, blockInd) {
          console.log(rowInd);
          console.log(blockInd)
          const block = {
              title: "hej"
          };
          this.rows[rowInd].blocks.splice(blockInd +1, 0, block)
      },
      updateOrderFrom(startOrder, isIncreased) {
          for (let i = 0; i <= this.rows.length; i++) {
              let order = this.rows[i].order
              if (order >= startOrder) {
                  if (isIncreased) {
                      this.rows[i].order = order + 1
                  } else {
                      this.rows[i].order = order - 1
                  }
              }
          }
      },
      sortRows() {
          this.rows.sort(function(a, b){return a.order-b.order})
      },
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
  display: flex;
  flex-direction: column;
  background-color: #f4f3f4;
}
</style>
