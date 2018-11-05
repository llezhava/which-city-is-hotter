import { createStore } from 'redux'
import game from "../reducers/reducers"
import initialState from "../reducers/initialState"

const store = createStore(game, initialState)

export default store

