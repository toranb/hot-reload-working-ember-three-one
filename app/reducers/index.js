import { combineReducers } from 'redux';

const initialState = {
  value: 0
};

const number = ((state, action) => {
  if(action.type === 'ADD') {
    var next = state.value + 1;
    return {
      ...state,
      value: next
    }
  }
  return state || initialState;
});

export default combineReducers({
  number
});
