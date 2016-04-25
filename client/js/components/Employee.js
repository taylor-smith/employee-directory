import React, { PropTypes, Component } from 'react';

class Employee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, dob, role } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{dob}</h1>
        <h1>{role}</h1>
      </div>
    )
  }
}

export default Employee;