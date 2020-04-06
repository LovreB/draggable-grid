<template>
  <div id="app">
    <BlockRow
      v-for="(r, i) in rows"
      :key="i"
      :blocks="r.blocks"
      :row="i"
      @insBelow="insertBelowRow(i)"
      @insSide="insertRightOf(i, $event)"
      @dragstart="dragStart($event)"
      @dragEnd="dragEnd($event)"
      @removeBlock="removeBlock(i, $event)"
      @updateText="updateBlockText($event)"
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
              {text: ""}
          ]
        }
      ],
      draggedBlock: null,
    }
  },
  methods: {
      insertBelowRow(rowOrder) {
          const row = {
              blocks: [
                  {defaultText: ""}
              ]
          };
          this.insertRow(row, rowOrder+1);
      },
      insertRightOf(rowInd, blockInd) {
          const block = {
              defaultText: ""
          }
          this.insertBlock(block, rowInd, blockInd +1)
      },

      // Called when a block starts to be dracked
      dragStart([fromRowIndex, fromBlockIndex]) {
          this.draggedBlock = {
              row: fromRowIndex,
              block: fromBlockIndex
          }
      },
      // This method is called when a block is dropped, moving the block from start position to end position
      dragEnd([toRowIndex, toBlockIndex, isNewRow]) {

          let fromRowIndex = this.draggedBlock.row
          let fromBlockIndex = this.draggedBlock.block

          // Save and remove old block
          const block = this.rows[fromRowIndex].blocks[fromBlockIndex]

          // Add new row if neccessary and update old index
          if (isNewRow) {
              const row = {blocks: []};
              this.insertRow(row, toRowIndex);
              if (toRowIndex <= fromRowIndex) {
                  fromRowIndex += 1;
              }
          }
          // Insert block at given position
          this.insertBlock(block, toRowIndex, toBlockIndex)

          //Update block index and remove block
          let moveOnSameRow = toRowIndex == fromRowIndex
          if (moveOnSameRow && toBlockIndex <= fromBlockIndex) {
              fromBlockIndex = fromBlockIndex +1
          }
          this.removeBlock(fromRowIndex, fromBlockIndex)

          // Remove old row if necessary
          this.rows[fromRowIndex].blocks.length == 0 ? this.removeRow(fromRowIndex) : ''
          this.draggedBlock = null
      },
      removeBlock(rowInd, blockInd) {
          this.rows[rowInd].blocks.splice(blockInd, 1)
          this.rows[rowInd].blocks.length == 0 ? this.removeRow(rowInd) : '' // Check if row is empty
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
      updateBlockText([indexRow, indexBlock, text]) {
          this.rows[indexRow].blocks[indexBlock].text = text


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
  display: flex;
  flex-direction: column;
  background-color: #f4f3f4;
}
</style>
