import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducers.jsx';

const store = createStore(
  rootReducer
  
);

export default store;
