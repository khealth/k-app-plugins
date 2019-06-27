import { createStore } from 'redux'

const initialState = { name: 'gal' }
function nullReducers(state) {
    if (typeof state === 'undefined') {
        return initialState
    }
    return state
}

export const basicReduxStore = createStore(nullReducers)