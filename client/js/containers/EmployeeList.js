import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeGrid from '../components/EmployeeGrid';

function mapStateToProps(state) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const EmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeGrid);

export default EmployeeList;
