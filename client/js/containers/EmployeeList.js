
import { connect } from 'react-redux';
import React, { Component } from 'react';
import EmployeeGrid from '../components/EmployeeGrid';
import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from './../actions';

class EmployeeList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmployees());
  }

  render() {
    const { state, createEmployee, updateEmployee, deleteEmployee } = this.props;
    return  (
      <div>
        <EmployeeGrid state={state}
                      createEmployee={createEmployee}
                      updateEmployee={updateEmployee}
                      deleteEmployee={deleteEmployee}
        />
      </div>
    )
  }
}




function mapStateToProps(state) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {
    createEmployee: () => dispatch(createEmployee()),
    updateEmployee: () => dispatch(updateEmployee()),
    deleteEmployee: () => dispatch(deleteEmployee()),
    dispatch: dispatch
  };
}

// const EmployeeList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EmployeeList);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
