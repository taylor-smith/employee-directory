import React, { Component } from 'react';

const initialState = {
  fullName: '',
  DOB: '',
  role: ''
}

class NewEmployeeForm extends Component {

  constructor() {
    super();
    this.state = initialState;
    this.onSave = this.onSave.bind(this);
    this.fields = Object.keys(this.state);
  }

  updateField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  resetFields() {
    this.setState(initialState);
    this.props.removeNewEmployeeInput();
  }

  onSave() {
    this.props.createEmployee(this.state);
    this.resetFields();
  }

  render() {
    const { createEmployee } = this.props;
    return (
      <div className="row">
        {this.fields.map(field => 
          <div className="employee-input" key={field}>
            <input type="text" 
              onChange={this.updateField(field)} 
              value={this.state[field]} 
            />
          </div>
        )}
        <span className="employeeData"><div className="icon" onClick={this.onSave}><i className="fa fa-plus"></i></div></span>
      </div>
    )
  }
}

export default NewEmployeeForm;