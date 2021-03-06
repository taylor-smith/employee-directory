import fetch from 'isomorphic-fetch';

export const ADD_NEW_EMPLOYEE_INPUT = 'ADD_NEW_EMPLOYEE_INPUT';
export const REMOVE_EMPLOYEE_INPUT = 'REMOVE_EMPLOYEE_INPUT';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES';

export function addEmployeeInput() {
  return {
    type: ADD_NEW_EMPLOYEE_INPUT
  };
}

export function removeNewEmployeeInput() {
  return {
    type: REMOVE_EMPLOYEE_INPUT
  }
}
export function updateEmployee() {
  return {
    type: UPDATE_EMPLOYEE
  };
}
export function saveEmployee(employee, id) {
  console.log(employee);
  return dispatch => {
    return fetch(`http://localhost:3000/employees/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
    .then(() => dispatch(updateEmployee))
  }

  return {
    type: SAVE_EMPLOYEE,
    employee: employee
  }
}
export function deleteEmployee(id) {
  return dispatch => {
    return fetch(`http://localhost:3000/employees/${id}`, {
      method: 'DELETE',
    })
      // .then((response) => response.json())
      .then(() => dispatch(removeEmployee(id)))
      // .then(id => dispatch(removeEmployee(id)))
  }

}
export function createEmployee(state) {
  return dispatch => {
    return fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(json => dispatch(addEmployee(json)))
  }
}

export function fetchEmployees() {
  return dispatch => {
    return fetch('http://localhost:3000/employees')
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

function addEmployee(json) {
  return {
    type: ADD_EMPLOYEE,
    employee: json
  }
}

function removeEmployee(id) {
  console.log('removing: ' + id);
  return {
    type: DELETE_EMPLOYEE,
    id: id
  };
}