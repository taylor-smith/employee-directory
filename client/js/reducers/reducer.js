import {List, Map} from 'immutable';
import fetch from 'isomorphic-fetch';

// const initialState = fetch(`http://localhost:3000/employees`);

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