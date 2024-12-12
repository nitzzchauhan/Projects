import {createStore, applyMiddleware} from 'redux'
import cartReducer from './reducer';
import {thunk} from 'redux-thunk'







// const store = createStore(cartReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(cartReducer,applyMiddleware(thunk))

export default store