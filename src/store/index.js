import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        blocks:[]
    },
    actions: {

    },
    mutations: {
        SET_BLOCKS: (state, { blocks }) => {
            state.blocks = blocks
        }
    },
    getters: {

    },
    modules: {

    }
})
export default store