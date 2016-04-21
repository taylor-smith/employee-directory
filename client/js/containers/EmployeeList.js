import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeGrid from '../components/EmployeeGrid';
import {
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../actions';

function mapStateToProps(state) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {
    createEmployee: () => dispatch(createEmployee()),
    updateEmployee: () => dispatch(updateEmployee()),
    deleteEmployee: () => dispatch(deleteEmployee())
  };
}

const EmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeGrid);

export default EmployeeList;
