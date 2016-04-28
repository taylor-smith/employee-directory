import React, { Component } from 'react';
import Employee from './Employee';
import NewEmployeeForm from './NewEmployeeForm';

class EmployeeGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, addEmployeeInput, createEmployee, updateEmployee, deleteEmployee, removeNewEmployeeInput } = this.props;
    return (
      <div>
        <div id="header">
          <h3>Employees</h3>
        </div>
        <div className="row title">
          <span className="employeeData title-row">Full Name</span>
          <span className="employeeData center-text title-row">DOB</span>
          <span className="employeeData center-text title-row">Role</span>
          <span className="employeeData icon-set"><div className="title-row-icon add-employee-input" onClick={addEmployeeInput}><i className="fa fa-plus"></i></div></span>
        </div>
        <div className="employeeList">
          { state.get('addingEmployee') ?
            <NewEmployeeForm
              createEmployee={createEmployee}
              removeNewEmployeeInput={removeNewEmployeeInput}
            />
          : null }
          {state ?
            state.get('employees').map((employee, index) =>
              <Employee
                key={index}
                name={employee.get('fullName')}
                dob={employee.get('DOB')}
                role={employee.get('role')}
                updateEmployee={updateEmployee}
                deleteEmployee={deleteEmployee}
              />
            )
          : null}
        </div>
      </div>
    )
  }
}
export default EmployeeGrid;