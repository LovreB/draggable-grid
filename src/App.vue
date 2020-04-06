<template>
  <div id="app">
    <BlockRow
      v-for="(r, i) in rows"
      :key="i"
      :blocks="r.blocks"
      :row="i"
      @insBelow="insertBelowRow(i)"
      @insSide="insertRightOf(i, $event)"
      @dragstart="moveStart($event)"
      @dragEnd="moveEnd(i, $event)"
      @removeBlock="removeBlock(i, $event)"
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
        {
          blocks: [
              {defaultText: ""},
              {defaultText: ""},
              {defaultText: ""},
          ]
        },
        {
            blocks: [
                {defaultText: ""},
                {defaultText: "hoho"}
            ]
        },
        {
          blocks: [
              {defaultText: "hej"}
          ]
        },
      ],
      draggedItemIndex: null,
    }
  },
  computed: {
  },
  methods: {

      insertBelowRow(rowOrder) {
          const row = {
              blocks: [
                  {defaultText: "hej"}
              ]
          };
          this.insertRow(row, rowOrder+1);
      },
      insertRightOf(rowInd, blockInd) {
          const block = {
              defaultText: "hej"
          }
          this.insertBlock(block, rowInd, blockInd)
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
      moveStart([fromRow, fromBlock, text]) {
          console.log('movestart')
          console.log(fromRow)
          console.log(fromBlock)
          console.log(text)
          this.draggedItemIndex = {
              row: fromRow,
              block: fromBlock,
              text: text
          }
      },
      moveEnd(toRow, [toIndex, insertAfter]) {

          if (this.draggedItemIndex && (this.draggedItemIndex.row != toRow || this.draggedItemIndex.block != toIndex)) {
              if (toIndex != -1) {
                  if (insertAfter) {
                      toIndex = toIndex + 1;
                  }
                  this.moveBlock(
                      this.draggedItemIndex.row,
                      this.draggedItemIndex.block,
                      toRow,
                      toIndex,
                      this.draggedItemIndex.text
                  )
              } else {
                  if (insertAfter) {
                      toRow = toRow + 1;
                  }
                  const row = {
                      blocks: [
                      ]
                  };
                  this.insertRow(row, toRow);
                  this.moveBlock(
                      this.draggedItemIndex.row,
                      this.draggedItemIndex.block,
                      toRow,
                      toIndex +1,
                      this.draggedItemIndex.text
                  )
              }

          }
          this.draggedItemIndex = null
      },
      moveBlock(fromRow, fromBlock, toRow, toBlock, text) {
          console.log(text)
          const block = {defaultText: text}
          this.removeBlock(fromRow, fromBlock)
          this.insertBlock(block, toRow, toBlock)
          this.rows[fromRow].blocks.length == 0 ? this.removeRow(fromRow) : ''
      },
      removeBlock(rowInd, blockInd) {
          this.rows[rowInd].blocks.splice(blockInd, 1)
      },
      insertBlock(block, rowInd, blockInd) {
          this.rows[rowInd].blocks.splice(blockInd, 0, block)
      },
      removeRow(rowInd) {
          this.rows.splice(rowInd, 1)
      },
      insertRow(row, rowInd) {
          this.rows.splice(rowInd, 0, row)
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
