import {createStore, combineReducers} from 'redux';

import {composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    todos: todosReducers
})

const store = createStore(
    reducer,
    composeWithDevTools()
)