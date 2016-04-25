import {List} from 'immutable';

function setState(state, newState) {
  debugger;
  return state.merge(newState);
}

export default function(state=List(), action) {
  switch (action.type) {
    case 'RECEIVE_EMPLOYEES':
      return setState(state, action.state);
  }
}