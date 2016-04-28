import {List, Map, fromJS} from 'immutable';


const initialState = Map({
  employees: List(),
  addingEmployee: false
});

function setEmployeeState(state, employees) {
  employees = fromJS(employees);
  const newState = state.set('employees', employees);
  return newState;
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'RECEIVE_EMPLOYEES':
      return setEmployeeState(state, action.state);
    case 'ADD_NEW_EMPLOYEE_INPUT':
      return state.set('addingEmployee', true);
    case 'REMOVE_EMPLOYEE_INPUT':
      return state.set('addingEmployee', false);
    case 'ADD_EMPLOYEE':
      const employee = fromJS(action.employee);
      return state.updateIn(['employees'], arry => arry.push(employee))
  }
}