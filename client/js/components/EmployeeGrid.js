import React, { Component } from 'react';
import { fetchEmployees } from '../actions';

class EmployeeGrid extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    fetchEmployees();
  }

  render() {
    const { state, createEmployee, updateEmployee, deleteEmployee } = this.props;
    return (
      <div>:)</div>
    )
  }
}
export default EmployeeGrid;