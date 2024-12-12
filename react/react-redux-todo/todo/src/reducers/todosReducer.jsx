import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/toDoActions.jsx';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
