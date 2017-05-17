import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: "",
      lastName:"",
      email:""
    }
  }

  handleChange(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
  }

  submitForm(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} >
        <div className='form-group'>
          <label
            className='control-label'>
            First Name
          </label>
          <input
            name='firstName'
            type='text'
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label
            className='control-label'>
            Last Name
          </label>
          <input
            name='description'
            type='text'
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label
            className='control-label'>
            email
          </label>
          <input
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

       <input
          type='submit' value='Submit' />
      </form>
    );
  }
}

export default UserForm
