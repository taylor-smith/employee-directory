import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
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