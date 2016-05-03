import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import EmployeeGrid from '../components/EmployeeGrid';
import { fetchEmployees, addEmployeeInput, createEmployee, updateEmployee, deleteEmployee, removeNewEmployeeInput, saveEmployee } from './../actions';

class EmployeeList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployees());
  }

  render() {
    const { state, addEmployeeInput, createEmployee, updateEmployee, deleteEmployee, removeNewEmployeeInput, saveEmployee } = this.props;
    return  (
      <div>
      {state ? 
          <EmployeeGrid state={state}
                        addEmployeeInput={addEmployeeInput}
                        createEmployee={createEmployee}
                        updateEmployee={updateEmployee}
                        deleteEmployee={deleteEmployee}
                        saveEmployee={saveEmployee}
                        removeNewEmployeeInput={removeNewEmployeeInput}
          />
      : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addEmployeeInput: () => dispatch(addEmployeeInput()),
    createEmployee: state => dispatch(createEmployee(state)),
    updateEmployee: () => dispatch(updateEmployee()),
    deleteEmployee: id => dispatch(deleteEmployee(id)),
    saveEmployee: (employee, id) => dispatch(saveEmployee(employee, id)),
    removeNewEmployeeInput: () => dispatch(removeNewEmployeeInput()),
    dispatch: dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
