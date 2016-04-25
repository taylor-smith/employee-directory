import React, { Component } from 'react';
import Employee from './Employee';
import { fetchEmployees } from '../actions';

class EmployeeGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted employeegrid')
  }

  render() {
    const { state, createEmployee, updateEmployee, deleteEmployee } = this.props;
    return (
        <div className="employeeList">
          {state ?
            state.map((employee, index) =>
              <Employee
                key={index}
                name={employee.get('fullName')}
                dob={employee.get('DOB')}
                role={employee.get('role')}
              />
            )
          : null}
        </div>
    )
  }
}
export default EmployeeGrid;