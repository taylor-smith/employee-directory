import fetch from 'isomorphic-fetch';

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES';

export function createEmployee() {
  return {
    type: CREATE_EMPLOYEE
  };
}
export function updateEmployee() {
  return {
    type: UPDATE_EMPLOYEE
  };
}
export function deleteEmployee() {
  return {
    type: DELETE_EMPLOYEE
  };
}

export function fetchEmployees() {
  return dispatch => {
    fetch(`http://localhost:3000/employees`)
      .then(response => response.json())
      .then(json => dispatch(receiveEmployees(json)))
  };
}

function receiveEmployees(json) {
  return {
    type: RECEIVE_EMPLOYEES,
    state: json
  };
}