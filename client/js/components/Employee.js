import React, { PropTypes, Component } from 'react';
import EmployeeCell from './EmployeeCell';

const initialState = {
  isEditing: false,
  employee: {
    fullName: '',
    DOB: '',
    role: ''
  }
}

class Employee extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.startEdit = this.startEdit.bind(this)
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    this.setState({
      employee: {
        fullName: this.props['name'],
        DOB: this.props['dob'],
        role: this.props['role']      }
    })
  }

  startEdit() {
    this.setState({isEditing: true})
  }

  getEmployee() {
    const { isEditing, employee } = this.state;
    // const { employee, edits } = this.props;
    return {
      'fullName': employee['fullName'],
      'DOB': employee['DOB'],
      'role': employee['role']
    };
  }

  updateEdit(field) {
    return val => {
      this.setState({
        employee: {
          ...this.state.employee,
          [field]: val
        }
      });
    }
  }

  onSave(employee, id) {
    console.log(id);
    this.setState({isEditing: false})
    this.props.saveEmployee(employee, id);
  }

  render() {
    const { name, dob, role, id, deleteEmployee, saveEmployee } = this.props;
    const { isEditing } = this.state;
    const cell = field => (
      <EmployeeCell
        isEditing={isEditing}
        onChange={this.updateEdit(field)}
        value={this.getEmployee()[field]}
      />
    )
    return (
      <div className="employee">
        <div className="row">
          <span>{cell('fullName')}</span>
          <span>{cell('DOB')}</span>
          <span>{cell('role')}</span>
          { isEditing ? <span className="employeeData"><div className="icon" onClick={() => this.onSave(this.state.employee, id)}><i className="fa fa-plus"></i></div></span> 
                    : <span className="employeeData"><div className="icon" onClick={() => deleteEmployee(id)}><i className="fa fa-trash delete-employee"></i></div><div className="icon edit-employee" onClick={this.startEdit}><i className="fa fa-pencil"></i></div></span> }
        </div>
      </div>
    )
  }
}

export default Employee;