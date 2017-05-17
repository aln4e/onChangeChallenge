import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
  }

  submitForm(e){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Provide Your Info</h1>
        </div>
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
              name='lastName'
              type='text'
              value={this.state.lastName}
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
      </div>
    );
  }
}

export default App;
