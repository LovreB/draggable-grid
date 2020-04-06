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
      @dragEnd="moveEnd($event)"
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
              {text: "0-0"},
              {text: "0-1"},
              {text: ""},
          ]
        },
        { blocks: [
            {text: "1-0"},
            {text: "1-1"},
            ]
        },
        {
          blocks: [
            {text: "2-0"}
          ]
        },
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
          this.insertBlock(block, rowInd, blockInd)
      },
      moveStart([fromRow, fromBlock, text]) {
          console.log(text)
          this.draggedBlock = {
              row: fromRow,
              block: fromBlock,
              text: text
          }
      },
      moveEnd([toRowIndex, toBlockIndex, isNewRow]) {
          console.log('MOVEEND');
          console.log(toRowIndex)
          console.log(toBlockIndex)

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
          console.log('remove Block', rowInd, blockInd)
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
