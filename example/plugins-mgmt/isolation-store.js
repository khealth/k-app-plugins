import { createStore } from 'redux'

const initialState = {}
function nullReducers(state) {
    if (typeof state === 'undefined') {
        return initialState
    }
    return state
}

export const isolationStore = createStore(nullReducers)