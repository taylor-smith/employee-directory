import fetch from 'isomorphic-fetch';

import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  RECEIVE_EMPLOYEES,
} from './actionTypes'

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
  }
}

function receiveEmployees(json) {
  return {
    type: RECEIVE_EMPLOYEES,
    state: json
  }
}