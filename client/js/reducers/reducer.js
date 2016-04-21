import {Map} from 'immutable';
import fetch from 'isomorphic-fetch';

function setState(state, newState) {
  console.log(newState)
  state.merge(newState);
}

export default function(state=Map(), action) {
  switch (action.type) {
    case 'RECEIVE_EMPLOYEES':
      return setState(state, action.state)
  }
}