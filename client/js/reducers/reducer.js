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

function getEmployeeIndex(state, action) {
  return state.get('employees').findIndex((value, index, list) => value.get('id') === action.id);
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
      const newEmployee = fromJS(action.employee);
      return state.updateIn(['employees'], arry => arry.push(newEmployee))
    case 'DELETE_EMPLOYEE':
      const deleteIndex = getEmployeeIndex(state, action);
      return state.updateIn(['employees'], arry => arry.delete(deleteIndex));
    case 'UPDATE_EMPLOYEE':
      const saveIndex = getEmployeeIndex(state, action);
      const updatedEmployee = fromJS(action.employee);
      return state.updateIn(['employees'], arry => arry.update(saveIndex, () => {return updatedEmployee} ));
  }
}