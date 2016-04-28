import React, { PropTypes, Component } from 'react';

class Employee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, dob, role } = this.props;
    return (
      <div className="row">
        <h4 className="employeeData">{name}</h4>
        <h4 className="employeeData">{dob}</h4>
        <h4 className="employeeData">{role}</h4>
        <span className="employeeData"><div className="icon"><i className="fa fa-trash delete-employee"></i></div><div className="icon edit-employee"><i className="fa fa-pencil"></i></div></span>
      </div>
    )
  }
}

export default Employee;