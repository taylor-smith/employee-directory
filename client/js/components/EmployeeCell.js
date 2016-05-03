import React, { Component } from 'react';

const onChangeVal = onChange => e => onChange(e.target.value);

class EmployeeCell extends Component {
  render() {
    const { field, value, isEditing, onChange } = this.props;
    if (!isEditing) {
      return <h4 className="employeeData">{value}</h4>;
    }

    return (
      <input type="text"
            value={value}
            onChange={onChangeVal(onChange)}
      />
    );
  }
}

export default EmployeeCell;