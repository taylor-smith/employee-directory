import {Map} from 'immutable';

function setState(state, newState) {
  state.merge(newState);
}

export default function(state=Map(), action) {
  switch (action.type) {
    case 'RECEIVE_EMPLOYEES':
      return setState(state, action.state)
  }
}